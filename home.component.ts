import { Component, OnInit } from '@angular/core';
import { NavbarComponent } from '../navbar/navbar.component';
import { FooterComponent } from '../footer/footer.component';
import { MatCardModule } from '@angular/material/card';
import { Router } from '@angular/router';
import {BreakpointObserver,Breakpoints} from '@angular/cdk/layout'
import { FormsModule } from '@angular/forms';


@Component({
  selector: 'app-home',
  standalone: true,
  imports: [NavbarComponent,FooterComponent,MatCardModule,FormsModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss',
})
export class HomeComponent{

  isImage = false;
  constructor(private responsive:BreakpointObserver){}
  ngOnInit(){
    this.responsive
    .observe([Breakpoints.HandsetPortrait])
    .subscribe((state: any) => {
      if (state.matches) {
        this.isImage = true;
      } else {
        this.isImage = false;
      }
    });
  }
  
  
  
 

  
}
