import { Injectable } from '@angular/core';

import { Heroe } from '../interfaces/heroes.interface';

@Injectable({
  providedIn: 'root'
})
export class HeroesServiceService {
  heroes: Heroe[] = [
    {
      nombre: 'Aquaman',
      bio: 'El poder más reconocido de Aquaman es la capacidad telepática para comunicarse con la vida marina, la cual puede convocar a grandes distancias.',
      img: 'assets/img/aquaman.png',
      aparicion: '1941-11-01',
      casa: 'DC',
      id: 1,
      listImg: [
        'https://www.shutterstock.com/shutterstock/photos/1312477580/display_1500/stock-photo-bangkok-thailand-february-the-setting-of-aquaman-action-figure-with-the-ancient-ruin-1312477580.jpg',
        'https://www.shutterstock.com/shutterstock/photos/1312646912/display_1500/stock-photo-bangkok-thailand-february-the-setting-of-aquaman-action-figure-with-the-ancient-ruin-1312646912.jpg',
        'https://www.shutterstock.com/shutterstock/photos/1312477577/display_1500/stock-photo-bangkok-thailand-february-the-setting-of-aquaman-action-figure-with-the-ancient-ruin-1312477577.jpg',
        'https://www.shutterstock.com/shutterstock/photos/1312018985/display_1500/stock-photo-bangkok-thailand-february-the-setting-of-aquaman-action-figure-with-the-ancient-ruin-1312018985.jpg',
      ],
    },
    {
      nombre: 'Batman',
      bio: 'Los rasgos principales de Batman se resumen en «destreza física, habilidades deductivas y obsesión». La mayor parte de las características básicas de los cómics han variado por las diferentes interpretaciones que le han dado al personaje.',
      img: 'assets/img/batman.png',
      aparicion: '1939-05-01',
      casa: 'DC',
      id: 2,
      listImg: [
        'https://sm.ign.com/t/ign_za/editorial/t/the-top-25/the-top-25-best-batman-comics-and-graphic-novels_7scd.1200.jpg',
        'https://www.slashfilm.com/img/gallery/the-15-best-batman-comics-you-need-to-read/intro-1660174737.jpg',
        'https://m.media-amazon.com/images/S/pv-target-images/492e1c722f1fd5a98df41a6cc4e9042002a0196092a9bf950c3dbe586e160d7d._SX1080_FMjpg_.jpg',
        'https://www.shutterstock.com/shutterstock/photos/1177784380/display_1500/stock-photo-bangkok-thailand-september-a-batman-action-figure-from-famous-dc-comic-1177784380.jpg',
      ],
    },
    {
      nombre: 'Daredevil',
      bio: 'Al haber perdido la vista, los cuatro sentidos restantes de Daredevil fueron aumentados por la radiación a niveles superhumanos, en el accidente que tuvo cuando era niño. A pesar de su ceguera, puede "ver" a través de un "sexto sentido" que le sirve como un radar similar al de los murciélagos.',
      img: 'assets/img/daredevil.png',
      aparicion: '1964-01-01',
      casa: 'Marvel',
      id: 3,
      listImg: [
        'https://cdn.marvel.com/u/prod/marvel/i/mg/d/50/50febb79985ee/standard_incredible.jpg',
        'https://www.shutterstock.com/shutterstock/photos/1158637177/display_1500/stock-photo-taipei-taiwan-june-close-up-of-daredevil-figures-on-display-shelf-in-ximending-1158637177.jpg',
        'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT0sT_20spNitThiNU7ERhQnR73y0kU9a1HVQ&usqp=CAU',
        'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT9XhODS0DkpXrtdFD02YjhYpit3e1odBXcLA&usqp=CAU',
      ],
    },
    {
      nombre: 'Hulk',
      bio: 'Su principal poder es su capacidad de aumentar su fuerza hasta niveles prácticamente ilimitados a la vez que aumenta su furia. Dependiendo de qué personalidad de Hulk esté al mando en ese momento (el Hulk Banner es el más débil, pero lo compensa con su inteligencia).',
      img: 'assets/img/hulk.png',
      aparicion: '1962-05-01',
      casa: 'Marvel',
      id: 4,
      listImg: [
        'https://www.shutterstock.com/shutterstock/photos/1095995987/display_1500/stock-photo-bangkok-thailand-may-good-smile-company-japanese-toy-manufacturer-launch-action-1095995987.jpg',
        'https://www.shutterstock.com/shutterstock/photos/1332217880/display_1500/stock-photo-bangkok-thailand-march-a-setting-of-hulk-an-action-figure-from-marvel-comic-1332217880.jpg',
        'https://www.shutterstock.com/shutterstock/photos/765690691/display_1500/stock-photo--london-united-kingdom-july-madame-tussauds-in-london-waxwork-statue-of-the-765690691.jpg',
        'https://www.shutterstock.com/shutterstock/photos/536201041/display_1500/stock-photo-amsterdam-netherlands-oct-hulk-bruce-benner-marvel-section-madame-tussauds-wax-536201041.jpg',
      ],
    },
    {
      nombre: 'Linterna Verde',
      bio: 'Poseedor del anillo de poder que posee la capacidad de crear manifestaciones de luz sólida mediante la utilización del pensamiento. Es alimentado por la Llama Verde (revisada por escritores posteriores como un poder místico llamado Starheart), una llama mágica contenida en dentro de un orbe (el orbe era en realidad un meteorito verde de metal que cayó a la Tierra, el cual encontró un fabricante de lámparas llamado Chang)',
      img: 'assets/img/linterna-verde.png',
      aparicion: '1940-06-01',
      casa: 'DC',
      id: 5,
      listImg: [
        'https://www.shutterstock.com/shutterstock/photos/226477003/display_1500/stock-photo-kuala-lumpur-malaysia-october-slightly-defocused-and-closeup-hand-painted-figurine-of-226477003.jpg',
        'https://www.shutterstock.com/shutterstock/photos/226477012/display_1500/stock-photo-kuala-lumpur-malaysia-october-slightly-defocused-and-closeup-hand-painted-figurine-of-226477012.jpg',
        'https://www.shutterstock.com/shutterstock/photos/1158641191/display_1500/stock-photo-taipei-taiwan-june-close-up-of-green-lantern-figures-on-display-shelf-in-ximending-1158641191.jpg',
        'https://www.shutterstock.com/shutterstock/photos/226476979/display_1500/stock-photo-kuala-lumpur-malaysia-october-slightly-defocused-and-closeup-hand-painted-figurine-of-226476979.jpg',
      ],
    },
    {
      nombre: 'Spider-Man',
      bio: 'Tras ser mordido por una araña radiactiva, obtuvo los siguientes poderes sobrehumanos, una gran fuerza, agilidad, poder trepar por paredes. La fuerza de Spider-Man le permite levantar 10 toneladas o más. Gracias a esta gran fuerza Spider-Man puede realizar saltos increíbles. Un "sentido arácnido", que le permite saber si un peligro se cierne sobre él, antes de que suceda. En ocasiones este puede llevar a Spider-Man al origen del peligro.',
      img: 'assets/img/spiderman.png',
      aparicion: '1962-08-01',
      casa: 'Marvel',
      id: 6,
      listImg: [
        'https://www.shutterstock.com/shutterstock/photos/618809906/display_1500/stock-photo-amsterdam-netherlands-march-spiderman-marvel-comics-in-madame-tussauds-wax-museum-in-618809906.jpg',
        'https://www.shutterstock.com/shutterstock/photos/1265017510/display_1500/stock-photo-bangkok-thailand-december-a-beautiful-standee-of-a-movie-called-spider-man-into-the-1265017510.jpg',
        'https://www.shutterstock.com/shutterstock/photos/423165460/display_1500/stock-photo-amsterdam-netherlands-may-spiderman-in-the-madame-tussauds-museum-in-amsterdam-423165460.jpg',
        'https://www.shutterstock.com/shutterstock/photos/1159961959/display_1500/stock-photo-prague-czech-republic-aug-spider-man-madame-tussauds-wax-museum-in-prague-1159961959.jpg',
      ],
    },
    {
      nombre: 'Wolverine',
      bio: 'En el universo ficticio de Marvel, Wolverine posee poderes regenerativos que pueden curar cualquier herida, por mortal que ésta sea, además ese mismo poder hace que sea inmune a cualquier enfermedad existente en la Tierra y algunas extraterrestres . Posee también una fuerza sobrehumana, que si bien no se compara con la de otros superhéroes como Hulk, sí sobrepasa la de cualquier humano.',
      img: 'assets/img/wolverine.png',
      aparicion: '1974-11-01',
      casa: 'Marvel',
      id: 7,
      listImg : [
        "https://www.shutterstock.com/shutterstock/photos/406971838/display_1500/stock-photo-shanghai-china-apr-wolverine-illustration-at-the-shanghai-madame-tussauds-wax-museum-406971838.jpg",
        "https://www.shutterstock.com/shutterstock/photos/460025110/display_1500/stock-photo-london-england-july-wolverine-poster-at-thmadame-tussauds-wax-museum-it-is-a-major-460025110.jpg",
        "https://www.shutterstock.com/shutterstock/photos/460025062/display_1500/stock-photo-london-england-july-wolverine-poster-at-thmadame-tussauds-wax-museum-it-is-a-major-460025062.jpg",
        "https://www.shutterstock.com/shutterstock/photos/261127478/display_1500/stock-photo-ayuttaya-thailand-march-closeup-the-wolverine-model-at-thung-bua-chom-floating-market-261127478.jpg",
      ],
    },
  ];

  constructor() { }

  getHeroes():Heroe[]{
    return this.heroes;

  }

  getUnHeroe(idHeroe:number){
    return this.heroes[idHeroe - 1 ];
  }

  getHeroesComo(termino:string):Heroe[]{

    let busquedaHeroes: Heroe[] = [];

    for(let i = 0 ; i < this.heroes.length ; i++){

      let heroeAComparar = this.heroes[i];

      let nombreAComparar = heroeAComparar.nombre.toLocaleUpperCase();

      if (nombreAComparar.indexOf(termino) >= 0 ){
        busquedaHeroes.push(heroeAComparar);
      }

    }

    return busquedaHeroes;

  }
 


}
