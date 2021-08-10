import {Component} from '@angular/core';
import { DataService } from "./data.service";
import { GoogleChartInterface } from 'ng2-google-charts';


interface Weeks {
  value: number;
  viewValue: string;
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']  
})
export class AppComponent {
  
  weeks: Weeks[] = [
    {value: 27, viewValue: 'Latest'},
    {value: 20, viewValue: '1 Week back'},
    {value: 13, viewValue: '2 Weeks back'},
    {value: 7, viewValue: '3 Weeks back'},
    {value: 1, viewValue: '4 Weeks back'}
  ];
  selectedWeek: number = 27;
  states_cases = [['State','COVID-Confirmed Cases: ']];
  states_deaths = [['State','COVID-Confirmed Deaths: ']];
  states_recovered = [['State','COVID-Confirmed Recovered: ']];
  response: any[]=[];
  mapReady=false;
  public cases: GoogleChartInterface = {
    chartType: 'GeoChart',
    dataTable: this.states_cases,
    options: {
      region: 'DE',
      resolution: 'provinces',
      defaultColor: '#00000',
      'height': 600,
    }
  };
  public deaths: GoogleChartInterface = {
    chartType: 'GeoChart',
    dataTable: this.states_deaths,
    options: {
      region: 'DE', 
      resolution: 'provinces',    
      defaultColor: 'red',
      'height': 600,
    }
  };
  public recovered: GoogleChartInterface = {
    chartType: 'GeoChart',
    dataTable: this.states_recovered,
    options: {
      region: 'DE',
      resolution: 'provinces',
      defaultColor: 'yellow',
      'height': 600,
    }
  };
  constructor(public serv: DataService){}
  ngOnInit(){
    this.displayData(27);
  }
  displayData(week:number) {
    console.log(week)    
    this.serv.getStatesRecovered().subscribe((res)=>{
      this.pushRecoveredData(res, week);
      },
      (err)=>{
        console.log(err)
      }
    );
    this.serv.getStatesCases().subscribe((res)=>{
      this.pushCaseData(res, week);
      },
      (err)=>{
        console.log(err)
      }
    ); 
    this.serv.getStatesDeaths().subscribe((res)=>{
        this.pushDeathData(res, week);
      },
      (err)=>{
        console.log(err)
      }
    );    
  }
  
  pushCaseData(res, week: number) {
    this.states_cases.push(
      [res.data.BB.name, res.data.BB.name + ': '+ String(res.data.BB.history[week].cases)],
      [res.data.BE.name, res.data.BE.name + ': ' + String(res.data.BE.history[week].cases)],
      [res.data.BW.name, res.data.BW.name + ': ' + String(res.data.BW.history[week].cases)],
      [res.data.BY.name, res.data.BY.name + ': ' + String(res.data.BY.history[week].cases)],
      [res.data.HB.name, res.data.HB.name + ': ' + String(res.data.HB.history[week].cases)],
      [res.data.HE.name, res.data.HE.name + ': ' + String(res.data.HE.history[week].cases)],
      [res.data.HH.name, res.data.HH.name + ': ' + String(res.data.HH.history[week].cases)],
      [res.data.MV.name, res.data.MV.name + ': ' + String(res.data.MV.history[week].cases)],
      [res.data.NI.name, res.data.NI.name + ': ' + String(res.data.NI.history[week].cases)],
      [res.data.NW.name, res.data.NW.name + ': ' + String(res.data.NW.history[week].cases)],
      [res.data.RP.name, res.data.RP.name + ': ' + String(res.data.RP.history[week].cases)],
      [res.data.SH.name, res.data.SH.name + ': ' + String(res.data.SH.history[week].cases)],
      [res.data.SL.name, res.data.SL.name + ': ' + String(res.data.SL.history[week].cases)],
      [res.data.SN.name, res.data.SN.name + ': ' + String(res.data.SN.history[week].cases)],
      [res.data.ST.name, res.data.ST.name + ': ' + String(res.data.ST.history[week].cases)],
      [res.data.TH.name, res.data.TH.name + ': ' + String(res.data.TH.history[week].cases)],
    );   
    //force a redraw
    this.mapReady=true;
    this.cases.component.draw();
  }

  pushRecoveredData(res, week: number) {
    this.states_recovered.push(
      [res.data.BB.name, res.data.BB.name + ': ' + String(res.data.BB.history[week].recovered)],
      [res.data.BE.name, res.data.BE.name + ': ' + String(res.data.BE.history[week].recovered)],
      [res.data.BW.name, res.data.BW.name + ': ' + String(res.data.BW.history[week].recovered)],
      [res.data.BY.name, res.data.BY.name + ': ' + String(res.data.BY.history[week].recovered)],
      [res.data.HB.name, res.data.HB.name + ': ' + String(res.data.HB.history[week].recovered)],
      [res.data.HE.name, res.data.HE.name + ': ' + String(res.data.HE.history[week].recovered)],
      [res.data.HH.name, res.data.HH.name + ': ' + String(res.data.HH.history[week].recovered)],
      [res.data.MV.name, res.data.MV.name + ': ' + String(res.data.MV.history[week].recovered)],
      [res.data.NI.name, res.data.NI.name + ': ' + String(res.data.NI.history[week].recovered)],
      [res.data.NW.name, res.data.NW.name + ': ' + String(res.data.NW.history[week].recovered)],
      [res.data.RP.name, res.data.RP.name + ': ' + String(res.data.RP.history[week].recovered)],
      [res.data.SH.name, res.data.SH.name + ': ' + String(res.data.SH.history[week].recovered)],
      [res.data.SL.name, res.data.SL.name + ': ' + String(res.data.SL.history[week].recovered)],
      [res.data.SN.name, res.data.SN.name + ': ' + String(res.data.SN.history[week].recovered)],
      [res.data.ST.name, res.data.ST.name + ': ' + String(res.data.ST.history[week].recovered)],
      [res.data.TH.name, res.data.TH.name + ': ' + String(res.data.TH.history[week].recovered)],
    );    
    this.mapReady=true;
    this.recovered.component.draw();
  }
 
  pushDeathData(res, week: number) {
    this.states_deaths.push(
      [res.data.BB.name, res.data.BB.name + ': ' + String(res.data.BB.history[week].deaths)],
      [res.data.BE.name, res.data.BE.name + ': ' + String(res.data.BE.history[week].deaths)],
      [res.data.BW.name, res.data.BW.name + ': ' + String(res.data.BW.history[week].deaths)],
      [res.data.BY.name, res.data.BY.name + ': ' + String(res.data.BY.history[week].deaths)],
      [res.data.HB.name, res.data.HB.name + ': ' + String(res.data.HB.history[week].deaths)],
      [res.data.HE.name, res.data.HE.name + ': ' + String(res.data.HE.history[week].deaths)],
      [res.data.HH.name, res.data.HH.name + ': ' + String(res.data.HH.history[week].deaths)],
      [res.data.MV.name, res.data.MV.name + ': ' + String(res.data.MV.history[week].deaths)],
      [res.data.NI.name, res.data.NI.name + ': ' + String(res.data.NI.history[week].deaths)],
      [res.data.NW.name, res.data.NW.name + ': ' + String(res.data.NW.history[week].deaths)],
      [res.data.RP.name, res.data.RP.name + ': ' + String(res.data.RP.history[week].deaths)],
      [res.data.SH.name, res.data.SH.name + ': ' + String(res.data.SH.history[week].deaths)],
      [res.data.SL.name, res.data.SL.name + ': ' + String(res.data.SL.history[week].deaths)],
      [res.data.SN.name, res.data.SN.name + ': ' + String(res.data.SN.history[week].deaths)],
      [res.data.ST.name, res.data.ST.name + ': ' + String(res.data.ST.history[week].deaths)],
      [res.data.TH.name, res.data.TH.name + ': ' + String(res.data.TH.history[week].deaths)],
    );
    this.mapReady=true;
    this.deaths.component.draw();
  }
  
  /**
   * regions: Region[] = [
    {value: 'DE', viewValue: 'Germany'},
    {value: 'SH', viewValue: 'Schleswig-Holstein'},
    {value: 'HH', viewValue: 'Hamburg'},
    {value: 'NI', viewValue: 'Niedersachsen'},
    {value: 'HB', viewValue: 'Bremen'},
    {value: 'NW', viewValue: 'Nordrhein-Westfalen'},
    {value: 'HE', viewValue: 'Hessen'},
    {value: 'RP', viewValue: 'Rheinland-Pfalz'},
    {value: 'BW', viewValue: 'Baden-Württemberg'},
    {value: 'BY', viewValue: 'Bayern'},
    {value: 'SL', viewValue: 'Saarland'},
    {value: 'BE', viewValue: 'Berlin'},
    {value: 'BB', viewValue: 'Brandenburg'},
    {value: 'MV', viewValue: 'Mecklenburg-Vorpommern'},
    {value: 'SN', viewValue: 'Sachsen'},
    {value: 'ST', viewValue: 'Sachsen-Anhalt'},
    {value: 'TH', viewValue: 'Thüringen'}
  ];
   */
}

