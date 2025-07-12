import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { HomeComponent } from './home/home.component';
import { UniversityComponent } from './university/university.component';
import { GamesComponent } from './games/games.component';
import { MoviesComponent } from './movies/movies.component';
import { VechilesComponent } from './vechiles/vechiles.component';
import { StudentsComponent } from './students/students.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    HomeComponent,
    UniversityComponent,
    GamesComponent,
    MoviesComponent,
    VechilesComponent,
    StudentsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
