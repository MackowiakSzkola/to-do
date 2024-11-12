import { Component } from '@angular/core';
import {KeyValuePipe, NgClass, NgForOf, NgIf, NgStyle} from '@angular/common';
import {ToDo} from '../shared/interfaces/todo.interface';
import {fromInteropObservable} from 'rxjs/internal/observable/innerFrom';
import {AlertComponent} from '../shared/components/alert/alert.component';
import {AddTodoFormComponent} from './add-todo-form/add-todo-form.component';
import {TodoComponent} from './todo/todo.component';

@Component({
  selector: 'app-todo-list',
  standalone: true,
  imports: [
    KeyValuePipe,
    NgForOf,
    NgIf,
    NgStyle,
    NgClass,
    AlertComponent,
    AddTodoFormComponent,
    TodoComponent
  ],
  templateUrl: './todo-list.component.html',
  styleUrl: './todo-list.component.css'
})
export class TodoListComponent {
  todos : ToDo[] = [];

  errorMessage = "";
  addTodo(todo : string, pri: string) : void {
    if(todo.length <= 3) {
      this.errorMessage = "zadanie musi miec wiecej niz 3 znaki";
      return
    }
    this.errorMessage = "";
    this.todos.push({name : todo , priority: pri, isComplete: false});
    console.log("Aktualna lista todo: ", this.todos);
  }
  removeTodo(i : number){
    this.todos.splice(i, 1);
  }
  clearErrorMessage(){
    this.errorMessage = "";
  }
  removeAllChecked(){
    this.todos = this.todos.filter((item) => !item.isComplete);
  }
  removePriority(priority: string){
    this.todos = this.todos.filter((item) => item.priority != priority);
  }
  protected readonly fromInteropObservable = fromInteropObservable;
}
