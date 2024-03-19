import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { DashboardComponent } from "./dashboard/dashboard.component";
import { CurrentAthleteComponent } from "./current-athlete/current-athlete.component";

const routes: Routes = [
    {path: 'athletes', children: [
        {path: '', pathMatch: 'full', component: DashboardComponent},
        {path: ':athleteId', component: CurrentAthleteComponent}
    ]},
]

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})

export class athleteRoutingModule {

}