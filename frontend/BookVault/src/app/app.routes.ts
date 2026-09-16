import { Routes } from '@angular/router';
import { Dashboard } from './components/dashboard/dashboard';
import { Home } from './components/home/home';
import { Quotes } from './components/quotes/quotes';
import { DashboardLayout } from './components/dashboard-layout/dashboard-layout';
import { AddBook } from './components/add-book/add-book';
import { AddQuote } from './components/add-quote/add-quote';
import { EditBook } from './edit-book/edit-book';

export const routes: Routes = [
  {
    path: '',
    component: Home,
  },
  {
    path: 'dashboard',
    component: DashboardLayout,
    children: [
      {
        path: '',
        component: Dashboard,
      },

      {
        path: 'quotes',
        component: Quotes,
      },
      {
        path:'add-book',
        component:AddBook
      },
      {
        path:'edit-book/:id',
        component:EditBook

      },
      {
        path:'add-quote',
        component:AddQuote
      }
    ],
  },
];
