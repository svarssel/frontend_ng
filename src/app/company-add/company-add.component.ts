import { SessionstorageService } from './../sessionstorage.service';
import { Component, OnInit, Injectable } from '@angular/core';
import { FormGroup, FormBuilder, FormControl, Validators} from '@angular/forms';



@Component({
  selector: 'app-company-add',
  templateUrl: 'company-add.component.html'
    
})


export class CompanyAddComponent implements OnInit {
  public form: FormGroup;

  


  constructor(public storage: SessionstorageService, public formBuilder: FormBuilder) {  
    
  }

  ngOnInit(): void {
     this.configuraFormulario();
  }

  //passando a referencia do método valida, por isso que é fechado com chaves.

  configuraFormulario() {
    this.form = this.formBuilder.group({
      resp: [null, this.validaObrigatoriedade],
      cpf: [null, this.validaObrigatoriedade],
      data: [null, this.validaObrigatoriedade],
      nomeF: [null, this.validaObrigatoriedade],
      natJur: [null, this.validaObrigatoriedade],
      cep: [null, this.validaObrigatoriedade],
      endereco: [null, this.validaObrigatoriedade],
      bairro: [null, this.validaObrigatoriedade],
      complemento: [null, this.validaObrigatoriedade],
      cidade: [null, this.validaObrigatoriedade],
      estado: [null, this.validaObrigatoriedade]
      


    });
  }

  validaObrigatoriedade(input: FormControl){
    return(input.value ? null : { orbigatoriedade: true })
  }

  criar(){
    this.storage.saveListDB(this.form.value);
    console.log(this.form.value);
    this.form.reset(); 
    let data = this.storage.getListDB();
    console.log(data);
  }

  listar(){
  let data = this.storage.getListDB();
  console.log(data.length.toString.name);
   
    

  }

 

 
  

    
  }

  




