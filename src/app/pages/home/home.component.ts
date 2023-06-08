import { Component } from '@angular/core';
import { ConfetiComponent } from 'src/app/components/confeti/confeti.component';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {

  constructor(private confetiComponent: ConfetiComponent){
    
  }

}
