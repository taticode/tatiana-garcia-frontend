import { __decorate } from "tslib";
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { AboutComponent } from '../pages/about/about.component';
import { HomeComponent } from '../pages/home/home.component';
import { ProjectsComponent } from '../pages/projects/projects.component';
const routes = [
    { path: 'home', component: HomeComponent },
    { path: 'projects', component: ProjectsComponent },
    { path: 'about', component: AboutComponent },
    { path: 'education', component: AboutComponent },
    { path: 'experience', component: AboutComponent },
    { path: 'contact', component: AboutComponent },
    { path: '', redirectTo: 'https://taticode.github.io/tatiana-garcia-frontend/', pathMatch: 'full' },
    { path: '**', redirectTo: 'notFound', pathMatch: 'full' },
];
let ComponentsRoutingModule = class ComponentsRoutingModule {
};
ComponentsRoutingModule = __decorate([
    NgModule({
        imports: [RouterModule.forChild(routes)],
        exports: [RouterModule]
    })
], ComponentsRoutingModule);
export { ComponentsRoutingModule };
//# sourceMappingURL=components-routing.module.js.map