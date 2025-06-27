import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RecipesPage } from './pages/recipes/recipes.page';
import { RecipesDetailPage } from './pages/detail/recipes-detail.page';
import { RecipesRoutingModule } from './recipes-routing.module';
import { RecipesCardComponent } from './components/card/recipes-card.component';
import { SharedModule } from '../../shared/shared.module';

@NgModule({
  declarations: [RecipesPage, RecipesDetailPage],
  imports: [
    CommonModule,
    RecipesCardComponent,
    RecipesRoutingModule,
    SharedModule,
  ],
})
export class RecipesModule {}
