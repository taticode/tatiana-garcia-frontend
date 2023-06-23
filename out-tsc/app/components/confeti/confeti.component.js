import { __decorate } from "tslib";
import { Component } from '@angular/core';
import * as confetti from 'canvas-confetti';
let ConfetiComponent = class ConfetiComponent {
    constructor(renderer2, elementRef) {
        this.renderer2 = renderer2;
        this.elementRef = elementRef;
        this.clicked = false;
    }
    ngOnInit() {
    }
    launchConfetti() {
        const canvas = this.renderer2.createElement('canvas');
        this.renderer2.appendChild(this.elementRef.nativeElement, canvas);
        const myConfetti = confetti.create(canvas, {
            resize: true // will fit all screen sizes
        });
        myConfetti({
            particleCount: 300,
            spread: 360,
            gravity: 1
        });
        this.clicked = true;
        setTimeout(() => {
            this.renderer2.removeChild(this.elementRef.nativeElement, canvas);
        }, 3000);
    }
};
ConfetiComponent = __decorate([
    Component({
        selector: 'app-confeti',
        templateUrl: './confeti.component.html',
        styleUrls: ['./confeti.component.scss']
    })
], ConfetiComponent);
export { ConfetiComponent };
//# sourceMappingURL=confeti.component.js.map