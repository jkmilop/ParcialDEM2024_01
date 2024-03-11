import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Heroe } from 'src/app/interfaces/heroes.interface';
import { HeroesServiceService } from 'src/app/services/heroes-service.service';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss'],
})
export class Tab1Page {
  unosHeroes: Heroe[] = [];
  unTipo: string = 'lista';

  constructor(private data: HeroesServiceService, private router: Router) {
    this.unosHeroes = data.getHeroes();
  }

  verInformacionHeroes() {
    // Navegar a la página que muestra la información de todos los héroes
    this.router.navigate(['/fotos-heroes']);
  }
}
