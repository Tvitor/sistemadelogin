import { Component, OnInit } from '@angular/core';
import { AuthService } from './auth.service';
import { Usuario } from './usuario';
import { Router } from '@angular/router';
import { CheckboxControlValueAccessor } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: 'login.component.html'
})
export class LoginComponent implements OnInit {
    private usuario: Usuario = new Usuario();
    constructor(private authService: AuthService,
      private router: Router) { }

  ngOnInit() {
    this.checkUser();
  }
  fazerLogin() {
      this.authService.fazerLogin(this.usuario);
  }

  checkUser() {
    var userAlreadyLogged = localStorage.getItem('usuarioAutenticado');

    if(userAlreadyLogged == 'usuarioOk'){
      this.router.navigate(['/cadastro']);
    }
  }
}
