import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { ContactComponent } from './contact/contact.component';
import { ValveBallsComponent } from './products/valve-balls/valve-balls.component';
import { SanitaryFittingsComponent } from './products/sanitary-fittings/sanitary-fittings.component';

export const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
  },
  {
    path: 'valve-balls',
    component: ValveBallsComponent,
  },
  {
    path: 'sanitary-fittings',
    component: SanitaryFittingsComponent,
  },
  {
    path: 'about',
    component: AboutComponent,
  },
  {
    path: 'contact',
    component: ContactComponent,
  },
];
