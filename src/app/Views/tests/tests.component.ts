import { Component } from '@angular/core';
import { Test } from 'src/app/Models/test';
import { ApiService } from 'src/app/Services/api.service';

@Component({
  selector: 'app-tests',
  templateUrl: './tests.component.html',
  styleUrls: ['./tests.component.scss']
})
export class TestsComponent {
  constructor(private test:ApiService){}
  tests:Test[]=[];
  ngOnInit()
  {
    this.getTests()
  }
  getTests(){
    this.tests = this.test.getAllTests()
  }

}
