import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent implements OnInit{
  public clicked = false;
  renderer2: any;
  elementRef: any;



  rootRoute = '/';
  links = [
      { title: 'Home', fragment: 'hero' },
      { title: 'Proyectos', fragment: 'projects' },
      { title: 'Sobre mí', fragment: 'about' },
      { title: 'Formación', fragment: 'education' },
      { title: 'Experiencia', fragment: 'experience' },
      { title: 'Contacto', fragment: 'contact' },
  ];



  ngOnInit(): void {
  }

  



  
}
