import { Component } from '@angular/core';
import {HeroComponent} from './hero/hero.component';
import { CollectionComponent } from './collection/collection.component';
import { BestsellersComponent } from './bestsellers/bestsellers.component';
import { TrashComponent } from '../trash/trash.component';
import { CommentsComponent } from './comments/comments.component';

@Component({
  selector: 'app-home',
  imports: [HeroComponent,CollectionComponent,BestsellersComponent,CommentsComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css',
})
export class HomeComponent {}
