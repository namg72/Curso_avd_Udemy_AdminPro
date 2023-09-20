import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import {PagesComponent} from './pages.component'
import { DahsboardComponent } from './dahsboard/dahsboard.component';
import { GraficalComponent } from './grafical/grafical.component';
import { ProgressComponent } from './progress/progress.component';
import { SharedModule } from '../shared/shared.module';


@NgModule({
  declarations: [
    DahsboardComponent,
    GraficalComponent,
    ProgressComponent,
    PagesComponent
    
  ],
  imports: [
    CommonModule,
    SharedModule,
    RouterModule
  ],

  exports:[
    DahsboardComponent,
    GraficalComponent,
    ProgressComponent,
  ]
})
export class PagesModule { }
