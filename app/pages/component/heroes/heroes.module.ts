import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { Hero } from './hero';
import { NgbdHeroBasic } from './heroes.component';

import { HeroService } from './hero.service';
 
const routes: Routes = [{
	path: '',
	data: {
      title: 'Hero',
      urls: [{title: 'Hero', url: '/'},{title: 'ngComponent'},{title: 'Hero'}]
    },
	component: NgbdHeroBasic  
}];

@NgModule({
	imports: [
    	FormsModule,
    	CommonModule,
       
      NgbModule.forRoot(),
    	RouterModule.forChild(routes)
    ],
	declarations: [NgbdHeroBasic ]
})
export class HeroModule { }
