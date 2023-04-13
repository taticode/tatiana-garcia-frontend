import { Component, OnInit } from '@angular/core';
import { BbddService } from 'src/app/bbdd.service';

@Component({
  selector: 'app-skills',
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.scss']
})
export class SkillsComponent implements OnInit{

  public activePath: string = './assets/icons/dark-icons/'
  public hardSkills: any[]= []
  public softSkills: any[]= []


  constructor(
    private bbddService: BbddService
  ){

  }


  ngOnInit(): void {
  
    this.hardSkills = this.bbddService.hardSkills
    this.softSkills = this.bbddService.softSkills
    this.bbddService.disparadorRuta.subscribe( data => {
      this.activePath = data
    })
  }

}

