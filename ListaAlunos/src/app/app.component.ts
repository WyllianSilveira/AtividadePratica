import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'AtividadePratica';

  //ARRAY ELEMENTOS CABEÇALHO DA LISTA TABELA
  cabecalho = ["Nome", "RU","Curso","Data nascimento"]

  //ARRAY DE OBJETOS PARA COMPOR A LISTA DE ALUNOS
  alunos = [
    {
      Nome : "Mario",
      RU : "2684190",
      Curso : "Administração",
      Data_nascimento : "22/09/2001"
    },

    {
      Nome : "Wyllian",
      RU : "3431050",
      Curso : "Análise e Desenvolvimento de Sistemas",
      Data_nascimento : "15/01/1994"
    },

    {
      Nome : "Joana",
      RU : "1982349",
      Curso : "Ciências Contábeis",
      Data_nascimento : "12/01/1999"
    },

    {
      Nome : "Rodrigo",
      RU : "4352670",
      Curso : "Engenharia de Software",
      Data_nascimento : "18/02/2003"
    },

    {
      Nome : "Lucas",
      RU : "1345789",
      Curso : "Matemática",
      Data_nascimento : "19/04/1996"
    }
  ]

  
}
