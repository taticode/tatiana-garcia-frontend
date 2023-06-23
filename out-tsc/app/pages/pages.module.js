import { __decorate } from "tslib";
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PagesRoutingModule } from './pages-routing.module';
import { AboutComponent } from './about/about.component';
import { ContactComponent } from './contact/contact.component';
import { EducationComponent } from './education/education.component';
import { ExperienceComponent } from './experience/experience.component';
import { HomeComponent } from './home/home.component';
import { ProjectsComponent } from './projects/projects.component';
import { SkillsComponent } from './skills/skills.component';
import { ComponentsModule } from "../components/components.module";
import { NotFoundComponent } from './not-found/not-found.component';
let PagesModule = class PagesModule {
};
PagesModule = __decorate([
    NgModule({
        declarations: [
            AboutComponent,
            ContactComponent,
            EducationComponent,
            ExperienceComponent,
            HomeComponent,
            ProjectsComponent,
            SkillsComponent,
            NotFoundComponent
        ],
        exports: [
            AboutComponent,
            ContactComponent,
            EducationComponent,
            ExperienceComponent,
            HomeComponent,
            ProjectsComponent,
            SkillsComponent,
            NotFoundComponent
        ],
        imports: [
            CommonModule,
            PagesRoutingModule,
            ComponentsModule
        ]
    })
], PagesModule);
export { PagesModule };
//# sourceMappingURL=pages.module.js.map