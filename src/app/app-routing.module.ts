import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './pages/about/about.component';
import { ContactComponent } from './pages/contact/contact.component';
import { EducationComponent } from './pages/education/education.component';
import { ExperienceComponent } from './pages/experience/experience.component';
import { FarewellComponent } from './components/farewell/farewell.component';
import { HomeComponent } from './pages/home/home.component';
import { ProjectsComponent } from './pages/projects/projects.component';

const routes: Routes = [
  { path: 'Home', component: HomeComponent },
  { path: 'Proyectos', component: ProjectsComponent },
  { path: 'Sobre mí', component: AboutComponent },
  { path: 'Formación', component: EducationComponent },
  { path: 'Experiencia', component: ExperienceComponent },
  { path: 'Contacto', component: ContactComponent },
  { path: 'Despedida', component: FarewellComponent },
  { path: '**', redirectTo: 'Home', pathMatch: 'full' }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
