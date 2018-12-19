import { Component, OnInit,Output,EventEmitter } from '@angular/core';
import {CategoryService} from 'src/app/services/category.service';
import {Category} from 'src/app/models/category';
import { ToDoService } from 'src/app/services/to-do.service';
@Component({
  selector: 'app-category-form',
  templateUrl: './category-form.component.html',
  styleUrls: ['./category-form.component.css'],
  providers:[ToDoService]
})
export class CategoryFormComponent implements OnInit {

  @Output() addNewToDo = new EventEmitter();
    

  
  ca :CategoryService;
  name: string;
 
  constructor(cat:CategoryService) {
    this.ca=cat;
   }

  ngOnInit() {
  }

  onSubmitClicked() {
   
    this.ca.catname.push(new Category(this.name));
   
    this.addNewToDo.emit();
      
      
     
   
  }

}
