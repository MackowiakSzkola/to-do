import { Component } from '@angular/core';
import {KeyValuePipe, NgForOf, NgIf} from '@angular/common';
import {ToDo} from '../shared/interfaces/todo.interface';

@Component({
  selector: 'app-todo-list',
  standalone: true,
  imports: [
    KeyValuePipe,
    NgForOf,
    NgIf
  ],
  templateUrl: './todo-list.component.html',
  styleUrl: './todo-list.component.css'
})
export class TodoListComponent {
  todos : ToDo[] = [];

  addTodo(todo : string) : void {
    this.todos.push({name : todo , isComplete: false});
    console.log("Aktualna lista todo: ", this.todos);
  }
  changeDone(i : number){
    this.todos[i].isComplete = !this.todos[i].isComplete;
  }
  removeTodo(i : number){
    this.todos.splice(i, 1);
  }
}
