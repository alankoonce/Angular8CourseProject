import {Component, OnInit} from '@angular/core';
import {Recipe} from '../recipe/recipe.model';

@Component({
  selector: 'app-recipelist',
  templateUrl: './recipelist.component.html',
  styleUrls: ['./recipelist.component.css']
})
export class RecipelistComponent implements OnInit {
  recipes: Recipe[] = [
    // tslint:disable-next-line:max-line-length
    new Recipe('A Test recipe', 'This is a test', 'https://food.fnr.sndimg.com/content/dam/images/food/fullset/2009/4/10/1/FO1D47_24021_s4x3.jpg.rend.hgtvcom.476.357.suffix/1431766598136.jpeg')
    // tslint:disable-next-line:max-line-length
    , new Recipe('Another Test recipe', 'This is another test', 'https://food.fnr.sndimg.com/content/dam/images/food/fullset/2013/2/14/0/FNK_Herbed-Chicken-Marsala_s4x3.jpg.rend.hgtvcom.161.121.suffix/1371614296995.jpeg')
  ];

  constructor() {
  }

  ngOnInit() {
  }

}
