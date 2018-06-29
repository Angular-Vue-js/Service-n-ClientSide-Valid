import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule }    from '@angular/http';
import { AppComponent } from './app.component';
import { FormsModule }   from '@angular/forms';
import { ConverterComponent } from './app.converter';
import { FeedbackComponent } from './app.feedback';
import { routing }        from './app.routing';

@NgModule({
  declarations: [
    AppComponent,
    ConverterComponent,
    FeedbackComponent
  ],
  imports: [
    BrowserModule, HttpModule, FormsModule, routing
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
