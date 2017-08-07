import { Component, OnInit, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs';
import { TimerObservable } from "rxjs/observable/TimerObservable";
import { GameService } from '../services/game.service'

@Component({
  selector: 'app-level-one',
  templateUrl: './level-one.component.html',
  styleUrls: ['./level-one.component.css']
})

export class LevelOneComponent implements OnInit {
    points = 0;
    gameCards = [];
    time = 10;

    //timer properties
     tick = 10;
     subscription: Subscription;

  constructor(private gameService: GameService) {

  }

  onStart(){
    //timer for level one > end time pop up
    // populate game array with random matches
    // can populate based on value or id
    // if match points accumulate
    this.onTimer();
  }

 onTimer(){
   let timer = TimerObservable.create(200, 1000);
   this.subscription = timer.subscribe(t => {
     this.tick --;
     if(this.tick <= 0){
       this.subscription.unsubscribe();
     }
   });
 }

 ngOnInit(){
   this.gameCards = this.gameService.gameData;
 }

ngOnDestroy(){
  this.subscription.unsubscribe();
}


}
