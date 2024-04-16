import { Component, OnInit } from '@angular/core';
import { Lab } from 'src/app/Models/lab';
import { ApiService } from 'src/app/Services/api.service';

@Component({
  selector: 'app-labs',
  templateUrl: './labs.component.html',
  styleUrls: ['./labs.component.scss']
})
export class LabsComponent implements OnInit {
  constructor(private lab: ApiService) { }
  labs: Lab[] = [];
  ngOnInit() {
    this.GetLabs()
  }
  GetLabs() {
    this.labs = this.lab.getAllLabs()
  }
}
