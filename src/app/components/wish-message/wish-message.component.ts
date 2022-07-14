import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-wish-message',
  templateUrl: './wish-message.component.html',
  styleUrls: ['./wish-message.component.css']
})
export class WishMessageComponent implements OnInit {

  public message:string='Hello';

  constructor() { }

  ngOnInit(): void {
  }
 /* public sayGoodmorning():void{
    this.message="Good Morning";

  }
  public sayGoodafternoon():void{
    this.message='Good Afternoon';

  }
  public sayGoodEvening():void{
    this.message='Good Evening';

  }*/
  public updatemessage(msg:string):void{
    this.message=msg;
  }


}
