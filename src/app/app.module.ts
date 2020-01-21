import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppComponent} from './app.component';
import {HeaderComponent} from './header/header.component';
import {RecipeComponent} from './recipe/recipe.component';
import {RecipedetailComponent} from './recipedetail/recipedetail.component';
import {RecipeitemComponent} from './recipeitem/recipeitem.component';
import {RecipelistComponent} from './recipelist/recipelist.component';
import {RootComponent} from './root/root.component';
import {ShoppinglistComponent} from './shoppinglist/shoppinglist.component';
import {ShoppinglisteditComponent} from './shoppinglistedit/shoppinglistedit.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    RecipeComponent,
    RecipedetailComponent,
    RecipeitemComponent,
    RecipelistComponent,
    RootComponent,
    ShoppinglistComponent,
    ShoppinglisteditComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
