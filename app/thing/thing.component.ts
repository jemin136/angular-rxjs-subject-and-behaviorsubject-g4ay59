import { Component, OnInit } from '@angular/core';
import { MyService } from './../myservice';

@Component({
  selector: 'app-thing',
  templateUrl: './thing.component.html'
})

export class ThingComponent implements OnInit {

  thingOne = [];
  thingTwo;
  thingThree;

  constructor(private myService: MyService) {
    console.log('ThingComponent#constructor');
  }

  ngOnInit() {

   
  
    this.myService.thingThreeStream
      .subscribe(
        data => { 
          this.thingThree = data;
          console.log('ThingComponent thingThreeStream', data) 
        },
        err => { console.log('ThingComponent thingThreeStream error') },
        () => { console.log('ThingComponent thingThreeStream complete') }
      );
  }

}
