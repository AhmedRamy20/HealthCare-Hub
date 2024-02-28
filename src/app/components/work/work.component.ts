import { Component, ElementRef, Renderer2, TemplateRef } from '@angular/core';

@Component({
  selector: 'app-work',
  templateUrl: './work.component.html',
  styleUrls: ['./work.component.scss'],
})
export class WorkComponent {
  constructor( private rendrer: Renderer2) {}
  ngAfterViewInit(): void {
    

  }
}
