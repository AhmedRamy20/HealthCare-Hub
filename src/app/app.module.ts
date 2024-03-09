import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './components/SharedComponents/navbar/navbar.component';
import { HomeComponent } from './Views/home/home.component';
import { LabsComponent } from './Views/labs/labs.component';
import { PharmacyComponent } from './Views/pharmacies/pharmacies.component';
import { ContactComponent } from './Views/contact/contact.component';
import { CartComponent } from './Views/cart/cart.component';
import { LandingComponent } from './components/landing/landing.component';
import { NotFoundComponent } from './Views/not-found/not-found.component';
import { NgxTypedJsModule } from 'ngx-typed-js';
import { WorkComponent } from './components/work/work.component';
import { LoginComponent } from './Views/login/login.component';
import { SignupComponent } from './Views/signup/signup.component';
import { ChatbotComponent } from './components/SharedComponents/chatbot/chatbot.component';
import { LabsDemoComponent } from './components/labs-demo/labs-demo.component';
import { ClientRateComponent } from './components/client-rate/client-rate.component';
import { DownloadAppComponent } from './components/download-app/download-app.component';
import { FooterComponent } from './components/SharedComponents/footer/footer.component';
import { ServicesComponent } from './components/services/services.component';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { FormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NurseDashComponent } from './components/Dashboards/nurse-dash/nurse-dash.component';
import { DoctorDashComponent } from './components/Dashboards/doctor-dash/doctor-dash.component';
import { LabDashComponent } from './components/Dashboards/lab-dash/lab-dash.component';
import { PharmacyDashComponent } from './components/Dashboards/pharmacy-dash/pharmacy-dash.component';
import {MatTableModule} from '@angular/material/table';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    HomeComponent,
    LabsComponent,
    PharmacyComponent,
    ContactComponent,
    CartComponent,
    LandingComponent,
    NotFoundComponent,
    WorkComponent,
    LoginComponent,
    SignupComponent,
    ChatbotComponent,
    LabsDemoComponent,
    ClientRateComponent,
    DownloadAppComponent,
    FooterComponent,
    ServicesComponent,
    NurseDashComponent,
    DoctorDashComponent,
    LabDashComponent,
    PharmacyDashComponent,
  ],
  imports: [
    FontAwesomeModule,
    BrowserModule,
    AppRoutingModule,
    NgxTypedJsModule,
    MatFormFieldModule,
    MatInputModule,
    FormsModule,
    MatButtonModule,
    BrowserAnimationsModule,
    MatTableModule

  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
