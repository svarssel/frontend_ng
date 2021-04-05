import { NgModule } from '@angular/core';

import { SessionstorageService } from './sessionstorage.service';

import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import {MatDialogModule} from '@angular/material/dialog';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { CompanyAddComponent } from './company-add/company-add.component';
import { CompanyEditComponent } from './company-edit/company-edit.component';
import { IConfig, NgxMaskModule } from 'ngx-mask'
import { MatSliderModule } from '@angular/material/slider';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import {NgbPaginationModule, NgbAlertModule} from '@ng-bootstrap/ng-bootstrap';

const maskConfig: Partial<IConfig> = {
  validation: false,

};

@NgModule({
  declarations: [
    AppComponent,
    CompanyAddComponent,
    CompanyEditComponent,
    HomeComponent,
  
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    NgxMaskModule.forRoot(),
    MatSliderModule,
    ReactiveFormsModule,
    MatDialogModule,
    NgbModule,
    NgbPaginationModule,
    NgbAlertModule
    
    
  ],
  providers: [ SessionstorageService ],
  bootstrap: [AppComponent]
})
export class AppModule { }
