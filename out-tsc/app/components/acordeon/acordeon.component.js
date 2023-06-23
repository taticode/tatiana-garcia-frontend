import { __decorate } from "tslib";
import { Component } from '@angular/core';
let AcordeonComponent = class AcordeonComponent {
    constructor(bbddService) {
        this.bbddService = bbddService;
        this.activePath = './assets/icons/dark-icons';
        this.experience = [];
    }
    ngOnInit() {
        this.experience = this.bbddService.experience;
        this.bbddService.disparadorRuta.subscribe((ruta) => {
            this.activePath = ruta;
        });
    }
};
AcordeonComponent = __decorate([
    Component({
        selector: 'app-acordeon',
        templateUrl: './acordeon.component.html',
        styleUrls: ['./acordeon.component.scss']
    })
], AcordeonComponent);
export { AcordeonComponent };
//# sourceMappingURL=acordeon.component.js.map