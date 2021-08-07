/*
 * COPYRIGHT:  EC
 * PROJECT:    GALILEO
 * FILE:       data.service.ts
 * HISTORY:    The change record of this file is available at the end of the file
 * -----------------------------------------------------------------------------
 * EC Proprietary Information. Unauthorised distribution, dissemination or disclosure not allowed.
 * -----------------------------------------------------------------------------
 */

import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Subscription } from 'rxjs';
export interface Data {
  region?: string;
  cases?: number;
  deaths?: number;
  recovered?: number;
}
export interface GermanyData {
  history: {
    cases?: number
    deaths?: number
    recovered?: number
  }[]
}

export interface StatesData {
  data: {
    SH: {
      history: {
        cases?: number
        deaths?: number
        recovered?: number
      }[]
    },
    HH: {
      history: {
        cases?: number
        deaths?: number
        recovered?: number
      }[]
    },
    NI: {
      history: {
        cases?: number
        deaths?: number
        recovered?: number
      }[]
    },
    HB: {
      history: {
        cases?: number
        deaths?: number
        recovered?: number
      }[]
    },
    NW: {
      history: {
        cases?: number
        deaths?: number
        recovered?: number
      }[]
    },
    HE: {
      history: {
        cases?: number
        deaths?: number
        recovered?: number
      }[]
    },
    RP: {
      history: {
        cases?: number
        deaths?: number
        recovered?: number
      }[]
    },
    BW: {
      history: {
        cases?: number
        deaths?: number
        recovered?: number
      }[]
    },
    BY: {
      history: {
        cases?: number
        deaths?: number
        recovered?: number
      }[]
    },
    SL: {
      history: {
        cases?: number
        deaths?: number
        recovered?: number
      }[]
    },
    BE: {
      history: {
        cases?: number
        deaths?: number
        recovered?: number
      }[]
    },
    BB: {
      history: {
        cases?: number
        deaths?: number
        recovered?: number
      }[]
    },
    MV: {
      history: {
        cases?: number
        deaths?: number
        recovered?: number
      }[]
    },
    SN: {
      history: {
        cases?: number
        deaths?: number
        recovered?: number
      }[]
    },
    ST: {
      history: {
        cases?: number
        deaths?: number
        recovered?: number
      }[]
    },
    TH: {
      history: {
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
  public statesCases!: StatesData;
  public statesDeaths!: StatesData;
  public statesRecovered!: StatesData;
  public germanyCases!: GermanyData;
  public germanyDeaths!: GermanyData;
  public germanyRecovered!: GermanyData;

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
  
  getData() {
    this.serviceSubscription = this.getStatesCases()
    .subscribe((data: StatesData) =>  this.statesCases = data
    );

    this.serviceSubscription = this.getStatesDeaths()
    .subscribe((data: StatesData) =>  this.statesDeaths = data
    );

    this.serviceSubscription = this.getStatesRecovered()
    .subscribe((data: StatesData) =>  this.statesRecovered = data
    );

    this.serviceSubscription = this.getGermanyCases()
    .subscribe((data: GermanyData) =>  this.germanyCases = data
    );

    this.serviceSubscription = this.getGermanyDeaths()
    .subscribe((data: GermanyData) =>  this.germanyDeaths = data
    );

    this.serviceSubscription = this.getGermanyRecovered()
    .subscribe((data: GermanyData) =>  this.germanyRecovered = data
    );
  }
}
