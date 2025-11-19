import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'appointments-page',
  standalone: true,
  imports: [CommonModule, RouterLink],
  templateUrl: './appointments.html',
  styleUrls: ['./appointments.css']
})
export class AppointmentsComponent {
  appointments = [
    { id: 1, patient: 'John Doe', time: '2025-11-20 09:00', status: 'Scheduled' },
    { id: 2, patient: 'Jane Smith', time: '2025-11-20 10:00', status: 'Check-in' }
  ];
}
