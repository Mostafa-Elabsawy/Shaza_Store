import { Component } from '@angular/core';
import {HeroComponent} from './hero/hero.component';
import { CollectionComponent } from './collection/collection.component';

@Component({
  selector: 'app-home',
  imports: [HeroComponent,CollectionComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css',
})
export class HomeComponent {}
