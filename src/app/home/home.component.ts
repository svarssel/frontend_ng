import { SessionstorageService } from './../sessionstorage.service';
import { Component, OnInit, Injectable } from '@angular/core';
import { FormGroup, FormBuilder, FormControl} from '@angular/forms';


@Component({
  selector: 'app-home',
  templateUrl: 'home.component.html'
  
})
export class HomeComponent implements OnInit {
  
 form: FormGroup;
 empresa: any[];



 

  constructor(public storage: SessionstorageService) { }

  ngOnInit(): void {
   
  }

  listar(){
     let data = sessionStorage.getItem(JSON.parse("LIST_ORDER", this.form.value));
     console.log(data);
    

  }
}
