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
import { MedicationComponent } from './components/Dashboards/pharmacy-dash/medication/medication.component';
import { ChartsComponent } from './components/Dashboards/pharmacy-dash/charts/charts.component';
import { MessagesComponent } from './components/Dashboards/pharmacy-dash/messages/messages.component';
import { OrdersComponent } from './components/Dashboards/pharmacy-dash/orders/orders.component';

const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: '/home' },
  { path: 'home', component: HomeComponent },
  { path: 'labs', component: LabsComponent },
  { path: 'pharmacy', component: PharmacyComponent },
  { path: 'contact', component: ContactComponent },
  {
    path: 'dashboard',
    children: [
      { path: 'nurse', component: NurseDashComponent },
      { path: 'doctor', component: DoctorDashComponent },
      {
        path: 'admin-ph',
        component: PharmacyDashComponent,
        children: [
          { path: 'medication', component: MedicationComponent },
          { path: 'orders', component: OrdersComponent },
          { path: 'charts', component: ChartsComponent },
          { path: 'messages', component: MessagesComponent },
        ],
      },
      { path: 'admin-lab', component: LabDashComponent },
    ],
  },
  { path: 'cart', component: CartComponent },
  { path: 'login', component: LoginComponent },
  { path: 'signup', component: SignupComponent },
  { path: '**', component: NotFoundComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
