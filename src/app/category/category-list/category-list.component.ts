import { Component, OnInit,Input,Output,EventEmitter } from '@angular/core';
import{CategoryService} from 'src/app/services/category.service';
@Component({
  selector: 'app-category-list',
  templateUrl: './category-list.component.html',
  styleUrls: ['./category-list.component.css']
})
export class CategoryListComponent implements OnInit {

 
  todos;
  @Output() addNewToDoButtonClicked = new EventEmitter();
  @Output() addNewToBeEdited= new EventEmitter<{index:number}>();
  
  constructor(cat:CategoryService) {
    this.todos=cat.catname;
   }
   
  ngOnInit() {
  }

  onNewButtonClick() {
    this.addNewToDoButtonClicked.emit();
  }
  
 onEditButtonClick(index){
  this.addNewToBeEdited.emit(
    {
      'index':index
    }
  );
 }

}