import { EventEmitter } from '@angular/core';
import { Injectable } from '@angular/core';
import { Ingredient } from '../models/ingredient.model';

@Injectable({
  providedIn: 'root',
})
export class ShoppingListService {
  ingredientsChanged = new EventEmitter<Ingredient[]>();
  private _ingredients: Ingredient[] = [
    new Ingredient('Ingredient1', 1),
    new Ingredient('Ingredient2', 2),
    new Ingredient('Ingredient3', 3),
  ];

  constructor() {}

  getIngredients() {
    return this._ingredients.slice();
  }
  addIngredient(ingredient: Ingredient) {
    this._ingredients.push(ingredient);
    this.ingredientsChanged.emit(this._ingredients.slice());
  }
  addIngredients(ingredients: Ingredient[]) {
    this._ingredients.push(...ingredients);
    this.ingredientsChanged.emit(this._ingredients.slice());
  }
}
