import { Component } from '@angular/core';

@Component({
  standalone: false,
  selector: 'app-recipes-page',
  templateUrl: './recipes.page.html',
})
export class RecipesPage {
  recipes: Recipe[] = [
    {
      title: 'Creamy Carbonara',
      src: 'assets/images/carbonara.jpg',
    },
    {
      title: 'Chicken Sopas',
      src: 'assets/images/carbonara.jpg',
    },
    {
      title: 'Creamy MILO Dinosaur',
      src: 'assets/images/carbonara.jpg',
    },
  ];
}

type Recipe = {
  title: string;
  src: string;
};
