import { Injectable } from '@angular/core';
import { Lab } from '../Models/lab';
import { Test } from '../Models/test';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor() { }
  getAllLabs() {
    let labs: Lab[] = [
      { name: 'Lab Name', description: 'abcsasdasdasdasdas', imgUrl: 'https://placehold.co/600x400', testNumber: 20 },
      { name: 'Lab Name', description: 'abcsasdasdasdasdas', imgUrl: 'https://placehold.co/600x400', testNumber: 20 },
      { name: 'Lab Name', description: 'abcsasdasdasdasdas', imgUrl: 'https://placehold.co/600x400', testNumber: 20 },
      { name: 'Lab Name', description: 'abcsasdasdasdasdas', imgUrl: 'https://placehold.co/600x400', testNumber: 20 },
      { name: 'Lab Name', description: 'abcsasdasdasdasdas', imgUrl: 'https://placehold.co/600x400', testNumber: 20 },
      { name: 'Lab Name', description: 'abcsasdasdasdasdas', imgUrl: 'https://placehold.co/600x400', testNumber: 20 },
      { name: 'Lab Name', description: 'abcsasdasdasdasdas', imgUrl: 'https://placehold.co/600x400', testNumber: 20 },
      { name: 'Lab Name', description: 'abcsasdasdasdasdas', imgUrl: 'https://placehold.co/600x400', testNumber: 20 },
      { name: 'Lab Name', description: 'abcsasdasdasdasdas', imgUrl: 'https://placehold.co/600x400', testNumber: 20 },
    ]
    return labs;
  }
  getAllTests(){
    let tests:Test[]=[
      { name: 'Name', description: 'description...........', price: 30, imgUrl:'https://placehold.co/600x400',},
      { name: 'Name', description: 'description...........', price: 30, imgUrl:'https://placehold.co/600x400',},
      { name: 'Name', description: 'description...........', price: 30, imgUrl:'https://placehold.co/600x400',},
      { name: 'Name', description: 'description...........', price: 30, imgUrl:'https://placehold.co/600x400',},
      { name: 'Name', description: 'description...........', price: 30, imgUrl:'https://placehold.co/600x400',},
      { name: 'Name', description: 'description...........', price: 30, imgUrl:'https://placehold.co/600x400',},
      { name: 'Name', description: 'description...........', price: 30, imgUrl:'https://placehold.co/600x400',},
      { name: 'Name', description: 'description...........', price: 30, imgUrl:'https://placehold.co/600x400',},
      { name: 'Name', description: 'description...........', price: 30, imgUrl:'https://placehold.co/600x400',},
    ]
    return tests
  }

}