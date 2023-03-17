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

@NgModule({
    declarations: [
        AboutComponent,
        ContactComponent,
        EducationComponent,
        ExperienceComponent,
        HomeComponent,
        ProjectsComponent,
        SkillsComponent
    ],
    exports: [
        AboutComponent,
        ContactComponent,
        EducationComponent,
        ExperienceComponent,
        HomeComponent,
        ProjectsComponent,
        SkillsComponent
    ],
    imports: [
        CommonModule,
        PagesRoutingModule,
        ComponentsModule
    ]
})
export class PagesModule { }
