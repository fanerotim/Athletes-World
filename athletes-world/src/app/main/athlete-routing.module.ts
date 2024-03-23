import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { DashboardComponent } from "./dashboard/dashboard.component";
import { CurrentAthleteComponent } from "./current-athlete/current-athlete.component";
import { CreateComponent } from "./create/create.component";

const routes: Routes = [
    {path: 'athletes', children: [
        {path: '', pathMatch: 'full', component: DashboardComponent},
        {path: 'create', component: CreateComponent},
        {path: ':athleteId', component: CurrentAthleteComponent}
    ]},
]

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})

export class athleteRoutingModule {

}