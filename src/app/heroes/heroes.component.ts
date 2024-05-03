//1.-para mostar lo que se esta ejecutando aqui se debe colocar en temple de app.componet
import { Component, OnInit } from '@angular/core';

import { Hero } from '../hero';
import { HeroService } from '../hero.service';
//1.-@Component es una decoradoro que especifica metadatos Angular para un componente
//1.-se asigna datos a la arrays
//4.-se suprime porque ya se va dar uso import { HEROES } from '../heroes-list'; //2.-se importa el la lista de heroes 
//para mostrar en la pantalla
import { MessageService } from '../message.service';
@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.css']
})
/*standalone:true,
iports[
  formsmodule,
  ngif,
  ngfor,
  uppercasepipe,
  herodetailcomponent
]*/
export class HeroesComponent implements OnInit {
  selectedHero?: Hero;

  heroes: Hero[] = [];//4.-
  /*hero: Hero = {
    id: 1,
    name: 'Windstorm'
  };*/
  //heroes = HEROES; //2.-igualacion para pasar los datos
  //selectedHero: Hero; //2.-para selecionar a los heroes
  constructor(private heroService: HeroService) { }

  ngOnInit(): void {
    this.getHeroes();
  }
  /*onSelect(hero: Hero): void {
    this.selectedHero = hero;
    this.messageService.add(`HeroesComponent: Selected hero id=${hero.id}`);
  }
  }2.-se seleciona el un heroe y lo almacena en hero*/
  getHeroes(): void {
    this.heroService.getHeroes()
    .subscribe(heroes => this.heroes = heroes);
  }
}