import { Component, OnInit,Input } from '@angular/core';
import { Hero } from '../Heroes/hero';

@Component({
  selector: 'app-herodetail',
  templateUrl: './herodetail.component.html',
  styleUrls: ['./herodetail.component.css']
})
export class NgbdHerodetailBasic implements OnInit {

  @Input() hero: Hero;
 
  constructor() { }
 
  ngOnInit() {
  }

}