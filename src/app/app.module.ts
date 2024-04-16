import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './Components/SharedComponents/navbar/navbar.component';
import { HomeComponent } from './Views/home/home.component';
import { LabsComponent } from './Views/labs/labs.component';
import { PharmacyComponent } from './Views/pharmacies/pharmacies.component';
import { ContactComponent } from './Views/contact/contact.component';
import { CartComponent } from './Views/cart/cart.component';
import { LandingComponent } from './Components/landing/landing.component';
import { NotFoundComponent } from './Views/not-found/not-found.component';
import { NgxTypedJsModule } from 'ngx-typed-js';
import { WorkComponent } from './Components/work/work.component';
import { LoginComponent } from './Views/login/login.component';
import { SignupComponent } from './Views/signup/signup.component';
import { ChatbotComponent } from './Components/SharedComponents/chatbot/chatbot.component';
import { LabsDemoComponent } from './Components/labs-demo/labs-demo.component';
import { ClientRateComponent } from './Components/client-rate/client-rate.component';
import { DownloadAppComponent } from './Components/download-app/download-app.component';
import { FooterComponent } from './Components/SharedComponents/footer/footer.component';
import { ServicesComponent } from './Components/services/services.component';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { FormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NurseDashComponent } from './Components/Dashboards/nurse-dash/nurse-dash.component';
import { DoctorDashComponent } from './Components/Dashboards/doctor-dash/doctor-dash.component';
import { LabDashComponent } from './Components/Dashboards/lab-dash/lab-dash.component';
import { PharmacyDashComponent } from './Components/Dashboards/pharmacy-dash/pharmacy-dash.component';
import { MatTableModule } from '@angular/material/table';
import { HttpClientModule } from '@angular/common/http';
import { DoctorsComponent } from './Views/doctors/doctors.component';
import { LoaderComponent } from './Utility/loader/loader.component';
import { ToasterComponent } from './Utility/toaster/toaster.component';
import { CardComponent } from './Components/card/card.component';
import { TestsComponent } from './Views/tests/tests.component'

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
    DoctorsComponent,
    LoaderComponent,
    ToasterComponent,
    CardComponent,
    TestsComponent,
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
    MatTableModule,
    HttpClientModule


  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule { }
