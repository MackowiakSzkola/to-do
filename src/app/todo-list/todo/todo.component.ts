import {Component, EventEmitter, Input, Output} from '@angular/core';
import {NgClass, NgIf} from '@angular/common';
import {ToDo} from '../../shared/interfaces/todo.interface';
import {ModalComponent} from '../../shared/components/modal/modal.component';

@Component({
  selector: 'app-todo',
  standalone: true,
  imports: [
    NgClass,
    ModalComponent,
    NgIf
  ],
  templateUrl: './todo.component.html',
  styleUrl: './todo.component.css'
})
export class TodoComponent {
  @Input() todo!: ToDo;
  @Input() i!: number;
  @Output() removeTodoEmite = new EventEmitter<number>();
  openModal = false;
  changeDone(){
    this.todo.isComplete = !this.todo.isComplete;
  }
  removeTodo(i: number)
  {
    this.removeTodoEmite.emit(i);
  }
  toggleModal(){
    this.openModal = !this.openModal;
  }
}
