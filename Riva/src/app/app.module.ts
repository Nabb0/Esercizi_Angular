import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { PizzaComponent } from './pizza/pizza.component';
import { PastaComponent } from './pasta/pasta.component';
import { MandolinoComponent } from './mandolino/mandolino.component';

@NgModule({
  declarations: [
    AppComponent,
    PizzaComponent,
    PastaComponent,
    MandolinoComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
