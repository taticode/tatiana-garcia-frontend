import { Component,OnInit } from '@angular/core';
import { BbddService } from 'src/app/bbdd.service';

@Component({
  selector: 'app-tabs',
  templateUrl: './tabs.component.html',
  styleUrls: ['./tabs.component.scss']
})


export class TabsComponent implements OnInit {


  constructor(
    public bbddService : BbddService
  ) { }

  public dataTabs = this.bbddService.infoTabs
  public seleccionado: number = 0


  setSeleccionado(posicion: number) {
    this.seleccionado = posicion
  }
  ngOnInit(): void {
  }

}