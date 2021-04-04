import { SessionstorageService } from './company-add/sessionstorage.service';

import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { HomeComponent } from './home/home.component';
import { CompanyAddComponent } from './company-add/company-add.component';
import { CompanyEditComponent } from './company-edit/company-edit.component';
import { IConfig, NgxMaskModule } from 'ngx-mask'

const maskConfig: Partial<IConfig> = {
  validation: false,

};

@NgModule({
  declarations: [
    AppComponent,
    CompanyAddComponent,
    CompanyEditComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    NgxMaskModule.forRoot()
    
  ],
  providers: [ SessionstorageService ],
  bootstrap: [AppComponent]
})
export class AppModule { }
