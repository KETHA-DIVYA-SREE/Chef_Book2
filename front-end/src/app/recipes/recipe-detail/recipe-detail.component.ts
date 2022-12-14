import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { Recipe } from '../recipe.model';
import { RecipeService } from '../recipe.service';

@Component({
  selector: 'app-recipe-detail',
  templateUrl: './recipe-detail.component.html',
  styleUrls: ['./recipe-detail.component.scss'],
})
export class RecipeDetailComponent implements OnInit {
  recipe!: Recipe;
  id!: number;

  constructor(
    private _recipeService: RecipeService,
    private _route: ActivatedRoute
  ) {}
  ngOnInit(): void {
    this._route.params.subscribe((params: Params) => {
      this.id = +params['id'];
      this.recipe = this._recipeService.getRecipe(this.id);
    });
  }

  onAddToShoppingList() {
    this._recipeService.addIngreientsToShoppingList(this.recipe.ingredients);
  }
}
