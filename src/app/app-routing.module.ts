import { NgModule } from '@angular/core';
/* import { CommonModule } from '@angular/common'; LO QUITAMOS PORQUE NO NECESITAMOS NADA NI EL ngIf, ni el ngFor ya que un modulo básico*/
import {RouterModule, Routes} from '@angular/router'
import { DahsboardComponent } from './pages/dahsboard/dahsboard.component';
import { LoginComponent } from './auth/login/login.component';
import { RegisterComponent } from './auth/register/register.component';
import { ProgressComponent } from './pages/progress/progress.component';
import { GraficalComponent } from './pages/grafical/grafical.component';
import { NopagefoundComponent } from './pages/nopagefound/nopagefound.component';
import { PagesComponent } from './pages/pages.component';


const routes: Routes = [


  {
    path: '', 
    component: PagesComponent,
    children:[
      {path: 'dashboard', component: DahsboardComponent },
      {path: 'progress', component: ProgressComponent }, 
      {path: 'grafical', component: GraficalComponent},
      {path: '', redirectTo: '/dashboard', pathMatch: 'full'},
    ]

  },
  
  
    {path: 'login', component: LoginComponent },
    {path: 'register', component: RegisterComponent },

    {path: '**', component: NopagefoundComponent},

]

@NgModule({
  declarations: [],
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports:[
    RouterModule,
  ]
}) 
export class AppRoutingModule { }
