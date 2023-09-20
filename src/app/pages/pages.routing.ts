import { Routes, RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { PagesComponent } from './pages.component';
import { DahsboardComponent } from './dahsboard/dahsboard.component';
import { ProgressComponent } from './progress/progress.component';
import { GraficalComponent } from './grafical/grafical.component';


const routes: Routes = [


    {
        path: 'dashboard', 
        component: PagesComponent,
        children:[
          {path: '', component: DahsboardComponent },
          {path: 'progress', component: ProgressComponent }, 
          {path: 'grafical', component: GraficalComponent},
          
        ]
    
      },


];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class PagesRoutingModule {}
