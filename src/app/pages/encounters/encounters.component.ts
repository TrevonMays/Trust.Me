import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'encounters-page',
  standalone: true,
  imports: [CommonModule, RouterLink],
  templateUrl: './encounters.html',
  styleUrls: ['./encounters.css']
})
export class EncountersComponent {
  encounters = [
    { id: 101, patient: 'John Doe', date: '2025-11-10', summary: 'Routine visit' },
    { id: 102, patient: 'Jane Smith', date: '2025-10-02', summary: 'Follow-up' }
  ];
}
