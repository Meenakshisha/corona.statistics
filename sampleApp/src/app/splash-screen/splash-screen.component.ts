/*
 * COPYRIGHT:  EC
 * PROJECT:    GALILEO
 * FILE:       splash-screen.component.ts
 * HISTORY:    The change record of this file is available at the end of the file
 * -----------------------------------------------------------------------------
 * EC Proprietary Information. Unauthorised distribution, dissemination or disclosure not allowed.
 * -----------------------------------------------------------------------------
 */

import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-splash-screen',
  templateUrl: './splash-screen.component.html',
  styleUrls: ['./splash-screen.component.css']
})
export class SplashScreenComponent implements OnInit {

  windowWidth: string = "";
  showSplash = true;

  ngOnInit(): void {
    setTimeout(() => {
      this.windowWidth = "-" + window.innerWidth + "px";

      setTimeout(() => {
        this.showSplash = !this.showSplash;
      }, 500);
    }, 3000);
  }

}
