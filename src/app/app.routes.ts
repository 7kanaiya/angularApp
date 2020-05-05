import { Route } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { ProductComponent } from './product.component';
import { GenderComponent } from './gender.component';
import { SongListComponent } from './songlist.component';

export const routes: Route[] = [
  {
    path: '',
    component: HomeComponent,
  },
  {
    path: 'home',
    component: HomeComponent,
  },
  {
    path: 'about',
    component: AboutComponent,
    children: [
      {
        path: 'gender',
        component: GenderComponent,
      },
      {
        path: 'songlist',
        component: SongListComponent,
      },
    ],
  },
  {
    path: 'product',
    component: ProductComponent,
  },
];
