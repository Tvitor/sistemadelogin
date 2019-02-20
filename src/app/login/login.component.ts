import { Component, OnInit } from '@angular/core';
import { AuthService } from './auth.service';
import { Usuario } from './usuario';

@Component({
  selector: 'app-login',
  template: `
 
  <div class="row">
  <div class="input-field col s6">
    <input [(ngModel)]="usuario.login" id="login" type="text" placeholder="login"class="validate">
    <label class="active" for="login"></label>
  </div>
</div>

<div class="row">
<div class="input-field col s6">
  <input [(ngModel)]="usuario.senha" id="senha" type="password" placeholder=Senha class="validate">
  <label class="active" for="senha"></label>
</div>
</div>

<button class="btn waves-effect waves-light" type="submit" name="action" (click)="fazerLogin()">
<i class="material-icons right">Entrar</i>
</button>
  
  
  `
})
export class LoginComponent implements OnInit {
    private usuario: Usuario = new Usuario();
    constructor(private authService: AuthService) { }

  ngOnInit() {
  }
fazerLogin() {
  this.authService.fazerLogin(this.usuario);
          
}
}
