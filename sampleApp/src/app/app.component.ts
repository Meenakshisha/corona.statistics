/*
 * COPYRIGHT:  EC
 * PROJECT:    GALILEO
 * FILE:       app.component.ts
 * HISTORY:    The change record of this file is available at the end of the file
 * -----------------------------------------------------------------------------
 * EC Proprietary Information. Unauthorised distribution, dissemination or disclosure not allowed.
 * -----------------------------------------------------------------------------
 */

import {Component} from '@angular/core';
import { identity, Subscription } from "rxjs";
import { DataService, Data, StatesData  } from "./data.service";

interface Region {
  value: string;
  viewValue: string;
}
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
  data: Data[] = [{cases: 0, deaths: 0, recovered: 0}];
  regions: Region[] = [
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
  weeks: Weeks[] = [
    {value: 27, viewValue: 'Latest'},
    {value: 20, viewValue: '1 Week back'},
    {value: 13, viewValue: '2 Weeks back'},
    {value: 7, viewValue: '3 Weeks back'},
    {value: 1, viewValue: '4 Weeks back'}
  ];
  selectedValue: string = "DE";
  selectedWeek: number = 27;
  private serviceSubscription: Subscription | undefined;
  displayedColumns: string[] = ['region', 'cases', 'deaths', 'recovered'];
  dataSource = this.data;

  constructor(private dataService: DataService) {
  }

  changeClient() {
    switch(this.selectedValue) { 
      case "SH": { 
        this.data[0].region = "SH"
        this.data[0].cases = this.dataService.statesCases.data.SH.history[this.selectedWeek].cases;
        this.data[0].deaths = this.dataService.statesDeaths.data.SH.history[this.selectedWeek].deaths;
        this.data[0].recovered = this.dataService.statesRecovered.data.SH.history[this.selectedWeek].recovered;        
        break; 
      } 
      case "HH": { 
        this.data[0].cases = this.dataService.statesCases.data.HH.history[this.selectedWeek].cases;
        this.data[0].deaths = this.dataService.statesDeaths.data.HH.history[this.selectedWeek].deaths;
        this.data[0].recovered = this.dataService.statesRecovered.data.HH.history[this.selectedWeek].recovered;
        break; 
      }
      case "NI": { 
        this.data[0].cases = this.dataService.statesCases.data.NI.history[this.selectedWeek].cases;
        this.data[0].deaths = this.dataService.statesDeaths.data.NI.history[this.selectedWeek].deaths;
        this.data[0].recovered = this.dataService.statesRecovered.data.NI.history[this.selectedWeek].recovered; 
        break; 
      } 
      case "HB": { 
        this.data[0].cases = this.dataService.statesCases.data.HB.history[this.selectedWeek].cases;
        this.data[0].deaths = this.dataService.statesDeaths.data.HB.history[this.selectedWeek].deaths;
        this.data[0].recovered = this.dataService.statesRecovered.data.HB.history[this.selectedWeek].recovered; 
        break; 
      } 
      case "NW": { 
        this.data[0].cases = this.dataService.statesCases.data.NW.history[this.selectedWeek].cases;
        this.data[0].deaths = this.dataService.statesDeaths.data.NW.history[this.selectedWeek].deaths;
        this.data[0].recovered = this.dataService.statesRecovered.data.NW.history[this.selectedWeek].recovered; 
        break; 
      } 
      case "HE": { 
        this.data[0].cases = this.dataService.statesCases.data.HE.history[this.selectedWeek].cases;
        this.data[0].deaths = this.dataService.statesDeaths.data.HE.history[this.selectedWeek].deaths;
        this.data[0].recovered = this.dataService.statesRecovered.data.HE.history[this.selectedWeek].recovered; 
        break; 
      }
      case "RP": { 
        this.data[0].cases = this.dataService.statesCases.data.RP.history[this.selectedWeek].cases;
        this.data[0].deaths = this.dataService.statesDeaths.data.RP.history[this.selectedWeek].deaths;
        this.data[0].recovered = this.dataService.statesRecovered.data.RP.history[this.selectedWeek].recovered;  
        break; 
      } 
      case "BW": { 
        this.data[0].cases = this.dataService.statesCases.data.BW.history[this.selectedWeek].cases;
        this.data[0].deaths = this.dataService.statesDeaths.data.BW.history[this.selectedWeek].deaths;
        this.data[0].recovered = this.dataService.statesRecovered.data.BW.history[this.selectedWeek].recovered; 
        break; 
      } 
      case "BY": { 
        this.data[0].cases = this.dataService.statesCases.data.BY.history[this.selectedWeek].cases;
        this.data[0].deaths = this.dataService.statesDeaths.data.BY.history[this.selectedWeek].deaths;
        this.data[0].recovered = this.dataService.statesRecovered.data.BY.history[this.selectedWeek].recovered; 
        break; 
      } 
      case "SL": { 
        this.data[0].cases = this.dataService.statesCases.data.SL.history[this.selectedWeek].cases;
        this.data[0].deaths = this.dataService.statesDeaths.data.SL.history[this.selectedWeek].deaths;
        this.data[0].recovered = this.dataService.statesRecovered.data.SL.history[this.selectedWeek].recovered; 
        break; 
      }
      case "BE": { 
        this.data[0].cases = this.dataService.statesCases.data.BE.history[this.selectedWeek].cases;
        this.data[0].deaths = this.dataService.statesDeaths.data.BE.history[this.selectedWeek].deaths;
        this.data[0].recovered = this.dataService.statesRecovered.data.BE.history[this.selectedWeek].recovered; 
        break; 
      } 
      case "BB": { 
        this.data[0].cases = this.dataService.statesCases.data.BB.history[this.selectedWeek].cases;
        this.data[0].deaths = this.dataService.statesDeaths.data.BB.history[this.selectedWeek].deaths;
        this.data[0].recovered = this.dataService.statesRecovered.data.BB.history[this.selectedWeek].recovered; 
        break; 
      } 
      case "MV": { 
        this.data[0].cases = this.dataService.statesCases.data.MV.history[this.selectedWeek].cases;
        this.data[0].deaths = this.dataService.statesDeaths.data.MV.history[this.selectedWeek].deaths;
        this.data[0].recovered = this.dataService.statesRecovered.data.MV.history[this.selectedWeek].recovered; 
        break; 
      } 
      case "SN": { 
        this.data[0].cases = this.dataService.statesCases.data.SN.history[this.selectedWeek].cases;
        this.data[0].deaths = this.dataService.statesDeaths.data.SN.history[this.selectedWeek].deaths;
        this.data[0].recovered = this.dataService.statesRecovered.data.SN.history[this.selectedWeek].recovered; 
        break; 
      }
      case "ST": { 
        this.data[0].cases = this.dataService.statesCases.data.ST.history[this.selectedWeek].cases;
        this.data[0].deaths = this.dataService.statesDeaths.data.ST.history[this.selectedWeek].deaths;
        this.data[0].recovered = this.dataService.statesRecovered.data.ST.history[this.selectedWeek].recovered; 
        break; 
      } 
      case "TH": { 
        this.data[0].cases = this.dataService.statesCases.data.TH.history[this.selectedWeek].cases;
        this.data[0].deaths = this.dataService.statesDeaths.data.TH.history[this.selectedWeek].deaths;
        this.data[0].recovered = this.dataService.statesRecovered.data.TH.history[this.selectedWeek].recovered; 
        break; 
      }
      case "DE": { 
        this.data[0].cases = this.dataService.germanyCases.history[this.selectedWeek].cases;
        this.data[0].deaths = this.dataService.germanyDeaths.history[this.selectedWeek].deaths;
        this.data[0].recovered = this.dataService.germanyRecovered.history[this.selectedWeek].recovered;  
        break; 
      } 
      default: { 
        this.data[0].cases = this.dataService.germanyCases.history[this.selectedWeek].cases;
        this.data[0].deaths = this.dataService.germanyDeaths.history[this.selectedWeek].deaths;
        this.data[0].recovered = this.dataService.germanyRecovered.history[this.selectedWeek].recovered; 
        break; 
      } 
    }
  }

  ngOnInit() {
    this.dataService.getData();
  }

  ngOnDestroy() {
    if(this.serviceSubscription !== undefined) {
      this.serviceSubscription.unsubscribe();
    }    
  }
}

