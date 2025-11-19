import { Component } from '@angular/core';
import { NgFor, DatePipe } from '@angular/common';

@Component({
  selector: 'app-account-summary',
  standalone: true,
  templateUrl: './account-summary.html',
  styleUrls: ['./account-summary.css'],
  imports: [NgFor, DatePipe]
})
export class AccountSummaryComponent {

  recentActivities = [
    { date: new Date('2025-02-01T10:30:00'), description: 'Logged into account' },
    { date: new Date('2025-02-02T14:15:00'), description: 'Viewed EMR summary' },
    { date: new Date('2025-02-03T09:05:00'), description: 'Updated contact info' }
  ];

  // 🔹 Add this:
  importantInfo: string = 'Your account is in good standing. No pending actions at this time.';

}
