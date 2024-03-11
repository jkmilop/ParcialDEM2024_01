// fotos-heroes.module.ts
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { IonicModule } from '@ionic/angular';
import { FotosHeroesPage } from './fotos-heroes.page';
import { FotosHeroesPageRoutingModule } from './fotos-heroes-routing.module';

@NgModule({
  imports: [CommonModule, IonicModule, FotosHeroesPageRoutingModule],
  declarations: [FotosHeroesPage],
})
export class FotosHeroesModule {}
