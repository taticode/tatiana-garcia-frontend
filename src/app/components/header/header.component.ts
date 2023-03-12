import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { BbddService } from 'src/app/bbdd.service';


@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],

})
export class HeaderComponent implements OnInit {
  public lightRoute: string = ''
  public darkRoute: string = '' 
  public activePath: string = './assets/icons/dark-icons/'
  public themeBody : any  

  @Output() propagar = new EventEmitter<string>()
 

  constructor(
    private bbddService : BbddService
    
  ){

  }
  btnSwitch (): void{
    document.querySelector('.switch-theme')?.classList.toggle('active')
  }
  
  toggleRoute(): string{
    this.themeBody ? this.activePath = this.lightRoute : this.activePath = this.darkRoute
    return this.activePath
  }
  emitActivePath():void {

    this.bbddService.disparadorRuta.emit(this.activePath)
  }
  fillActivePathOnService():void {

  }

  switchTheme(): void{
    this.themeBody = document.body.classList.toggle('dark')
    this.btnSwitch()
    this.toggleRoute()
    this.emitActivePath()
    this.fillActivePathOnService()
  }

  ngOnInit(): void {

    this.lightRoute = this.bbddService.lightRoute
    this.darkRoute = this.bbddService.darkRoute
    this.themeBody = this.bbddService.themeBody
  }

}
