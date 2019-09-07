import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
	headerlogo = "https://work.webdew.com/answergenie/agent/assets/media/logos/logo-4.png";

  public showMenu: string;
    constructor() {}

    ngOnInit() {
    }


}
