import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { DragDropModule } from '@angular/cdk/drag-drop';

import { AppComponent } from './app.component';
import { HelloComponent } from './hello.component';
import { LaxmiKoExampleComponent } from './app/laxmi-ko-example/laxmi-ko-example.component';

@NgModule({
  imports:      [ BrowserModule, FormsModule, DragDropModule ],
  declarations: [ AppComponent, HelloComponent, LaxmiKoExampleComponent ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
