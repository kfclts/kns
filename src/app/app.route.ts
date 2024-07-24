import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { ContactComponent } from './contact/contact.component';
import { ProductsComponent } from './products/products.component';
import { ValveballsComponent } from './products/valveballs/valveballs.component';

export const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
  },
  {
    path: 'valve-balls',
    component: ValveballsComponent,
  },
  {
    path: 'product',
    component: ProductsComponent,
  },
  {
    path: 'about-us',
    component: AboutComponent,
  },
  {
    path: 'contact-us',
    component: ContactComponent,
  },
  // 通配符路由，用于捕获所有未定义的路由请求，并重定向到根路径
  { path: '**', redirectTo: '/' },
];
