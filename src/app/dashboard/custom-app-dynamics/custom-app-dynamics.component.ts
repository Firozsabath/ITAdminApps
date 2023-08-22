import { Component, OnInit } from '@angular/core';
import {Chart,registerables} from 'node_modules/chart.js';
import { AppStatisticDTO, AppstatsDTO, ChartView } from 'src/app/Models/Statistics/Appstats';
import { AppstatsService } from 'src/app/service/AppStatistcs/appstats.service';
Chart.register(...registerables);

@Component({
  selector: 'app-custom-app-dynamics',
  templateUrl: './custom-app-dynamics.component.html',
  styleUrls: ['./custom-app-dynamics.component.css']
})
export class CustomAppDynamicsComponent implements OnInit {
  overallStats : any;
  quotRatio: Array<ChartView>;  
  quotLabelArray:any[]=[];
  quotDataArray:any[]=[];
  constructor(private statsServices:AppstatsService) {
   
   }

  ngOnInit(): void {
    
    this.statsServices.getQuotRatio().subscribe((data:any)=>{
      this.quotRatio = data; 
      if(this.quotRatio!=null){
        for(let i=0;i<this.quotRatio.length;i++){
          this.quotLabelArray.push(this.quotRatio[i].Dimension);
          this.quotDataArray.push(this.quotRatio[i].Quantity);
        }
      }      
      console.log(this.quotLabelArray);     
    }); 
    this.renderChart(this.quotLabelArray,this.quotDataArray,"line","quotbarchart");
    this.renderChart(this.quotLabelArray,this.quotDataArray,"doughnut","quotpiechart");
    this.getappstatsInfo();
  }

  getappstatsInfo(){
    this.statsServices.getCustomAppStats().subscribe((data:any)=>{
      this.overallStats = data;       
    });   
  }

  renderChart(labelData:any,dataArray:any,type: any, id:any){
    new Chart(id, {
      type: type,
      data: {
        //labels: ['Red', 'Blue', 'Yellow', 'Green', 'Purple', 'Orange'],
        labels: labelData,
        datasets: [{
          label: 'Quotation generation over the months',
          data: dataArray,
          borderWidth: 1
        }]
      },
      options: {
        maintainAspectRatio: false,
        scales: {
          y: {
            beginAtZero: true,            
          }
        }
      }
    });

  }

}
