import { Component} from '@angular/core';

@Component({
  selector: 'app-level-one',
  templateUrl: './level-one.component.html',
  styleUrls: ['./level-one.component.css']
})

export class LevelOneComponent {
   level1One = [{url: '../../assets/images/game/blackpanther.jpeg', points: 2.5, value: 'Black Panther'},
                {url: '../../assets/images/game/blackwidow.jpeg', points: 2.5, value: 'Black Panther'},
                {url: '../../assets/images/game/deadpool.jpeg', points: 2.5, value: 'Black Panther'},
                {url: '../../assets/images/game/blackpanther.jpeg', points: 2.5, value: 'Black Panther'}];


  constructor() { }

  //Going to need a method that generates random numbers, pulls the random numbers based on level and randomy places
  //them on the game board. maybe the *ngfor is not the best route though rather
  // a method that randomy generates values/

}
