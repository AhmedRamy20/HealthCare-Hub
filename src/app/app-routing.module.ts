import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './Views/home/home.component';
import { NotFoundComponent } from './Views/not-found/not-found.component';
import { LabsComponent } from './Views/labs/labs.component';
import { PharmacyComponent } from './Views/pharmacies/pharmacies.component';
import { ContactComponent } from './Views/contact/contact.component';
import { CartComponent } from './Views/cart/cart.component';
import { LoginComponent } from './Views/login/login.component';
import { SignupComponent } from './Views/signup/signup.component';
import { NurseDashComponent } from './components/Dashboards/nurse-dash/nurse-dash.component';
import { DoctorDashComponent } from './components/Dashboards/doctor-dash/doctor-dash.component';
import { PharmacyDashComponent } from './components/Dashboards/pharmacy-dash/pharmacy-dash.component';
import { LabDashComponent } from './components/Dashboards/lab-dash/lab-dash.component';

const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: '/home' },
  { path: 'home', component: HomeComponent },
  { path: 'labs', component: LabsComponent },
  { path: 'pharmacy', component: PharmacyComponent },
  { path: 'contact', component: ContactComponent },
  { path: 'dashboard/nurse', component: NurseDashComponent },
  { path: 'dashboard/doctor', component: DoctorDashComponent },
  { path: 'dashboard/admin-ph', component: PharmacyDashComponent },
  { path: 'dashboard/admin-lab', component: LabDashComponent },
  { path: 'cart', component: CartComponent },
  { path: 'login', component: LoginComponent },
  { path: 'signup', component: SignupComponent },
  { path: '**', component: NotFoundComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule { }
