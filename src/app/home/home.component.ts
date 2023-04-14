import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
heading:string="TopStrip";
testImage:any="C:\Users/kavitha/Desktop/Ajay dmv/googleimg.png";
opened:any=new Date();
price:number=100;
}
