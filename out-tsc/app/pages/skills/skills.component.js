import { __decorate } from "tslib";
import { Component } from '@angular/core';
let SkillsComponent = class SkillsComponent {
    constructor(bbddService) {
        this.bbddService = bbddService;
        this.activePath = './assets/icons/dark-icons/';
        this.hardSkills = [];
        this.softSkills = [];
    }
    ngOnInit() {
        this.hardSkills = this.bbddService.hardSkills;
        this.softSkills = this.bbddService.softSkills;
        this.bbddService.disparadorRuta.subscribe(data => {
            this.activePath = data;
        });
    }
};
SkillsComponent = __decorate([
    Component({
        selector: 'app-skills',
        templateUrl: './skills.component.html',
        styleUrls: ['./skills.component.scss']
    })
], SkillsComponent);
export { SkillsComponent };
//# sourceMappingURL=skills.component.js.map