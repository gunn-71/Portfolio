import { Component } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { NavbarComponent } from '../navbar/navbar.component';
import { FooterComponent } from '../footer/footer.component';
import { CommonModule } from '@angular/common';
import { Router, RouterLink } from '@angular/router';

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [NavbarComponent,FooterComponent,CommonModule,RouterLink],
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.scss'
})
export class ContactComponent {
  constructor(public router : Router){

  }
  onSubmit(){
    this.router.navigate(['./portfolio-website/submit']);
  }
 

  
  }
  
  
 


