import { Routes } from '@angular/router';
import { PatientListComponent } from './pages/patients/patient-list.component';
import { PatientRecordComponent } from './pages/patients/patient-record.component';
import { AppointmentsComponent } from './pages/appointments/appointments.component';
import { EncountersComponent } from './pages/encounters/encounters.component';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { MedicationsComponent } from './pages/medications/medications.component';
import { AccountSummaryComponent } from './pages/account-summary/account-summary';
import { FileUploaderComponent } from './components/file-uploader/file-uploader.component'; 

export const routes: Routes = [
    { path: '', redirectTo: 'dashboard', pathMatch: 'full' },
    { path: 'dashboard', component: DashboardComponent },
    { path: 'patients', component: PatientListComponent },
    { path: 'patient/:id', component: PatientRecordComponent },
    { path: 'appointments', component: AppointmentsComponent },
    { path: 'encounters', component: EncountersComponent },
    { path: 'medications', component: MedicationsComponent },
    { path: 'account-summary', component: AccountSummaryComponent },
    { path: 'file-uploader', component: FileUploaderComponent }
];
