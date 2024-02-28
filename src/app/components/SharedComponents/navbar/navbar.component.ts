import { Component, HostListener } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent {
  scrolled: boolean = false;
@HostListener('window.scroll',['$event']) onScroll(){
  const scrollPosition = window.screenTop || document.documentElement.scrollTop || document.body.scrollTop || 0;
  this.scrolled = scrollPosition >= 40;
}
}
