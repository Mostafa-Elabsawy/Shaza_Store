import { Routes } from '@angular/router';
import { NavbarComponent } from '../shared/components/navbar/navbar.component';
import { HomeComponent } from '../features/home/home.component';
import { ShopComponent } from '../features/shop/shop.component';
export const routes: Routes = [
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full',
  },
  {
    path: 'home',
    component: HomeComponent,
  },
  {
    path: 'shop',
	component:ShopComponent
  },
];
