import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title : string;
  email : string;
  hobbies : Array<string>;
  // hobbies : string[];
  showHobbies : boolean;
  newUpdate: string;

  constructor() {
    console.log('Constructor works!');
    this.title = 'my first try to code on Angular';
    this.email = 'lizbeth.fp@gmail.com';
    this.hobbies = ['read', 'write', 'watch tv'];
    this.showHobbies = false;
    this.newUpdate = 'Go figure if this works';
  }

  toggleHobbies() {
    this.showHobbies = !this.showHobbies;
  }

  newHobby(hobby) {
    // console.log(hobby.value);
    this.hobbies.push(hobby.value);
    hobby.value = '';
    return false;
  }
}
