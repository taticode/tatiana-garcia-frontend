import { Component, ElementRef, Renderer2 } from '@angular/core';
import * as confetti from 'canvas-confetti';

@Component({
  selector: 'app-confeti',
  templateUrl: './confeti.component.html',
  styleUrls: ['./confeti.component.scss']
})
export class ConfetiComponent {


    public clicked = false;
    constructor(
      private renderer2: Renderer2,
      private elementRef: ElementRef
    ) {}

    ngOnInit(): void {
    }


    public launchConfetti(): void {

      const canvas = this.renderer2.createElement('canvas');

      this.renderer2.appendChild(this.elementRef.nativeElement, canvas);

      const myConfetti = confetti.create(canvas, {
        resize: true // will fit all screen sizes

      });

      myConfetti();

      this.clicked = true;
    }



  
}
