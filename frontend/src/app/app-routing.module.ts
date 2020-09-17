import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

// Components
import {NotFoundComponent} from '@corePath/components/not-found/not-found.component';
import {AppComponent} from '@app/app.component';

const routes: Routes = [
  {path: '', redirectTo: '/home', pathMatch: 'full'},
  {path: '404', component: NotFoundComponent},
  {path: 'home', component: AppComponent},
  {path: '**', redirectTo: '/404'},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
