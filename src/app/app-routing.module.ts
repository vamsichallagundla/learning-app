import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { UniversityComponent } from './university/university.component';
import { GamesComponent } from './games/games.component';
import { MoviesComponent } from './movies/movies.component';
import { VechilesComponent } from './vechiles/vechiles.component';
import { StudentsComponent } from './students/students.component';

const routes: Routes = [
  {path: 'home', component: HomeComponent},
  {path: 'university', component: UniversityComponent},
  {path: 'games', component: GamesComponent},
  {path : 'movies', component: MoviesComponent},
  {path : 'vechile',component: VechilesComponent},
  {path : 'students', component: StudentsComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
