// fotos-heroes-routing.module.ts
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { FotosHeroesPage } from './fotos-heroes.page';

const routes: Routes = [
  {
    path: '',
    component: FotosHeroesPage,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class FotosHeroesPageRoutingModule {}
