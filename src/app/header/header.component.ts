import { Component } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss'
})
export class HeaderComponent {
students() {
throw new Error('Method not implemented.');
}


goToHome(){
console.log('newApplication');

}
goToUniversity(){
  console.log('logIntoUniversity');
}

goToGames(){
  console.log('clickOnGame');

}
goToStudents(){
  console.log("students");
}
}