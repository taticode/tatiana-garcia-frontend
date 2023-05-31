import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ConfetiComponent } from './components/confeti/confeti.component';
import { library } from '@fortawesome/fontawesome-svg-core'
import { fas } from '@fortawesome/free-solid-svg-icons'
import { fab } from '@fortawesome/free-brands-svg-icons'
import { PagesModule } from './pages/pages.module';
import { ComponentsModule } from './components/components.module';

library.add(fas, fab)


@NgModule({
  declarations: [
    AppComponent

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ComponentsModule,
    PagesModule,

  ],
  providers: [
    ConfetiComponent
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
