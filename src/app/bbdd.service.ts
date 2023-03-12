
import { Injectable, Input, Output, EventEmitter } from '@angular/core';
import { v4 as uuidv4 } from 'uuid';
@Injectable({
  providedIn: 'root'
})
export class BbddService {

  @Input() activePathHeader: any
  @Output() disparadorRuta: EventEmitter<any> = new EventEmitter<any>()

  public lightRoute : string = './assets/icons/light-icons/'
  public darkRoute : string = './assets/icons/dark-icons/'
  public activePath: any = ''
  public themeBody : any = document.body.classList


  public projects: any[] = [
    { id: uuidv4(),
      name: 'The Hashi',
      description: 'Proyecto de una versión de The Fork pero más “japo”, mostrando sólo restaurantes asiáticos',
      projectImg: './assets/img/projects-cards/kiboka.png',
      tech:[
        {
          id: uuidv4(),
          techName: 'javascript',
          description: 'tecnología utilizada: javascript'
        },
        {
          id: uuidv4(),
          techName: 'typescript',
          description: 'tecnología utilizada: typescript'
        },
        {
          id: uuidv4(),
          techName: 'mongo-DB',
          description: 'tecnología utilizada: api rest con mongo DB'
        },
        {
          id: uuidv4(),
          techName: 'angular',
          description: 'tecnología utilizada: angular '
        },
        { 
          id: uuidv4(),
          techName: 'sass',
          description: 'tecnología utilizada: sass '
        },
        { 
          id: uuidv4(),
          techName: 'bem',
          description: 'estilos con nomenclatura bem'
        },
        { 
          id: uuidv4(),
          techName: 'github',
          description: 'control de versiones con github'
        },
      ]
    },
    { id: uuidv4(),
      name: 'My Gallery',
      description: "Galería de arte con las obras más conocidas del impresionismo",
      projectImg: './assets/img/projects-cards/le-moulin-de-la-galette.png',
      tech:[
        {
          id: uuidv4(),
          techName: 'javascript',
          description: 'tecnología utilizada: javascript'
        },
        {
          id: uuidv4(),
          techName: 'typescript',
          description: 'tecnología utilizada: typescript'
        },
        {
          id: uuidv4(),
          techName: 'mongo-DB',
          description: 'tecnología utilizada: api rest con mongo DB'
        },
        {
          id: uuidv4(),
          techName: 'angular',
          description: 'tecnología utilizada: angular '
        },
        { 
          id: uuidv4(),
          techName: 'sass',
          description: 'tecnología utilizada: sass '
        },
        { 
          id: uuidv4(),
          techName: 'bem',
          description: 'estilos con nomenclatura bem'
        },
        { 
          id: uuidv4(),
          techName: 'github',
          description: 'control de versiones con github'
        },
      ]
    },
  ]


  constructor() {
    

  }



  
}
