import { Component } from '@angular/core';
import { MyService } from './myservice';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: [ './app.component.css' ],
  providers: [ MyService ]
})
export class AppComponent  {

  constructor(private myService: MyService) {}
 


  addThingThree() {
    console.log('AppComponent#addThingThree');
    this.myService.addThingThree();
  } 
}
