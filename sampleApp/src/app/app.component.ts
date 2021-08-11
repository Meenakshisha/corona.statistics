import {Component} from '@angular/core';
import { DataService, GermanyData, StatesData, Weeks } from "./data.service";
import { GoogleChartInterface } from 'ng2-google-charts';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']  
})
export class AppComponent {
  
  // to select time series for covid data
  weeks: Weeks[] = [
    {value: 27, viewValue: 'Latest'},
    {value: 20, viewValue: '1 Week back'},
    {value: 13, viewValue: '2 Weeks back'},
    {value: 7, viewValue: '3 Weeks back'},
    {value: 1, viewValue: '4 Weeks back'}
  ];

  //default time series (lastest)
  selectedWeek: number = 27;  

  //user input to select one of the map
  options: string[] = ["cases", "deaths", "recovered"]

  //set default option to show cases
  selectedOption: string = 'cases';

  //set default map to cases
  case = true;
  death = false;
  recovery = false;
  
  //map data
  states_cases = [['State','cases']];
  states_deaths = [['State','deaths']];
  states_recovered = [['State','recovered']];

  //default value for germany covid numbers
  germanyCases = 0;
  germanyDeaths = 0;
  germanyRecovered = 0;

  //default value for germany data
  germanyCasesData: GermanyData = {data: [{cases: 0, deaths:0, recovered: 0}]};
  germanyDeathData: GermanyData = {data: [{cases: 0, deaths:0, recovered: 0}]};
  germanyRecoveredData: GermanyData = {data: [{cases: 0, deaths:0, recovered: 0}]};

  // Chart Inputs
  public cases: GoogleChartInterface = {
    chartType: 'GeoChart',
    dataTable: this.states_cases,
    options: {
      region: 'DE',
      resolution: 'provinces',
      defaultColor: 'yellowgreen',
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
    this.displayData(27, 'cases');    
  }

  //decides which data to display depending on the input provided by user
  displayData(week:number, option: string) {
    if(option == "deaths") {
      this.serv.getStatesDeaths().subscribe((res)=>{
          this.pushDeathData(res, week);        
        }, 
        (err)=>{
          console.log(err)
        }
      );
      this.death = true;
      this.case = false;
      this.recovery = false;
    } else if(option == "recovered") {
      this.serv.getStatesRecovered().subscribe((res)=>{
          this.pushRecoveredData(res, week);
        },
        (err)=>{
          console.log(err)
        }
      );
      this.recovery = true;     
      this.case = false;
      this.death = false;
    } else {
      this.serv.getStatesCases().subscribe((res)=>{
          this.pushCaseData(res, week);
        },
        (err)=>{
          console.log(err)
        }
      );
      this.case = true;
      this.death = false;
      this.recovery = false;
    }
    
    // display germany's total data 
    this.serv.getGermanyCases().subscribe((res)=>{      
        this.germanyCasesData = res;
        this.germanyCases = this.germanyCasesData.data[week].cases;
      },
      (err)=>{
        console.log(err)
    })
    this.serv.getGermanyDeaths().subscribe((res)=>{      
        this.germanyDeathData = res;
        this.germanyDeaths = this.germanyDeathData.data[week].deaths;
      },
      (err)=>{
        console.log(err)
    })
    this.serv.getGermanyRecovered().subscribe((res)=>{      
        this.germanyRecoveredData = res;
        this.germanyRecovered = this.germanyRecoveredData.data[week].recovered;
      },
      (err)=>{
        console.log(err)
    })
  }
  
  //push state's cases to map input
  pushCaseData(res: StatesData, week: number) {
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
    this.cases.component.draw();
  }

  //push state's recoveries to map input
  pushRecoveredData(res: StatesData, week: number) {
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
    this.recovered.component.draw();
  }
 
  //push state's deaths to map input
  pushDeathData(res: StatesData, week: number) {
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
    this.deaths.component.draw();
  }  
}

