import { Component, OnInit } from '@angular/core';
import { CategoryService } from '../services/category.service';
import { ToDo } from '../models/ToDo';

@Component({
  selector: 'app-category',
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.css']
})
export class CategoryComponent implements OnInit {
  tasks ;
     

  listPage = true;
  formPage = false;
  editForm = false;

  task:ToDo;
  index:number;

  constructor(cat:CategoryService) {
    this.tasks=cat.catname;
   }

  ngOnInit() {
  }
  
  showNewToDoForm(){
   

    this.listPage = false;
    this.formPage = true;
    this.editForm=false;
  }

  onToDoAdded() {
    //this.tasks.push(toDo);
    this.formPage = false;
    this.listPage = true;
    this.editForm=false;
  }


  showEditToDoForm(toDoEdit)
  {
    this.index=toDoEdit.index;
    this.task=this.tasks[this.index];
    console.log("in edit form");
    this.editForm=true;
    this.formPage=false;
    this.listPage=false;

  }
  onToEdited(){
    console.log("on list page");
    this.listPage = true;
    this.editForm=false;
  }




}
