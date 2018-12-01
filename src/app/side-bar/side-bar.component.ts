import { Component, OnInit } from '@angular/core';
import{BrowserAnimationsModule}from '@angular/platform-browser/animations';
import{
  trigger,state,style, transition, animate
}from'@angular/animations';
import { from } from 'rxjs';
@Component({
  selector: 'app-side-bar',
  templateUrl: './side-bar.component.html',
  styleUrls: ['./side-bar.component.css'],
  animations: [
    trigger('sideMenuAnime', [ 
      state('close',style({width:'0px',visibility:'hidden'})),
      state('open',style({width:'200px'})),
      transition('open => close' , animate('400ms ease-in')),
      transition('close => open' , animate('400ms ease-out'))
  ]),
  trigger('maincontainerAnime', [ 
    state('close',style({marginLeft:'0px'})),
    state('open',style({marginLeft:'200px'}))
])

  ]
})
export class SideBarComponent implements OnInit {

  constructor() { }
  openClose:string = 'open';
  hideandshow() :void {
    
    this.openClose = (this.openClose === 'open') ? 'close' : 'open';
    if(this.openClose === 'open'){
      document.getElementById("button_1").innerHTML =" <img src=\"assets/img/hide.png\" >";
    }else if(this.openClose === 'close'){
      document.getElementById("button_1").innerHTML =" <img src=\"assets/img/fleche.png\" >";
    }
    
  }

  
  ngOnInit() {
  }

}
