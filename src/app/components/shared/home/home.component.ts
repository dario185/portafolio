import { Component, OnInit } from '@angular/core';
import { SkillsService, Skills } from '../../../services/skills.service';
import { ProjectsService, Projects } from '../../../services/projects.service.service';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  propiedades:any = {
    show:true
  }
  pf :string;
  menuChange:string = "menutabla";
  aprojects:Projects[]=[];
  bprojects:Projects[]=[];
  askills:Skills[] = [];

  constructor( private skills:SkillsService, private projects:ProjectsService) {
    console.log("contructor");

   }

  ngOnInit(): void {
    this.askills = this.skills.getskills();
    this.pf = this.skills.getprofilepicture();
    this.aprojects = this.projects.getProjects();
    this.bprojects = this.projects.getProjects2();
    console.log(this.aprojects);
    console.log(this.bprojects);
    console.log(this.askills);
    console.log(this.pf);
}
ToSkills(){
  document.getElementById("skills").scrollIntoView({behavior:"smooth"});
}
ToPortafolio(){
  document.getElementById("portafolio").scrollIntoView({behavior:"smooth"});
}
ToContact(){
  document.getElementById("contacto").scrollIntoView({behavior:"smooth"});
}
}
