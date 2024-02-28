import { Component, HostListener } from '@angular/core';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'integratedHealthCare';
  // @HostListener('window:beforeunload', ['$event'])
  // unloadNotification($event: any): void {
  //   // Display a confirmation message
  //   $event.returnValue = true; // Standard for most browsers
  // }
}
