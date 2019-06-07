import { Routes, RouterModule } from '@angular/router';
import { MediaItemFormComponent } from './media-item-form.component';
import { MediaItemListComponent } from 'src/app/media-item-list/media-item-list.component';

const appRoutes: Routes = [
    { path: 'add', component: MediaItemFormComponent },
    { path: ':medium', component: MediaItemListComponent },
    { path: '', pathMatch: 'full', redirectTo: 'all' }
  ];

export const routing = RouterModule.forRoot(appRoutes);