import { Component, OnInit,EventEmitter,Input,Output } from '@angular/core';
import { ToDo } from 'src/app/models/ToDo';

import { ToDoService } from 'src/app/services/to-do.service';

@Component({
  selector: 'app-editform',
  templateUrl: './editform.component.html',
  styleUrls: ['./editform.component.css'],
  providers:[ToDoService]
})
export class EditformComponent implements OnInit {
@Input() task:ToDo;
@Output() showEditForm = new EventEmitter(); 
toDo1:ToDoService;
  constructor(toDo2:ToDoService) {
    this.toDo1=toDo2;
   }

  ngOnInit() {
  }

  onSubmitClicked()
   {
    //console.log(index);
    // name:this.task.name,
    // Category: this.task.category,
    // status: this.task.status
    
    this.showEditForm.emit();
      }

}
