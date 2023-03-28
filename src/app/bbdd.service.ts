
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
    }
  ]


  public infoTabs: any[] = [
    { id: uuidv4(),
      textItem: 'Curso de Frameworks con Angular, React js, Node js y Mongo DB.',
      escuela: 'Trazos',
      horas: '150 horas',
      skill:[
        {
          id: uuidv4(),
          img: './assets/logos/angular.svg',
          alt: 'Node js'
        },
        {
          id: uuidv4(),
          img: './assets/logos/react.svg',
          alt: 'React'
        },
        {
          id: uuidv4(),
          img: './assets/logos/nodejs.svg',
          alt: 'Angular'
        },
        {
          id: uuidv4(),
          img: './assets/logos/mongodb.svg',
          alt: 'Mongo db'
        },
        {
          id: uuidv4(),
          img: './assets/logos/typescript.svg',
          alt: 'Typescript'
        },
        {
          id: uuidv4(),
          img: './assets/logos/sass.svg',
          alt: 'Sass'
        },
        {
          id: uuidv4(),
          img: './assets/logos/bem.svg',
          alt: 'Nomenclatura BEM'
        },
      ],
      knowledge: 'En este curso profundicé más en la creación de aplicaciones con Angular, empecé a conocer React y cree mis propias bases de datos con Mongo DB, todo esto trabajando con node js para la instalación de paquetes.',
      finalizado: 'Diciembre de 2022.',
      link: 'https://trazos.net/online/formacion-online/desarrollo-web/curso-online-de-frameworks-con-reactjs-angular-nodejs-y-mongodb/',
      thumbnail: './assets/img/education/trazos.png',
      thumbnailAlt: 'Curso de Frameworks con Angular, React js, Node js y Mongo DB online en Escuela Trazos'},

    { id: uuidv4(),
      textItem: 'Bootcamp Online de UX/UI',
      escuela: 'Trazos',
      horas: '80 horas',
      skill:[
        {
          id: uuidv4(),
          img: './assets/logos/miro.svg',
          alt: 'MIro'
        },
        {
          id: uuidv4(),
          img: './assets/logos/figma.svg',
          alt: 'Figma'
        },
        {
          id: uuidv4(),
          img: './assets/logos/google-forms.svg',
          alt: 'Google forms'
        },
      ],
      knowledge: '',
      finalizado: 'Febrero de 2021.',
      link: 'https://trazos.net/online/formacion-online/productos-digitales/bootcamp-online-de-ux-ui/',
      thumbnail: './assets/img/education/bootcamp-ux-ui-trazos.jpg',
      thumbnailAlt: 'Bootcamp ux ui online en Escuela Trazos' },

    { id: uuidv4(),
      textItem: 'Curso profesional de Javascript',
      escuela: 'Aepi',
      horas: '100 horas',
      skill:[
        {
          id: uuidv4(),
          img: './assets/logos/javascript.svg'
        },

      ],
      knowledge: '',
      finalizado: 'Noviembre de 2020.',
      link: 'https://asociacionaepi.es/curso-de-javascript-ajax-json-jquery/',
      thumbnail: './assets/img/education/javascript-profesional.png',
      thumbnailAlt: 'holi' },

    { id: uuidv4(),
      textItem: 'Curso de Angular 7',
      escuela: 'Fictizia',
      horas: '50 horas',
      skill:[
        {
          id: uuidv4(),
          img: './assets/logos/nodejs.svg'
        },
        {
          id: uuidv4(),
          img: './assets/logos/angular.svg'
        }
      ],
      knowledge: '',
      finalizado: 'Diciembre de 2018.',
      link: '',
      thumbnail: './assets/img/education/angular.png',
      thumbnailAlt: 'holi' },

    { id: uuidv4(),
      textItem: 'Máster en diseño de interfaz y Frontend con HTML5, CSS3 y JQUERY',
      escuela: 'Fictizia',
      horas: '150 horas',
      skill:[
        {
          id: uuidv4(),
          img: './assets/logos/html.svg'
        },
        {
          id: uuidv4(),
          img: './assets/logos/css.svg'
        },
        {
          id: uuidv4(),
          img: './assets/logos/jquery.svg'
        }
      ],
      knowledge: '',
      finalizado: 'Junio de 2018.',
      link: '',
      thumbnail: './assets/img/education/html-css.png',
      thumbnailAlt: 'holi' },

    { id: uuidv4(),
      textItem: 'Curso profesional de Wordpress',
      escuela: 'Cursos Wordpress Madrid',
      horas: '24 horas',
      skill:[
        {
          id: uuidv4(),
          img: './assets/logos/wordpress.svg'
        }
      ],
      knowledge: '',
      finalizado: 'Mayo de 2016.',
      link: 'https://www.cursoswordpressmadrid.com/curso-wordpress-profesional-en-madrid/',
      thumbnail: './assets/img/education/wordpress.png',
      thumbnailAlt: 'holi' },
  
  ]


  constructor() {
    

  }



  
}
