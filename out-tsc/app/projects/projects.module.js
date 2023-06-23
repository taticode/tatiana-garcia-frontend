import { __decorate } from "tslib";
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TheHashiComponent } from './the-hashi/the-hashi.component';
import { ComponentsModule } from '../components/components.module';
let ProjectsModule = class ProjectsModule {
};
ProjectsModule = __decorate([
    NgModule({
        declarations: [
            TheHashiComponent
        ],
        imports: [
            CommonModule,
            ComponentsModule
        ],
        exports: [
            TheHashiComponent
        ]
    })
], ProjectsModule);
export { ProjectsModule };
//# sourceMappingURL=projects.module.js.map