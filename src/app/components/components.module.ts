import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ComponentsRoutingModule } from './components-routing.module';
import { AcordeonComponent } from './acordeon/acordeon.component';
import { CardComponent } from './card/card.component';
import { HeaderComponent } from './header/header.component';
import { TabsComponent } from './tabs/tabs.component';
import { ConfetiComponent } from './confeti/confeti.component';


@NgModule({
  declarations: [
    AcordeonComponent,
    CardComponent,
    HeaderComponent,
    TabsComponent,
    ConfetiComponent
  ],
  imports: [
    CommonModule,
    ComponentsRoutingModule
  ],
  exports: [
    AcordeonComponent,
    CardComponent,
    HeaderComponent,
    TabsComponent,
    ConfetiComponent
  ]
})
export class ComponentsModule { }