import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit {
  public nom="";
  public prenom="";
  public email="";
  public numApogee="";
  public cne="";
  public cin="";
  valid():void {
   
    alert("nom : "+this.nom +"\n prenom : "+this.prenom +"\n mumero Apogee : "+this.numApogee);    
    
}
  constructor() { }

  ngOnInit() {
  }

}
