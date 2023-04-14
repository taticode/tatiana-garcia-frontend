import { Component, OnInit } from '@angular/core';
import { BbddService } from 'src/app/bbdd.service';

@Component({
  selector: 'app-acordeon',
  templateUrl: './acordeon.component.html',
  styleUrls: ['./acordeon.component.scss']
})
export class AcordeonComponent implements OnInit {
  public activePath: string = './assets/icons/dark-icons'
  public experience: any [] = []

  constructor( private bbddService : BbddService) { }

  ngOnInit(): void {

    this.experience = this.bbddService.experience;

    this.bbddService.disparadorRuta.subscribe( (ruta: string) => {
      this.activePath = ruta;
    })


  }

}
