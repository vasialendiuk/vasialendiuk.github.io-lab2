import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = "";

  inputHandler(event: any){
    const value = event.target.value;

    const result = value.split(" ").length;

    if (result<3) {
      this.title = 'На здоровя';
    } else {
      this.title = 'Забагато!';
    }
  }
}
