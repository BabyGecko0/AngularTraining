import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'AngularTraining';
  buttonClick(){
    alert("YOU HURT ME!!!");
  }
  motivim="we can do it";
  description="we can do it because we promissed ouselves that we will do it."

  

}
