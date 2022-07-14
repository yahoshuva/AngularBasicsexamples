import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-event-handling1',
  templateUrl: './event-handling1.component.html',
  styleUrls: ['./event-handling1.component.css']
})
export class EventHandling1Component implements OnInit {
 public count:number=0;

  constructor() { }

  ngOnInit(): void {
  }
  public increment():void{

    this.count=this.count+1;
  }
  public decrement():void{
    this.count=this.count-1>0? this.count-1:0;

  }
  

}
