import { Component} from '@angular/core';

@Component({
  selector: 'app-level-one',
  templateUrl: './level-one.component.html',
  styleUrls: ['./level-one.component.css']
})

export class LevelOneComponent {
   level1One = [{url: '../../assets/images/game/blackpanther.jpeg', points: 2.5, value: 'Black Panther'},
                {url: '../../assets/images/game/blackwidow.jpeg', points: 2.5, value: 'Black Widow'},
                {url: '../../assets/images/game/deadpool.jpeg', points: 2.5, value: 'Deadpool'},
                {url: '../../assets/images/game/hulk.jpeg', points: 2.5, value: 'Hulk'}];

    level1Two = [{url: '../../assets/images/game/deadpool.jpeg', points: 2.5, value: 'Deadpool'},
                 {url: '../../assets/images/game/hulk.jpeg', points: 2.5, value: 'Hulk'},
                 {url: '../../assets/images/game/blackpanther.jpeg', points: 2.5, value: 'Black Panther'},
                 {url: '../../assets/images/game/blackwidow.jpeg', points: 2.5, value: 'Black Widow'}
                ];


     show1: number;
     show2: number;
     points = 0;
     value1: null;
     value2: null;

  constructor() { }

  onShow1(i: number, item){
    this.show1 = i;
    this.value1 = item.value;
    if(this.value1 === this.value2){
      this.points += 5;
    }
  }

  onShow2(i: number, item){
    this.show2 = i;
    this.value2 = item.value
    if(this.value1 === this.value2){
           this.points += 5;
    }
  }



  //Going to need a method that generates random numbers, pulls the random numbers based on level and randomy places
  //them on the game board. maybe the *ngfor is not the best route though rather
  // a method that randomy generates values/

}
