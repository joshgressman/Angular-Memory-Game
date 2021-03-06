import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing-module';

import { HomeComponent } from './home/home.component';
import { LevelOneComponent } from './level-one/level-one.component';
import { GameService } from './services/game.service';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    LevelOneComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    AppRoutingModule
  ],
  providers: [GameService],
  bootstrap: [AppComponent]
})
export class AppModule { }
