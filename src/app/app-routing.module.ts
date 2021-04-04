import { HomeComponent } from './home/home.component';
import { CompanyEditComponent } from './company-edit/company-edit.component';

import { CompanyAddComponent } from './company-add/company-add.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'add', component: CompanyAddComponent },
  { path: 'edit/:id', component: CompanyEditComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
