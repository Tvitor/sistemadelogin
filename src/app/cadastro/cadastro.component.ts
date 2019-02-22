import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs'

@Component({
  selector: 'app-cadastro',
  templateUrl: 'cadastro.component.html'
})
export class CadastroComponent implements OnInit {
  public cadastros: any[];
  model = new Cadastro();
  constructor(private router: Router) { }

  ngOnInit() {
    this.checkLoggedUser();
  }

  onSubmit(){
    let novoCadastro = new Cadastro();

    novoCadastro.nome = this.model.nome;
    novoCadastro.cidade = this.model.cidade;
    novoCadastro.bairro = this.model.bairro;
    novoCadastro.estado = this.model.estado;

    this.cadastros.push(novoCadastro);
  }

  checkLoggedUser() {
    var loggedUser = localStorage.getItem('usuarioAutenticado');
    if(loggedUser != 'usuarioOk'){
      this.router.navigate(['/login']);
    }

    this.populateArray();
  }

  populateArray(){
    let initCadastro = new Cadastro();
    initCadastro.nome = "João Roberto da Silva";
    initCadastro.bairro = "Barra";
    initCadastro.cidade = "Rio de Janeiro";
    initCadastro.estado = "RJ";
    
    this.cadastros = new Array<Cadastro>();
    this.cadastros.push(initCadastro);
  }

  
}

export class Cadastro {
  nome: string;
  bairro: string;
  cidade: string;
  estado: string;
}

