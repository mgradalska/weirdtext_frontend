import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {HttpClientModule} from '@angular/common/http';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {EncoderComponent} from "./encoder.component";
import {DecoderComponent} from "./decoder.component";
import {NavbarComponent} from "./navbar.component";

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    EncoderComponent,
    DecoderComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
