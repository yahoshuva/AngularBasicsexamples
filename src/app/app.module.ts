import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { EventHandling1Component } from './components/event-handling1/event-handling1.component';
import { CardsComponent } from './components/cards/cards.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { DatabindingComponent } from './components/databinding/databinding.component';
import { WishMessageComponent } from './components/wish-message/wish-message.component';

@NgModule({
  declarations: [
    AppComponent,
    EventHandling1Component,
    CardsComponent,
    NavbarComponent,
    DatabindingComponent,
    WishMessageComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
