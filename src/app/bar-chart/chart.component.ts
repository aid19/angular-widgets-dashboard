import { Component, OnInit } from '@angular/core';
import {Chart, registerables} from 'node_modules/chart.js'
Chart.register(...registerables);
import { MasterService } from '../services/master.service'; 


@Component({
  selector: 'app-chart',
  templateUrl: './chart.component.html',
  styleUrls: ['./chart.component.css']
})
export class ChartComponent implements OnInit {

  constructor(private service:MasterService) { }

  chartdata:any;
  labeldata:any[]=[]
  temperature:any[]=[]
  humidity:any[]=[]
  light:any[]=[]
  colordata:any[]=[]
 

  ngOnInit(): void {
    this.service.Getchartinfo().subscribe(result=> {
      this.chartdata=result;
      if(this.chartdata!=null){
        for (let i=0; i<this.chartdata.length; i++) {
          this.labeldata.push(this.chartdata[i].date);
          this.temperature.push(this.chartdata[i].temperature);
          this.humidity.push(this.chartdata[i].humidity);
          this.light.push(this.chartdata[i].lightLevel);
        }
        this.RenderChart(this.labeldata, this.temperature, this.humidity, this.light);
      }
    });
  }

  RenderChart(labeldata:any, temperature:any, humidity:any, light:any){
    const barChart = new Chart('barchart', {
      type: 'bar',
      data: {
        labels: labeldata,
        datasets: [
          {
            label: 'Temperature',
            data: temperature,
            borderColor: 'rgb(255, 99, 132)',
            backgroundColor: 'rgba(255, 99, 132, 0.2)',
            borderWidth: 1
          },
          {
            label: 'Humidity',
            data: humidity,
            borderColor: 'rgb(255, 205, 86)',
            backgroundColor: 'rgba(255, 205, 86, 0.2)',
            borderWidth: 1
          },
          {
            label: 'Light',
            data: light,
            borderColor: 'rgb(54, 162, 235)',
            backgroundColor: 'rgba(54, 162, 235, 0.2)',
            borderWidth: 1
          }
        ]
      },
      options: {
        scales: {
          y: {
            beginAtZero: true
          }
        }
      }
    });
  }

}
