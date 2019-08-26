import { Component, OnInit } from '@angular/core';
import { HeroService } from '../hero.service';
import { Hero } from '../hero';


@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.css']
})
export class HeroesComponent implements OnInit {
  heroes : Hero[];
  
  constructor(private heroService:HeroService) { }

  getHeroes(): void {
    this.heroService.getHeroes()
        .subscribe(heroes => this.heroes = heroes);
  }

  delete(hero: Hero): void {
    this.heroes = this.heroes.filter(h => h !== hero);
    console.log(hero.name);
    this.heroService.deleteHero(hero.name).subscribe();
  }

  save(hero:Hero): void {
    this.heroService.updateHero(hero).subscribe() ;
  }

  addSave(name : string, publisher: string, intellegence: string, strength: string, image: string): void {
    this.heroes.push({name, publisher, intellegence, strength, image}); 
    this.heroService.updateHero({name, publisher, intellegence, strength, image}).subscribe() ;
  }

  ngOnInit() {
    this.getHeroes();
  }

}
