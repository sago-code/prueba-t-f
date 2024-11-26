import { Routes } from '@angular/router';
import { SearchComponent } from '../app/components/search/search.component';
import { SummaryComponent } from '../app/components/summary/summary.component';

export const routes: Routes = [
  { path: '', redirectTo: 'search', pathMatch: 'full' },
  { path: 'search', component: SearchComponent },
  { path: 'summary', component: SummaryComponent }
];
