import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';

@Component({
    selector: 'patient-list',
    standalone: true,
    imports: [CommonModule, RouterLink],
    templateUrl: './patient-list.html',
    styleUrls: ['./patient-list.css']
})
export class PatientListComponent {
    patients = [
        { id: 1, name: 'John Doe', dob: '1980-01-01' },
        { id: 2, name: 'Jane Smith', dob: '1990-05-12' }
    ];
}
