import { Component, OnInit } from '@angular/core';
import {User} from '../models/user.model';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss']
})
export class MenuComponent implements OnInit {

  menuItems:string[] = [
    "Taches",
    "Idées",
    "Mon compte",
    "Mes taches",
    "Mes idées"
  ]

  currentUser: User;

  constructor() { }

  ngOnInit() {
    this.currentUser = new User();
    this.currentUser.name = "Roger Dupont";
    this.currentUser.email = "xxx@xxx.xxx";
  }

}
