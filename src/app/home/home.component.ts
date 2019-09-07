import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

	counter = 0;
	fullName: string = "Daljeet";

  title = "Welcome!";
	


  constructor() { }

  ngOnInit() {
  }
  click() {
		this.counter += 1;
	}
  

}
