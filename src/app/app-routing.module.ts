// app-routing.module.ts
import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    loadChildren: () => import('./pages/tabs/tabs.module').then(m => m.TabsPageModule)
  },
  {
    path: 'det-heroe/:id',
    loadChildren: () => import('./pages/det-heroe/det-heroe.module').then(m => m.DetHeroePageModule)
  },
  {
    path: 'fotos-heroes/:id', // Add :id parameter
    loadChildren: () => import('./pages/fotos-heroes/fotos-heroes.module').then(m => m.FotosHeroesModule)
  }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
