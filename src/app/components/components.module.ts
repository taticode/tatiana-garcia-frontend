import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ComponentsRoutingModule } from './components-routing.module';
import { AcordeonComponent } from './acordeon/acordeon.component';
import { CardComponent } from './card/card.component';
import { HeaderComponent } from './header/header.component';


@NgModule({
  declarations: [
    AcordeonComponent,
    CardComponent,
    HeaderComponent
  ],
  imports: [
    CommonModule,
    ComponentsRoutingModule
  ],
  exports: [
    AcordeonComponent,
    CardComponent,
    HeaderComponent
  ]
})
export class ComponentsModule { }
