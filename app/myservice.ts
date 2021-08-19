import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { Subject } from 'rxjs/Subject';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';
import 'rxjs/add/observable/of';
import 'rxjs/add/observable/from';

@Injectable()
export class MyService {

  thingOne = ['a','b','c'];
  thingTwo;
  thingThree = 'start value';

  thingOneStream = Observable.from(this.thingOne);

  thingTwoStream = new Subject();
  thingThreeStream = new BehaviorSubject(this.thingThree);

  constructor() {
    console.log('MyService.constructor');
  }



  addThingThree() {
    console.log('MyService.addThingThree');

    this.thingThree = Date.now() + '';
    //this.thingThree.push(this.thingThree[this.thingThree.length-1] + 1);
    this.thingThreeStream.next(this.thingThree);
  }
}
