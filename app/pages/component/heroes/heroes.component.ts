import { Component, OnInit } from '@angular/core';
import { Hero } from './hero';
//import {HeroService} from '../pages/hero.service';

import { HeroService } from './hero.service';
//C:\Users\RB\newapp\elite-angular-lite\elite-angular-lite\src\app\pages

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.css']
})
export class NgbdHeroBasic implements OnInit {
  

  
selectedHero: Hero;
 
  heroes: Hero[];
 
  constructor(private heroService: HeroService) { }
 
  ngOnInit() {
    this.getHeroes();
  }
 
  onSelect(hero: Hero): void {
    this.selectedHero = hero;
  }
 
  getHeroes(): void {
    this.heroService.getHeroes()
        .subscribe(heroes => this.heroes = heroes);
  }
}