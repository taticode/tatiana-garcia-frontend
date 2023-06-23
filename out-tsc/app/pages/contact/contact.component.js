import { __decorate } from "tslib";
import { Component } from '@angular/core';
let ContactComponent = class ContactComponent {
    constructor() {
        this.clicked = false;
        this.rootRoute = '/';
        this.links = [
            { title: 'Home', fragment: 'hero' },
            { title: 'Proyectos', fragment: 'projects' },
            { title: 'Sobre mí', fragment: 'about' },
            { title: 'Formación', fragment: 'education' },
            { title: 'Experiencia', fragment: 'experience' },
            { title: 'Contacto', fragment: 'contact' },
        ];
    }
    ngOnInit() {
    }
};
ContactComponent = __decorate([
    Component({
        selector: 'app-contact',
        templateUrl: './contact.component.html',
        styleUrls: ['./contact.component.scss']
    })
], ContactComponent);
export { ContactComponent };
//# sourceMappingURL=contact.component.js.map