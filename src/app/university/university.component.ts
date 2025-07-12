import { Component } from '@angular/core';

@Component({
  selector: 'app-university',
  templateUrl: './university.component.html',
  styleUrl: './university.component.scss'
})
export class UniversityComponent {

  constructor(){
    console.log('university');
  }
  searchForUniversity(){
    console.log('universityList');
  }

}
