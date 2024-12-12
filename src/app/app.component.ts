import { BreakpointObserver } from '@angular/cdk/layout';
import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'ProjectSchool';


  public isSmallScreen = false;

  constructor(private breakpointObserver: BreakpointObserver){}

  ngAfterContentInit():void{
    this.breakpointObserver.observe(['(max-width: 800px)'])
    .subscribe((res) => this.isSmallScreen = res.matches);

    // UTILIZANDO O OPERADOR PLUCK
    // this.breakpointObserver.observe(['(max-width: 800px)'])
    // .pipe(pluck('matches'))
    // .subscribe((res: boolean) => this.isSmallScreen = res)
  }

  get sidenavMode(){
    return this.isSmallScreen ? 'over' : 'side';
  }

}
