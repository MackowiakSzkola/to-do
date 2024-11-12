import {Component, EventEmitter, Output} from '@angular/core';

@Component({
  selector: 'app-add-todo-form',
  standalone: true,
  imports: [],
  templateUrl: './add-todo-form.component.html',
  styleUrl: './add-todo-form.component.css'
})
export class AddTodoFormComponent {
  @Output() addTodoEmit = new EventEmitter<{nameValue: string, priorityValue: string}>()
  @Output() close = new EventEmitter<void>();

  addTodo(nameValue: string, priorityValue: string) {
  this.addTodoEmit.emit({nameValue, priorityValue});
  }

  clearErrorMessage()
  {
    this.close.emit();
  }
}
