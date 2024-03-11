import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Heroe } from 'src/app/interfaces/heroes.interface';

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.scss'],
})
export class HeroesComponent implements OnInit {

  @Input() unosHeroes: Heroe[] = [];
  @Input() tipo!: string;

  constructor(
    private router: Router
  ) { }

  ngOnInit() {}

  navegarHeroe(unId:any){
    this.router.navigate(['/det-heroe',unId])
  }

  navegarFotosHeroe(unId: any) {
    // Navigate to fotos-heroes page with the hero ID
    this.router.navigate(['/fotos-heroes', unId]);
  }
  
  

}
