//1.-para mostar lo que se esta ejecutando aqui se debe colocar en temple de app.componet
import { Component, OnInit } from '@angular/core';

import { Hero } from '../hero';
import { HeroService } from '../hero.service';
//1.-@Component es una decoradoro que especifica metadatos Angular para un componente
//1.-se asigna datos a la arrays
@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.css']
})
export class HeroesComponent implements OnInit {
  heroes: Hero[] = [];
  /*1.-hero: Hero = {
    id: 1,
    name: 'Windstorm'
  };*/
  constructor(private heroService: HeroService) { }

  ngOnInit(): void {
    this.getHeroes();
  }

  getHeroes(): void {
    this.heroService.getHeroes()
    .subscribe(heroes => this.heroes = heroes);
  }
}