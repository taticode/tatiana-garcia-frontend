import { Component, HostListener, OnInit } from '@angular/core';
import { ConfetiComponent } from 'src/app/components/confeti/confeti.component';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent implements OnInit{
  public clicked = false;
  renderer2: any;
  elementRef: any;
  constructor(private confetiComponent: ConfetiComponent){
    
  }
  ngOnInit(): void {
  }

  

  @HostListener('window:scroll', ['$event']) // Escucha el evento de scroll en la ventana
  onScroll(event: Event) {
    // Identifica el elemento de "Contacto"
    const contactoElement = document.getElementById("contacto");

    //Identifica el elemento "confeti"
    const confetiElement = document.getElementById("confeti");

    // Obtiene la posición actual del scroll
    const scrollPosition = window.scrollY;
    
    // Obtiene la posición del elemento "Contacto"
    const contactoPosition = contactoElement!.offsetTop;
    
    // Compara las posiciones para ver si el usuario ha llegado a la sección "Contacto"
    if (scrollPosition >= contactoPosition) {
      console.log("El usuario ha llegado a la sección de contacto.");
      contactoElement?.classList.add('bg-blue')
      // Aquí puedes agregar cualquier acción que desees cuando el usuario llega a la sección "Contacto".

    }
  }

  
}
