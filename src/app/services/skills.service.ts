import { Injectable } from '@angular/core';


export interface Skills{
  id: number,
  img: string
}


@Injectable({
  providedIn: 'root'
})
export class SkillsService {

  pf = "assets/img/logo.png";

  private skills: Skills[ ] = [
    {
      id:0,
      img: "assets/img/HTML.png"
    },
    {
      id:1,
      img:"assets/img/CSS3.png"
    },
    {
      id:2,
      img: "assets/img/php.png"
      },
    {
      id:3,
    img:"assets/img/JS.png"
    },
    {
      id:4,
      img: "assets/img/Jquery.png"
    },
    {
          id:5,
          img:"assets/img/ts.png"
        },
    {
      id:6,
      img: "assets/img/SQL.png"
      },
      {
            id:7,
            img:"assets/img/Mysql.png"
      },
      {
        id:8,
        img: "assets/img/Ajs.png"
      },
      {
        id:9,
        img:"assets/img/B.png"
      },
      {
        id:10,
        img: "assets/img/JSON.png"
      },
      {
       id:11,
       img:"assets/img/visual.png"
      }
  ];
  constructor() {
    console.log("serviccio skill");
  }

  getprofilepicture(){
    return this.pf;
  }
  getskills(){
    return this.skills;
  }
}
