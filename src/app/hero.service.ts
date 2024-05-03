import { Injectable } from '@angular/core';

import { Observable, of } from 'rxjs';

import { Hero } from './hero';
import { HEROES } from './heroes-list';
import { MessageService } from './message.service';

@Injectable({ providedIn: 'root' })
export class HeroService {

  constructor(private messageService: MessageService) { }

  getHeroes(): Observable<Hero[]> {
    const heroes = of(HEROES);
    this.messageService.add('Servicio de Peliculas: Peliculas encontradas');
    return heroes;
  }

  getHero(id: number): Observable<Hero> {
    
    const hero = HEROES.find(h => h.id === id)!;
    this.messageService.add(`Servicio de Peliculas: id de Pelicula: ${id}`);
    return of(hero);
  }
}