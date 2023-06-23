import { __decorate } from "tslib";
import { Component, Output, EventEmitter } from '@angular/core';
let HeaderComponent = class HeaderComponent {
    constructor(bbddService) {
        this.bbddService = bbddService;
        this.lightRoute = '';
        this.darkRoute = '';
        this.activePath = './assets/icons/dark-icons/';
        this.rootRoute = '/';
        this.links = [
            { title: 'Home', fragment: 'hero' },
            { title: 'Proyectos', fragment: 'projects' },
            { title: 'Sobre mí', fragment: 'about' },
            { title: 'Formación', fragment: 'education' },
            { title: 'Experiencia', fragment: 'experience' },
            { title: 'Contacto', fragment: 'contact' },
        ];
        this.propagar = new EventEmitter();
    }
    btnSwitch() {
        const button = document.querySelector('.switch-theme');
        button?.classList.toggle('active');
    }
    toggleRoute() {
        this.themeBody ? this.activePath = this.lightRoute : this.activePath = this.darkRoute;
        return this.activePath;
    }
    emitActivePath() {
        this.bbddService.disparadorRuta.emit(this.activePath);
    }
    switchTheme() {
        this.themeBody = document.body.classList.toggle('dark');
        this.btnSwitch();
        this.toggleRoute();
        this.emitActivePath();
    }
    ngOnInit() {
        this.lightRoute = this.bbddService.lightRoute;
        this.darkRoute = this.bbddService.darkRoute;
        this.themeBody = this.bbddService.themeBody;
    }
};
__decorate([
    Output()
], HeaderComponent.prototype, "propagar", void 0);
HeaderComponent = __decorate([
    Component({
        selector: 'app-header',
        templateUrl: './header.component.html',
        styleUrls: ['./header.component.scss'],
    })
], HeaderComponent);
export { HeaderComponent };
//# sourceMappingURL=header.component.js.map