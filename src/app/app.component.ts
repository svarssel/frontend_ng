import { HomeComponent } from './home/home.component';
import { CompanyAddComponent } from './company-add/company-add.component';
import { Component } from '@angular/core';




@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html'
})
export class AppComponent {
  title = 'frontend';

  public companies: any[];

  

  constructor(){
    
  }

  

  
}
