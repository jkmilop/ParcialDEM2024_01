import { Heroe } from 'src/app/interfaces/heroes.interface';
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { IonicModule } from '@ionic/angular';
import { HeroeComponent } from './heroe/heroe.component';
import { HeroesComponent } from './heroes/heroes.component';
import { FotosHeroesComponent } from './fotos-heroes/fotos-heroes.component';



@NgModule({
  declarations: [
    HeroesComponent,
    HeroeComponent,
    FotosHeroesComponent

  ],
  exports: [
    HeroesComponent,
    HeroeComponent,
    FotosHeroesComponent

  ],
  imports: [
    CommonModule,
    IonicModule

  ]
})
export class ComponentsModule { }
