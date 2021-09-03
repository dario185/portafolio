import { Injectable } from '@angular/core';

export interface Projects{
  id:number,
  url:string,
  titulo:string,
  desc:string
}


@Injectable({
  providedIn: 'root'
})


export class ProjectsService {

  constructor() {
    console.log("projects service");
   }

  private projects:Projects[] = [
   {
     id:0,
     url:"assets/img/juegocaballo.png",
     titulo:"0. Reto del caballo",
     desc:"Lorem Ipsum es simplemente el texto de relleno de las imprentas y archivos de texto."
   },
   {
    id:1,
    url:"assets/img/juegocaballo.png",
    titulo:"Caballos JavaScript",
    desc:"1. Reto del caballo es un juego desarrollado en JavaScript, mediante uso de variables, arreglos, funciones y cambios en el DOM se logro este divertido juego, se logra poner a prueba la capacidad y el manejo de JavaScript con esta applicacion."
  }/*,
  {
    id:4,
    url:"assets/img/juegocaballo.png",
    titulo:"Caballos JavaScript",
    desc:""
  },
  {
    id:5,
    url:"assets/img/juegocaballo.png",
    titulo:"Caballos JavaScript",
    desc:""
  },
  {
    id:6,
    url:"assets/img/juegocaballo.png",
    titulo:"Caballos JavaScript",
    desc:""
  },
  {
    id:7,
    url:"assets/img/juegocaballo.png",
    titulo:"Caballos JavaScript",
    desc:""
  },
  {
    id:8,
    url:"assets/img/juegocaballo.png",
    titulo:"Caballos JavaScript",
    desc:""
  },
  {
    id:9,
    url:"assets/img/juegocaballo.png",
    titulo:"Caballos JavaScript",
    desc:""
  },
  {
    id:10,
    url:"assets/img/juegocaballo.png",
    titulo:"Caballos JavaScript",
    desc:""
  },
  {
    id:11,
    url:"assets/img/juegocaballo.png",
    titulo:"Caballos JavaScript",
    desc:""
  }
  */
  ];

  private projects2:Projects[] = [
    {
      id:0,
      url:"assets/img/juegocaballo.png",
      titulo:"Reto del caballo",
      desc:"2.0 Lorem Ipsum es simplemente el texto de relleno de las imprentas y archivos de texto.Lorem Ipsum es simplemente el texto de relleno de las imprentas y archivos de texto.Lorem Ipsum es simplemente el texto de relleno de las imprentas y archivos de texto."
    },
    {
     id:1,
     url:"assets/img/juegocaballo.png",
     titulo:"Caballos JavaScript",
     desc:"2.1 Rs, arreglos, funciones y cambios en el DOM se logro este divertido juego, se logra poner a prueba la capacidad y el manejo de JavaScript con esta applicacion."
   }
  ];
  getProjects(){
    return this.projects;
  }
  getProjects2(){
    return this.projects2;
  }

}
