import { Component, OnInit } from '@angular/core';
import {Todo} from '../models/todo.model';

@Component({
  selector: 'app-todos-list',
  templateUrl: './todos-list.component.html',
  styleUrls: ['./todos-list.component.scss']
})
export class TodosListComponent implements OnInit {

  todoList: Todo[];

  tableHeaders:string[] = [
    "nom de la tâche",
    "assigné à"
  ]

  constructor() { }

  ngOnInit() {
    this.todoList = [
      new Todo(1, "Titre 1", true),
      new Todo(2, "Titre 2", false),
      {id:2, title:"Titre 3", completed: false}
    ]
  }

  nbTodoLeft() {
    let nbLeft=0;
    this.todoList.filter(todo=>{
      if (todo.completed)nbLeft++;
    })
    return nbLeft;

    // small solution
    // return this.todoList.filter(todo=>todo.completed).length;
  }
}
