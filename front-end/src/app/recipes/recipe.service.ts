import { EventEmitter } from '@angular/core';
import { Injectable } from '@angular/core';
import { Recipe } from './recipe.model';
import { Ingredient } from '../models/ingredient.model';
import { ShoppingListService } from '../shopping-list/shopping-list.service';

@Injectable({
  providedIn: 'root',
})
export class RecipeService {
  recipeSelected = new EventEmitter<Recipe>();
  private _recipes: Recipe[] = [
    new Recipe(
      'Recipe1',
      'Description1',
      'https://thumbs.dreamstime.com/b/fried-cutlet-burger-vegetables-black-plate-wooden-background-top-view-free-space-your-text-flat-lay-164637219.jpg',
      [
        new Ingredient('Recipe-1-Ingredient-1', 1),
        new Ingredient('Recipe-1-Ingredient-2', 2),
      ]
    ),
    new Recipe(
      'Recipe2',
      'Description2',
      'https://img.freepik.com/premium-photo/homemade-indian-flat-bread-chapati-roti-made-with-butter-ghee-flour-water_627828-443.jpg?w=360',
      [
        new Ingredient('Recipe-2-Ingredient-1', 1),
        new Ingredient('Recipe-2-Ingredient-2', 2),
      ]
    ),
  ];

  constructor(private _shoppingListService: ShoppingListService) {}

  getRecipes() {
    return this._recipes.slice();
  }
  getRecipe(id: number) {
    return this._recipes.slice()[id];
  }
  addIngreientsToShoppingList(ingredients: Ingredient[]) {
    this._shoppingListService.addIngredients(ingredients);
  }
}
