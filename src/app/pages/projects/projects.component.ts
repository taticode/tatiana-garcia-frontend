
import { Component, OnInit, Input} from '@angular/core';
import { BbddService } from 'src/app/bbdd.service';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.scss'],

})
export class ProjectsComponent implements OnInit {

  public lightRoute: string = ''
  public darkRoute: string = ''
  public activePath: string = './assets/icons/dark-icons/'
  public projects: any 



  constructor(
    private bbddService : BbddService
  ){
    
  }
  

  ngOnInit(): void {
    this.lightRoute = this.bbddService.lightRoute
    this.darkRoute = this.bbddService.darkRoute
    this.projects = this.bbddService.projects;

    this.bbddService.disparadorRuta.subscribe( data => {
      this.activePath = data
    })


  }





}
