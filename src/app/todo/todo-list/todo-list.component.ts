import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { ToDoService } from 'src/app/services/to-do.service';

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.css']
})
export class TodoListComponent implements OnInit {

  todos;
  @Output() addNewToDoButtonClicked = new EventEmitter();
  @Output() addNewToBeEdited= new EventEmitter<{index:number}>();
  
  constructor(t:ToDoService) {
    this.todos=t.tasks;
   }

  ngOnInit() {
  }

  onNewButtonClick() {
    this.addNewToDoButtonClicked.emit();
  }
  
 onEditButtonClick(index){
  console.log("edit");
  this.addNewToBeEdited.emit({
   
    'index':index
  });
 }
 deleteFieldValue(todo) {
  this.todos = this.todos.filter(t => t.name !== todo.name);
  }
}
