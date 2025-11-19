import { Component, EventEmitter, Output, Input, OnDestroy } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'file-uploader',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './file-uploader.html',
  styleUrls: ['./file-uploader.css']
})
export class FileUploaderComponent implements OnDestroy {
  @Output() filesChange = new EventEmitter<File[]>();
  @Input() accept = 'image/*';
  @Input() maxSize = 5 * 1024 * 1024; // 5 MB
  @Input() maxFiles = 10;

  files: Array<{ file: File; url: string }> = [];

  handleInput(e: Event) {
    const input = e.target as HTMLInputElement;
    if (!input.files) return;
    this.addFiles(Array.from(input.files));
    input.value = '';
  }

  addFiles(list: File[]) {
    for (const f of list) {
      if (this.files.length >= this.maxFiles) break;
      if (!f.type || !f.type.startsWith('image/')) continue;
      if (f.size > this.maxSize) continue;
      const url = URL.createObjectURL(f);
      this.files.push({ file: f, url });
    }
    this.emitFiles();
  }

  handleDrop(e: DragEvent) {
    e.preventDefault();
    if (e.dataTransfer?.files) {
      this.addFiles(Array.from(e.dataTransfer.files));
    }
  }

  handleDragOver(e: DragEvent) {
    e.preventDefault();
  }

  removeFile(index: number) {
    const f = this.files[index];
    if (f?.url) URL.revokeObjectURL(f.url);
    this.files.splice(index, 1);
    this.emitFiles();
  }

  emitFiles() {
    this.filesChange.emit(this.files.map(f => f.file));
  }

  upload() {
    // Example: build FormData for upload. Replace with real upload logic.
    const fd = new FormData();
    this.files.forEach(f => fd.append('files', f.file, f.file.name));
    // For now just log to console and emit
    console.log('Prepared FormData with', this.files.length, 'files');
    this.emitFiles();
  }

  ngOnDestroy(): void {
    for (const f of this.files) {
      if (f.url) URL.revokeObjectURL(f.url);
    }
  }
}
