import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ChartComponent } from "./chart/chart.component";
import { DashboardComponent } from "./dashboard/dashboard.component";
import { RouterModule, Routes } from "@angular/router";

const routes: Routes = [
  { path: '', component: DashboardComponent },
  { path: 'chart', component: ChartComponent },
]

@NgModule({
  declarations: [ ],
  imports: [
    CommonModule,
    RouterModule.forRoot(routes)
  ],
  exports: [
    RouterModule
  ]
})
export class AppRoutingModule { }
