import { Injectable } from '@angular/core';
import { Usuario } from './usuario';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private usuarioAutenticado: boolean = false;

  constructor(private router: Router) { }


  fazerLogin(usuario: Usuario) {
    
    if (usuario.login === 'teste' && usuario.senha === 'teste123') {
      this.usuarioAutenticado = true;
      this.router.navigate(['/']);
    } 
    else {
      this.usuarioAutenticado = false;
      
    }
  }
}

