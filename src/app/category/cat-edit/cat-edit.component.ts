import { Component, OnInit,EventEmitter,Input,Output } from '@angular/core';
import {Category} from 'src/app/models/category';
import {CategoryService} from 'src/app/services/category.service';
@Component({
  selector: 'app-cat-edit',
  templateUrl: './cat-edit.component.html',
  styleUrls: ['./cat-edit.component.css'],
  providers:[CategoryService]
})
export class CatEditComponent implements OnInit {

  @Input() task:Category;
  @Output() editToDo = new EventEmitter(); 
  
  cat:CategoryService;
    
  constructor(cat1:CategoryService) {
      this.cat=cat1;
     }

  ngOnInit() {
  }
  onSubmitClicked() {
    console.log("on submit");
     this.editToDo.emit();
   }

}
