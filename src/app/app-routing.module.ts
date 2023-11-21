import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ChartComponent } from "./bar-chart/chart.component";
import { LineChartComponent } from "./line-chart/line-chart.component";
import { DashboardComponent } from "./dashboard/dashboard.component";
import { RouterModule, Routes } from "@angular/router";

const routes: Routes = [
  { path: '', component: DashboardComponent },
  { path: 'chart', component: ChartComponent },
  { path: 'line', component: LineChartComponent },
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
