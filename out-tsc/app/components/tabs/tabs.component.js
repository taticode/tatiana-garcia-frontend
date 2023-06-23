import { __decorate } from "tslib";
import { Component } from '@angular/core';
let TabsComponent = class TabsComponent {
    constructor(bbddService) {
        this.bbddService = bbddService;
        this.activePath = './assets/icons/dark-icons/';
        this.dataTabs = this.bbddService.CourseTabs;
        this.seleccionado = 0;
    }
    setSeleccionado(posicion) {
        this.seleccionado = posicion;
    }
    ngOnInit() {
        this.bbddService.disparadorRuta.subscribe(data => {
            this.activePath = data;
        });
    }
};
TabsComponent = __decorate([
    Component({
        selector: 'app-tabs',
        templateUrl: './tabs.component.html',
        styleUrls: ['./tabs.component.scss']
    })
], TabsComponent);
export { TabsComponent };
//# sourceMappingURL=tabs.component.js.map