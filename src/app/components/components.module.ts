import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ComponentsRoutingModule } from './components-routing.module';
import { AcordeonComponent } from './acordeon/acordeon.component';
import { CardComponent } from './card/card.component';
import { FarewellComponent } from './farewell/farewell.component';
import { HeaderComponent } from './header/header.component';


@NgModule({
  declarations: [
    AcordeonComponent,
    CardComponent,
    FarewellComponent,
    HeaderComponent
  ],
  imports: [
    CommonModule,
    ComponentsRoutingModule
  ],
  exports: [
    AcordeonComponent,
    CardComponent,
    FarewellComponent,
    HeaderComponent
  ]
})
export class ComponentsModule { }
