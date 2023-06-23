import { __decorate } from "tslib";
import { Injectable, Input, Output, EventEmitter } from "@angular/core";
import { v4 as uuidv4 } from "uuid";
let BbddService = class BbddService {
    constructor() {
        this.disparadorRuta = new EventEmitter();
        this.lightRoute = "./assets/icons/light-icons/";
        this.darkRoute = "./assets/icons/dark-icons/";
        this.activePath = "";
        this.themeBody = document.body.classList;
        this.projects = [
            { id: uuidv4(),
                name: "Ganache",
                link: "https://taticode.github.io/coffeeshopGanache/",
                textLink: "Visitar proyecto",
                projectImg: "./assets/img/projects-cards/ganache.webp",
                description: "Proyecto sencillo realizado con HTML, CSS y Javascript. Diseño propio de una single page de una cafetería fictizia llamada Ganache",
                tech: [
                    {
                        id: uuidv4(),
                        techName: "javascript",
                        description: "Javascript"
                    },
                    {
                        id: uuidv4(),
                        techName: "html5",
                        description: "HTML"
                    },
                    {
                        id: uuidv4(),
                        techName: "css3",
                        description: "CSS"
                    },
                ],
                repo: 'https://github.com/taticode/coffeeshopGanache', },
            { id: uuidv4(),
                name: "Memory Game",
                link: "https://taticode.github.io/memory/",
                textLink: "Visitar proyecto",
                projectImg: "./assets/img/projects-cards/captura.png",
                description: "Juego de memoria para aprender inglés",
                tech: [
                    {
                        id: uuidv4(),
                        techName: "javascript",
                        description: "Javascript"
                    },
                    {
                        id: uuidv4(),
                        techName: "html5",
                        description: "HTML"
                    },
                    {
                        id: uuidv4(),
                        techName: "css3",
                        description: "CSS"
                    },
                ],
                repo: 'https://github.com/taticode/memory', },
            { id: uuidv4(),
                name: "The Hashi",
                link: "https://github.com/taticode/the-hashi-app",
                textLink: "En construcción",
                projectImg: "./assets/img/projects-cards/building.png",
                description: "Proyecto en construcción",
                tech: [
                    {
                        id: uuidv4(),
                        techName: "javascript",
                        description: "Javascript"
                    },
                    {
                        id: uuidv4(),
                        techName: "typescript",
                        description: "Typescript"
                    },
                    {
                        id: uuidv4(),
                        techName: "mongo-DB",
                        description: "Api rest con mongo DB"
                    },
                    {
                        id: uuidv4(),
                        techName: "angular",
                        description: "Angular "
                    },
                    {
                        id: uuidv4(),
                        techName: "sass",
                        description: "Sass "
                    },
                    {
                        id: uuidv4(),
                        techName: "bem",
                        description: "BEM"
                    },
                    {
                        id: uuidv4(),
                        techName: "github",
                        description: "Control de versiones con Git"
                    },
                ],
                repo: 'https://github.com/taticode/the-hashi-app'
            },
        ];
        this.CourseTabs = [
            { id: uuidv4(),
                textItem: "Curso de Frameworks con Angular, React js, Node js y Mongo DB.",
                escuela: "Trazos",
                horas: "150 horas",
                skills: [
                    {
                        id: uuidv4(),
                        img: "angular",
                        alt: "Angular"
                    },
                    {
                        id: uuidv4(),
                        img: "react",
                        alt: "React"
                    },
                    {
                        id: uuidv4(),
                        img: "node-js",
                        alt: "Node js"
                    },
                    {
                        id: uuidv4(),
                        img: "mongo-DB",
                        alt: "Mongo db"
                    },
                    {
                        id: uuidv4(),
                        img: "typescript",
                        alt: "Typescript"
                    },
                    {
                        id: uuidv4(),
                        img: "sass",
                        alt: "Sass"
                    },
                    {
                        id: uuidv4(),
                        img: "bem",
                        alt: " BEM"
                    },
                ],
                knowledge: "En este curso profundicé más en la creación de aplicaciones con Angular 15, empecé a conocer React y cree mis propias bases de datos con Mongo DB, todo esto trabajando con node js para la instalación de paquetes.",
                finalizado: "Diciembre de 2022.",
                link: "https://trazos.net/online/formacion-online/desarrollo-web/curso-online-de-frameworks-con-reactjs-angular-nodejs-y-mongodb/",
                thumbnail: "./assets/img/education/trazos.webp",
                thumbnailAlt: "Curso de Frameworks con Angular, React js, Node js y Mongo DB online en Escuela Trazos" },
            { id: uuidv4(),
                textItem: "Bootcamp Online de UX/UI",
                escuela: "Trazos",
                horas: "80 horas",
                skills: [
                    {
                        id: uuidv4(),
                        img: "miro",
                        alt: "MIro"
                    },
                    {
                        id: uuidv4(),
                        img: "figma",
                        alt: "Figma"
                    },
                    {
                        id: uuidv4(),
                        img: "google-forms",
                        alt: "Google forms"
                    },
                ],
                knowledge: "En este curso aprendí a buscar soluciones a problemas en productos digitales, a averiguar las necesitades del usuario utilizando herramientas de investigación y a crear diseños que solucionaran esos problemas desde un prototipo sencillo en baja fidelidad, hasta el diseño final.",
                finalizado: "Febrero de 2021.",
                link: "https://trazos.net/online/formacion-online/productos-digitales/bootcamp-online-de-ux-ui/",
                thumbnail: "./assets/img/education/bootcamp-ux-ui-trazos.webp",
                thumbnailAlt: "Bootcamp ux ui online en Escuela Trazos" },
            { id: uuidv4(),
                textItem: "Curso profesional de Javascript",
                escuela: "Aepi",
                horas: "100 horas",
                skills: [
                    {
                        id: uuidv4(),
                        img: "javascript",
                        alt: "Javascript"
                    },
                ],
                knowledge: "Curso especializado en Javascript, en una modalidad con muchos ejercicios prácticos y completa. Cuyo contenido abarca todo javascript, desde los tipos de datos hasta eventos de ratón, creación de objetos o consultar APIS",
                finalizado: "Noviembre de 2020.",
                link: "https://asociacionaepi.es/curso-de-javascript-ajax-json-jquery/",
                thumbnail: "./assets/img/education/javascript-profesional.webp",
                thumbnailAlt: "holi" },
            { id: uuidv4(),
                textItem: "Curso de Angular 7",
                escuela: "Fictizia",
                horas: "50 horas",
                skills: [
                    {
                        id: uuidv4(),
                        img: "node-js",
                        alt: "Node js"
                    },
                    {
                        id: uuidv4(),
                        img: "angular",
                        alt: "Angular"
                    }
                ],
                knowledge: "Curso especializado en Angular, en su versión 7. Aprendí las características principales de este framework de javascript, componentes, servicios, directivas, pipes, etc.",
                finalizado: "Diciembre de 2018.",
                link: "",
                thumbnail: "./assets/img/education/angular.webp",
                thumbnailAlt: "holi" },
            { id: uuidv4(),
                textItem: "Máster en diseño de interfaz y Frontend con HTML5, CSS3 y JQUERY",
                escuela: "Fictizia",
                horas: "150 horas",
                skills: [
                    {
                        id: uuidv4(),
                        img: "html5",
                        alt: "Html 5"
                    },
                    {
                        id: uuidv4(),
                        img: "css3",
                        alt: "CSS 3"
                    },
                    {
                        id: uuidv4(),
                        img: "jquery",
                        alt: "J-query"
                    }
                ],
                knowledge: "Curso de diseño y maquetación muy completo con muchos ejercicios prácticos donde adquirí una buena base de html y css y creaba funcionalidades o hacía animaciones más complejas con jquery",
                finalizado: "Junio de 2018.",
                link: "",
                thumbnail: "./assets/img/education/html-css.webp",
                thumbnailAlt: "holi" },
            { id: uuidv4(),
                textItem: "Curso profesional de Wordpress",
                escuela: "Cursos Wordpress Madrid",
                horas: "24 horas",
                skills: [
                    {
                        id: uuidv4(),
                        img: "wordpress",
                        alt: "Wordpress"
                    }
                ],
                knowledge: "Curso del gestor de contenidos Wordpress, creación de temas hijo y de plantillas usando el tema DIVI",
                finalizado: "Mayo de 2016.",
                link: "https://www.cursoswordpressmadrid.com/curso-wordpress-profesional-en-madrid/",
                thumbnail: "./assets/img/education/wordpress.webp",
                thumbnailAlt: "holi" },
        ];
        this.hardSkills = [
            { id: uuidv4(),
                name: "Angular",
                img: "angular",
            },
            { id: uuidv4(),
                name: "Javascript",
                img: "javascript",
            },
            { id: uuidv4(),
                name: "Typescript",
                img: "typescript",
            },
            { id: uuidv4(),
                name: "Mongo DB",
                img: "mongo-DB",
            },
            { id: uuidv4(),
                name: "Node js",
                img: "node-js",
            },
            { id: uuidv4(),
                name: "Html",
                img: "html5",
            },
            { id: uuidv4(),
                name: "CSS",
                img: "css3",
            },
            { id: uuidv4(),
                name: "Sass",
                img: "sass",
            },
            { id: uuidv4(),
                name: "BEM",
                img: "bem",
            },
            { id: uuidv4(),
                name: "Github",
                img: "github",
            },
        ];
        this.softSkills = [
            { id: uuidv4(),
                name: "Figma",
                img: "figma",
            },
            { id: uuidv4(),
                name: "Creatividad",
                img: "creatividad",
            },
            { id: uuidv4(),
                name: "Autodidacta",
                img: "autodidacta",
            },
            { id: uuidv4(),
                name: "Perseverancia",
                img: "perseverancia",
            },
        ];
        this.experience = [
            { id: uuidv4(),
                rol: "Diseño UX-UI y desarrollo frontend con Angular 12",
                company: "Anjana Data SL",
                period: "2021 - 2022",
                task: "Trabajé en la mejora del diseño de una aplicación de gobierno del dato haciendo un análisis UX/UI, rediseñando componentes en Figma y maquetando después las mejoras de esta aplicación desarrollada con Sass y Angular. Metodología de trabajo agile e integración de cambios con pull requests. Si trabajas aquí no se te va a olvidar lo que es una Anjana 🧚🏻‍♂️"
            },
            { id: uuidv4(),
                rol: "Maquetación y desarrollo frontend con Angular Js",
                company: "NTT Data",
                period: "2020 - 2021",
                task: "En este puesto desarrollé tareas de debuggin en Angular en una aplicación de gestión de ventas de una empresa de telefonía móvil. Metodología de trabajo agile y subida de cambios con pull requests. En este proyecto se trabajó mucho en equipo, los compañeros fueron inmejorables 🤩"
            },
            { id: uuidv4(),
                rol: "Maquetación y desarrollo frontend con Angular 7",
                company: "Zeeker solutions",
                period: "2019",
                task: "En este puesto mi labor fue la maquetación e integración de componentes nuevos con Angular y Sass. Aquí pude colaborar con mi compañera de diseño UX-UI en la creación de un nuevo producto de banca digital."
            },
            { id: uuidv4(),
                rol: "Diseño y maquetación con temas hijo de Moodle",
                company: "Inserver E-learning",
                period: "2019",
                task: "En esta empresa de gamificación realicé el diseño de temas hijo para cursos de Moodle, y la posterior maquetación con css"
            },
            { id: uuidv4(),
                rol: "Maquetación con Wordpress",
                company: "Sapos y Princesas",
                period: "2017",
                task: "También una etapa muy buena con buenos compañeros. En esta revista digital maquetaba secciones nuevas de la revista con Wordpress y css"
            },
        ];
    }
};
__decorate([
    Input()
], BbddService.prototype, "activePathHeader", void 0);
__decorate([
    Output()
], BbddService.prototype, "disparadorRuta", void 0);
BbddService = __decorate([
    Injectable({
        providedIn: "root"
    })
], BbddService);
export { BbddService };
//# sourceMappingURL=bbdd.service.js.map