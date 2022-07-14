import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-databinding',
  templateUrl: './databinding.component.html',
  styleUrls: ['./databinding.component.css']
})
export class DatabindingComponent implements OnInit {

  public tourName:string='paris';
  public tourImage:string="https://images.pexels.com/photos/1850619/pexels-photo-1850619.jpeg?auto=compress&cs=tinysrgb&w=600";
  

  constructor() { }

  ngOnInit(): void {
  }
  public getDate():string{
    return new Date().toLocaleDateString();
  }
  public getTime():string{
    return new Date().toLocaleTimeString();
  }
  
  }


