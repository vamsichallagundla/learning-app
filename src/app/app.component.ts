import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'learning-app';
  number = 12;
  games: string[] = ['callofduty', 'ps-5', 'cricket'];


  constructor() {

  }


  openApp() {

  }

  searchForCourse() {
    console.log("avilablecourses");
  }

  searchForCourseId(courseId: number) {
    console.log('12');
    console.log(2);
    console.log(courseId);
  }
  searchForCourses(courseName: string, courseId: number) {
    console.log(courseName);
    console.log(courseId);
    this.games = ['cld', 'bmw',];
    console.log(this.title);
    this.title = 'myLearningApp';
    console.log(this.title);
  }
  searchForDifferentCourses() {
    console.log();
    console.log(this.number);
    this.number = 27;
    console.log(this.number);
  }
  searchForDifferentCourseIds(courseName: string, courseId: number, typeOfCourses: string[]) {
    console.log(typeOfCourses);

  }




}
