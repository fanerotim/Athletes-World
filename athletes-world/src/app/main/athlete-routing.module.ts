import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { DashboardComponent } from "./dashboard/dashboard.component";
import { CurrentAthleteComponent } from "./current-athlete/current-athlete.component";
import { CreateComponent } from "./create/create.component";
import { EditComponent } from "./edit/edit.component";
import { GuestGuard } from "./route-guards/guest.guard";
import { NotFoundComponent } from "./not-found/not-found.component";

const routes: Routes = [
    {
        path: 'athletes', children: [
            { path: '', pathMatch: 'full', component: DashboardComponent },
            { path: 'create', component: CreateComponent },
            { path: ':athleteId', component: CurrentAthleteComponent },
            { path: ':athleteId/edit', canActivate: [GuestGuard], component: EditComponent },
            {path: '**', pathMatch: 'full', component: NotFoundComponent},
        ], 
    },
]

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})

export class athleteRoutingModule {

}