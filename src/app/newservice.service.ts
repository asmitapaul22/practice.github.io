import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class NewserviceService {
college:any[];
  constructor() {
this.college=[
  {
    cllgcode:'001',name:'renu'
  },
  {
    cllgcode:'002',name:'ajeet'
  }
];
  } 
   
  display()
  {
    return "hello services";
  }
}
