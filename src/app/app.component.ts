import { Component } from '@angular/core';
import $ from 'jquery'; 
declare var contacform;

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: [ './app.component.css' ]
})
export class AppComponent  {
  name = 'Angular';
  constuctor(){
    contacform;
  }

}

