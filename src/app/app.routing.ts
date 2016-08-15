import { Routes, RouterModule } from '@angular/router';

import { EditorComponent }  from './editor.component';
import { IndexComponent }  from './index.component';
// import { HeroListComponent }    from './hero-list.component';

const appRoutes: Routes = [
  { path: 'editor', component: EditorComponent },
  { path: '', redirectTo: 'editor', pathMatch: 'full' },
//  { path: 'heroes', component: HeroListComponent }
];

export const appRoutingProviders: any[] = [

];

export const routing = RouterModule.forRoot(appRoutes);
