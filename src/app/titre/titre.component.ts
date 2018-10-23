import { Component, OnInit } from '@angular/core';
import {Todo} from '../models/todo.model';

@Component({
  selector: 'app-titre',
  templateUrl: './titre.component.html',
  styleUrls: ['./titre.component.scss']
})
export class TitreComponent implements OnInit {

  titre: string;
  isAdmin: boolean = false;

  todo:Todo;

  constructor() { }

  ngOnInit() {
    this.todo = new Todo();
    this.todo.title = 'Titre par défaut'

    this.titre = 'Super TodoList';

    setTimeout(() => {
      this.titre = 'A toi de jouer !';
    }, 2000);
  }

}
