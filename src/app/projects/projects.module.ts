import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TheHashiComponent } from './the-hashi/the-hashi.component';
import { ComponentsModule } from '../components/components.module';



@NgModule({
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
export class ProjectsModule { }
