import { Component, ViewChild } from '@angular/core';
import { BreakpointObserver, BreakpointState } from '@angular/cdk/layout';
import { MatSidenav } from '@angular/material/sidenav';
import { register } from 'swiper/element/bundle'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'kns-wo-standalone';
  @ViewChild('sidenav') sidenav!: MatSidenav;
  isMobileScreen: boolean = false;

  constructor(private breakpointObserver: BreakpointObserver) {
    register()
  }

  ngOnInit() {
    this.breakpointObserver
      .observe(['(max-width: 600px)'])
      .subscribe((state: BreakpointState) => {
        this.isMobileScreen = state.matches;
      });
  }
}
