
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
      projectImg: './assets/img/projects-cards/ramen-shifu-atocha.jpg',
      tech:[
        {
          id: uuidv4(),
          techName: 'javascript',
          description: 'Javascript'
        },
        {
          id: uuidv4(),
          techName: 'typescript',
          description: 'Jypescript'
        },
        {
          id: uuidv4(),
          techName: 'mongo-DB',
          description: 'Api rest con mongo DB'
        },
        {
          id: uuidv4(),
          techName: 'angular',
          description: 'Angular '
        },
        { 
          id: uuidv4(),
          techName: 'sass',
          description: 'Sass '
        },
        { 
          id: uuidv4(),
          techName: 'bem',
          description: 'Nomenclatura BEM'
        },
        { 
          id: uuidv4(),
          techName: 'github',
          description: 'Control de versiones con Git'
        },
      ]
    },
    { id: uuidv4(),
      name: 'My Gallery',
      description: "Galería de arte con las obras más conocidas del impresionismo",
      projectImg: './assets/img/projects-cards/le-moulin-de-la-galette.jpg',
      tech:[
        {
          id: uuidv4(),
          techName: 'javascript',
          description: 'Javascript'
        },
        {
          id: uuidv4(),
          techName: 'typescript',
          description: 'Typescript'
        },
        {
          id: uuidv4(),
          techName: 'mongo-DB',
          description: 'Api rest con mongo DB'
        },
        {
          id: uuidv4(),
          techName: 'angular',
          description: 'Angular '
        },
        { 
          id: uuidv4(),
          techName: 'sass',
          description: 'Sass '
        },
        { 
          id: uuidv4(),
          techName: 'bem',
          description: 'Nomenclatura BEM'
        },
        { 
          id: uuidv4(),
          techName: 'github',
          description: 'Control de versiones con git'
        },
      ]
    },
    { id: uuidv4(),
      name: 'Sobre este portfolio',
      description: "Más información sobre el proceso de creación de este portfolio",
      projectImg: './assets/img/projects-cards/portfolio-design.jpg',
      tech:[
        {
          id: uuidv4(),
          techName: 'javascript',
          description: 'Javascript'
        },
        {
          id: uuidv4(),
          techName: 'typescript',
          description: 'Typescript'
        },
        {
          id: uuidv4(),
          techName: 'mongo-DB',
          description: 'Api rest con mongo DB'
        },
        {
          id: uuidv4(),
          techName: 'angular',
          description: 'Angular '
        },
        { 
          id: uuidv4(),
          techName: 'sass',
          description: 'Sass '
        },
        { 
          id: uuidv4(),
          techName: 'bem',
          description: 'Nomenclatura BEM'
        },
        { 
          id: uuidv4(),
          techName: 'github',
          description: 'Control de versiones con git'
        },
      ]
    },
    { id: uuidv4(),
      name: 'Próximo proyecto',
      description: "Aquí podrás encontrar mi próximo proyecto cuando esté terminado, mientras tanto puedes ver los demás",
      projectImg: './assets/img/projects-cards/notebook.jpg',
      tech:[
        {
          id: uuidv4(),
          techName: 'javascript',
          description: 'Javascript'
        },
        {
          id: uuidv4(),
          techName: 'typescript',
          description: 'Typescript'
        },
        {
          id: uuidv4(),
          techName: 'mongo-DB',
          description: 'Api rest con mongo DB'
        },
        {
          id: uuidv4(),
          techName: 'angular',
          description: 'Angular '
        },
        { 
          id: uuidv4(),
          techName: 'sass',
          description: 'Sass '
        },
        { 
          id: uuidv4(),
          techName: 'bem',
          description: 'Nomenclatura BEM'
        },
        { 
          id: uuidv4(),
          techName: 'github',
          description: 'Control de versiones con git'
        },
      ]
    },
  ]


  constructor() {
    

  }



  
}
