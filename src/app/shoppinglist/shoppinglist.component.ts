import {Component, OnInit} from '@angular/core';
import {Ingredient} from '../shared/ingredient.model';

@Component({
  selector: 'app-shoppinglist',
  templateUrl: './shoppinglist.component.html',
  styleUrls: ['./shoppinglist.component.css']
})
export class ShoppinglistComponent implements OnInit {
  ingredients: Ingredient[] = [
    new Ingredient('tomatoes', 7),
    new Ingredient('apples', 3),
    new Ingredient('pears', 5)
  ];

  constructor() {
  }

  ngOnInit() {
  }

}
