import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-body-component',
  templateUrl: './body-component.component.html',
  styleUrls: ['./body-component.component.css']
})
export class BodyComponentComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }


fname="Rajashekar";
lname="Reddy";
mob="9533410025";
mail="rnareddy6@gmail.com";
clear() {
	this.fname="";
	this.lname="";
	this.mob="";
	this.mail="";
}

submit() {
	alert("First Name is "+this.fname+"/n"+
	"Last Name is "+this.lname+"/n"+
	"Mobile Number is "+this.mob+"/n"+
	"Email is "+this.mail)
}

mail2(event){
	console.log(event);
}

changeemail1(event){
	this.mail=event.target.value;
}

}
