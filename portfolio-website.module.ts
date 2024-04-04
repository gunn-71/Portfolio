import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule,Routes } from '@angular/router';
import { NavbarComponent } from '../navbar/navbar.component';
import { FooterComponent } from '../footer/footer.component';
import { HomeComponent } from '../home/home.component';
import { AboutComponent } from '../about/about.component';
import { ContactComponent } from '../contact/contact.component';
import { KnowComponent } from '../know/know.component';
import { SubmitComponent } from '../submit/submit.component';


const routes : Routes= [
  {path : 'navbar' , component:NavbarComponent},
  {path : 'footer',component:FooterComponent},
  {path : 'home' ,component:HomeComponent},
  {path : 'about',component:AboutComponent,title:'About'},
  {path : 'contact',component:ContactComponent,title:'Contact'},
  {path:'know',component:KnowComponent},
  {path:'submit',component:SubmitComponent,title:'Submit'}
]
@NgModule({
  declarations: [],
  imports: [
    RouterModule.forChild(routes)
  ],
  exports : [RouterModule]
})
export class PortfolioWebsiteModule { }
