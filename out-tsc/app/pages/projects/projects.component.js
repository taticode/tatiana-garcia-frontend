import { __decorate } from "tslib";
import { Component } from '@angular/core';
let ProjectsComponent = class ProjectsComponent {
    constructor(bbddService) {
        this.bbddService = bbddService;
        this.activePath = './assets/icons/dark-icons/';
        this.projects = [];
    }
    ngOnInit() {
        this.projects = this.bbddService.projects;
        this.bbddService.disparadorRuta.subscribe(data => {
            this.activePath = data;
        });
    }
};
ProjectsComponent = __decorate([
    Component({
        selector: 'app-projects',
        templateUrl: './projects.component.html',
        styleUrls: ['./projects.component.scss'],
    })
], ProjectsComponent);
export { ProjectsComponent };
//# sourceMappingURL=projects.component.js.map