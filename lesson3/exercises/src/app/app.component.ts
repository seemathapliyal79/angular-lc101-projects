import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Exercises: Angular Lesson 3';

  color = 'green';
  height = 0;
  width = 0;
  message = 'Space shuttle ready for takeoff!';

  takeOffEnabled: boolean = true;

  handleTakeOff() {
    let result = window.confirm('Are you sure the shuttle is ready for takeoff?');
    if (result) {
       this.color = 'blue';
       this.height = 10000;
       this.width = 0;
       this.message = 'Shuttle in flight.';
       this.takeOffEnabled = false;
    }
  }

  handleLand() {
    window.alert('The shuttle is landing. Landing gear engaged.');
       this.color = 'green';
       this.height = 0;
       this.width = 0;
       this.message = 'The shuttle has landed.';
  }

  handleAbort() {
    let result = window.confirm('Do you really want to abort the mission ?');
    if (result) {
       this.color = 'red';
       this.height = 0;
       this.width = 0;
       this.message = 'Mission aborted.';
    }
  } 

  moveRocket(rocketImage, direction) {
    if (direction === 'right') {
       let movement = parseInt(rocketImage.style.left) + 10 + 'px';
       rocketImage.style.left = movement;
       this.width = this.width + 10000;
       this.sizeCheck();
    }
    else if (direction === 'left') {
      let movement = parseInt(rocketImage.style.left) - 10 + 'px';
      rocketImage.style.left = movement;
      this.width = this.width - 10000;
      this.sizeCheck();
   }
    else if (direction === 'up') {
    let movement = parseInt(rocketImage.style.bottom) + 10 + 'px';
    rocketImage.style.bottom = movement;
    this.height = this.height + 10000;
    this.sizeCheck();
 }
    else if (direction === 'down') {
  let movement = parseInt(rocketImage.style.bottom) - 10 + 'px';
  rocketImage.style.bottom = movement;
  this.height = this.height - 10000;
  this.sizeCheck();
}
  }

  sizeCheck(){
    //Keep the rocket from flying off of the background.
if (this.width < -10000 || this.width > 160000 || this.height < 0 || this.height > 320000 ){
    this.color = 'orange'
}
}

}





