import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-cadastro',
  template: `
      <table name="gravaDados" ng-app="myApp" ng-controller="testectrl">
      <tbody>  
        <tr> 
          <th>Nome</th>
          <th>bairro</th>
          <th>cidade</th>
          <th>estado</th>
        </tr>
        <tr>
          <td><input type="text" [(ngModel)] ="grava.nome"></td>     
          <td><input type="text" [(ngModel)] ="grava.bairro"></td>
          <td><input type="text" [(ngModel)] ="grava.cidade"></td>
          <td><input type="text" [(ngModel)] ="grava.estado"></td>
      </tr>
    </table>
        <button type="button" (click)="add()">incluir</button>

      <script>
            angular: any;
      myApp = angular.module('myApp',[])
      myApp.controller("testectrl", function($scope) {
        $scope.gravar = [];
        $scope.adicionarDados = function(dados){
          $scope.gravar.push(dados)
        }  
      })
      </script>
      `
})
export class CadastroComponent implements OnInit {
  

  constructor() {}

  ngOnInit() {}

   
}
