// Import necessary modules
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-fotos-heroes',
  templateUrl: './fotos-heroes.component.html',
  styleUrls: ['./fotos-heroes.component.scss'],
})
export class FotosHeroesComponent implements OnInit {
  images: string[] = [];

  constructor(private route: ActivatedRoute) {}

  ngOnInit() {
    // Retrieve the list of images from the route state
    this.images = this.route.snapshot.data['state']?.images || [];
  }
}
