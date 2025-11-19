import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-medications',
  standalone: true,
  imports: [CommonModule, RouterLink],
  templateUrl: './medications.html',
  styleUrls: ['./medications.css']
})
export class MedicationsComponent {
  medications = [
    { id: 1, name: 'Lisinopril', dose: '10 mg', patient: 'John Doe' },
    { id: 2, name: 'Metformin', dose: '500 mg', patient: 'Jane Smith' }
  ];
}
