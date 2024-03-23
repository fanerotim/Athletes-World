import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home/home.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import {HttpClientModule} from '@angular/common/http'
import { SharedModule } from '../shared/shared.module';
import { CurrentAthleteComponent } from './current-athlete/current-athlete.component';
import { RouterModule } from '@angular/router';
import { NotFoundComponent } from './not-found/not-found.component';
import { EditComponent } from './edit/edit.component';
import { CreateComponent } from './create/create.component';
import { ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    HomeComponent,
    DashboardComponent,
    CurrentAthleteComponent,
    NotFoundComponent,
    EditComponent,
    CreateComponent
  ],
  imports: [
    CommonModule,
    HttpClientModule,
    SharedModule,
    RouterModule,
    ReactiveFormsModule
  ]
})
export class MainModule { }
