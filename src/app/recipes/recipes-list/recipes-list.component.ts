import { Component, OnInit } from '@angular/core';
import { Recipie } from './recipie.model';

@Component({
  selector: 'app-recipes-list',
  templateUrl: './recipes-list.component.html',
  styleUrls: ['./recipes-list.component.css']
})
export class RecipesListComponent implements OnInit {

  recipies:Recipie[]=[
    new Recipie("test Recipie","test Discription","https://www.onlygoodfood.co.nz/assets/Uploads/15941f3d6f/104-grilled-haloumi-fattoush__FillWzY3MCw2NzBd.jpg")
    ,new Recipie("test Recipie","test Discription","https://www.onlygoodfood.co.nz/assets/Uploads/15941f3d6f/104-grilled-haloumi-fattoush__FillWzY3MCw2NzBd.jpg")
  ];
  constructor() { }

  ngOnInit() {
  }

}
