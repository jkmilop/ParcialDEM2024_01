// fotos-heroes.page.ts
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { HeroesServiceService } from 'src/app/services/heroes-service.service';

@Component({
  selector: 'app-fotos-heroes',
  templateUrl: './fotos-heroes.page.html',
  styleUrls: ['./fotos-heroes.page.scss'],
})
export class FotosHeroesPage implements OnInit {
  heroImages: string[] = [];

  constructor(
    private route: ActivatedRoute,
    private heroesService: HeroesServiceService
  ) {}

  ngOnInit() {
    // Get the hero ID from the route
    const heroId = this.route.snapshot.params['id'];

    // Get the hero details including listImg
    const hero = this.heroesService.getUnHeroe(heroId);

    // Use listImg array for hero images
    this.heroImages = hero.listImg || [];
  }
}
