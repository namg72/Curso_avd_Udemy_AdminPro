import { NgModule } from '@angular/core';
/* import { CommonModule } from '@angular/common'; LO QUITAMOS PORQUE NO NECESITAMOS NADA NI EL ngIf, ni el ngFor ya que un modulo básico*/
import {RouterModule, Routes} from '@angular/router'


import { PagesRoutingModule } from './pages/pages.routing';
import { AuthRoutingModule } from './auth/auth.routing';

import { NopagefoundComponent } from './nopagefound/nopagefound.component';


const routes: Routes = [

  {path: '', redirectTo: '/dashboard', pathMatch: 'full'},
  
  {path: '**', component: NopagefoundComponent},
    


]

@NgModule({
  declarations: [],
  imports: [
    RouterModule.forRoot(routes),
    PagesRoutingModule,
    AuthRoutingModule
   
  ],
  exports:[
    RouterModule,
  ]
}) 
export class AppRoutingModule { }
