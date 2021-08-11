
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, Subscription } from 'rxjs';

export interface Data {
  statewise: any[];
  region?: string;
  cases?: number;
  deaths?: number;
  recovered?: number;
}
export interface GermanyData {
  data: {
    cases?: number
    deaths?: number
    recovered?: number
  }[]
}

export interface StatesData {
  data: {
    SH: {
      name: string,
      history: {
        cases?: number
        deaths?: number
        recovered?: number
      }[]
    },
    HH: {
      name: string,
      history: {
        cases?: number
        deaths?: number
        recovered?: number
      }[]
    },
    NI: {
      name: string,
      history: {
        cases?: number
        deaths?: number
        recovered?: number
      }[]
    },
    HB: {
      name: string,
      history: {
        cases?: number
        deaths?: number
        recovered?: number
      }[]
    },
    NW: {
      name: string,
      history: {
        cases?: number
        deaths?: number
        recovered?: number
      }[]
    },
    HE: {
      name: string,
      history: {
        cases?: number
        deaths?: number
        recovered?: number
      }[]
    },
    RP: {
      name: string,
      history: {
        cases?: number
        deaths?: number
        recovered?: number
      }[]
    },
    BW: {
      name: string,
      history: {
        cases?: number
        deaths?: number
        recovered?: number
      }[]
    },
    BY: {
      name: string,
      history: {
        cases?: number
        deaths?: number
        recovered?: number
      }[]
    },
    SL: {
      name: string,
      history: {
        cases?: number
        deaths?: number
        recovered?: number
      }[]
    },
    BE: {
      name: string,
      history: {
        cases?: number
        deaths?: number
        recovered?: number
      }[]
    },
    BB: {
      name: string,
      history: {
        cases?: number
        deaths?: number
        recovered?: number
      }[]
    },
    MV: {
      name: string,
      history: {
        cases?: number
        deaths?: number
        recovered?: number
      }[]
    },
    SN: {
      name: string,
      history: {
        cases?: number
        deaths?: number
        recovered?: number
      }[]
    },
    ST: {
      name: string,
      history: {
        cases?: number
        deaths?: number
        recovered?: number
      }[]
    },
    TH: {
      name: string,
      data: {
        cases?: number
        deaths?: number
        recovered?: number
      }[]
    }
  }
}
@Injectable({
  providedIn: 'root'
})
export class DataService {
  constructor(private http: HttpClient) { }
  private serviceSubscription: Subscription | undefined;
  getGermanyCases() {
    return this.http.get<GermanyData>("https://api.corona-zahlen.org/germany/history/cases/28", {observe: "body", responseType: "json"});
  }

  getGermanyDeaths() {
    return this.http.get<GermanyData>("https://api.corona-zahlen.org/germany/history/deaths/28", {observe: "body", responseType: "json"});
  }

  getGermanyRecovered() {
    return this.http.get<GermanyData>("https://api.corona-zahlen.org/germany/history/recovered/28", {observe: "body", responseType: "json"});
  }

  getStatesCases() {
    return this.http.get<StatesData>("https://api.corona-zahlen.org/states/history/cases/28", {observe: "body", responseType: "json"});
  }

  getStatesDeaths() {
    return this.http.get<StatesData>("https://api.corona-zahlen.org/states/history/deaths/28", {observe: "body", responseType: "json"});
  }

  getStatesRecovered() {
    return this.http.get<StatesData>("https://api.corona-zahlen.org/states/history/recovered/28", {observe: "body", responseType: "json"});
  }

  ngOnInit() {
    
  }
  
}
