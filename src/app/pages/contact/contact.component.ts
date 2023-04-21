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

  



  
}
