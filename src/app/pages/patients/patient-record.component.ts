import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivatedRoute, RouterLink } from '@angular/router';

@Component({
    selector: 'patient-record',
    standalone: true,
    imports: [CommonModule, RouterLink],
    templateUrl: './patient-record.html',
    styleUrls: ['./patient-record.css']
})
export class PatientRecordComponent {
    id: string | null;
    patient = { id: 1, name: 'John Doe', dob: '1980-01-01', gender: 'Male' };

    constructor(private route: ActivatedRoute) {
        this.id = this.route.snapshot.paramMap.get('id');
        // In a real app you would fetch the patient data by id here.
    }
}
