import { Component, OnInit } from '@angular/core';
import { Live } from 'src/app/shared/model/live.model';
import { LiveService } from 'src/app/shared/service/live.service';


const previousMock = (index : number) => {
  let obj = {} as Live
  obj.id =  index.toString();
  obj.liveName =  'Lucas Previous Live ' + index.toString();
  obj.liveDate =  new Date().toLocaleString();
  obj.liveLink =  'https://www.twitch.tv/kruegerlucas';
  
  return obj;
}

const nextMock = (index : number) => {
  let obj = {} as Live
  obj.id =  index.toString();
  obj.liveName =  'Lucas Next Live ' + index.toString();
  obj.liveDate =  new Date().toLocaleString();
  obj.liveLink =  'https://www.twitch.tv/kruegerlucas';

  return obj;
}

@Component({
  selector: 'app-live-list',
  templateUrl: './live-list.component.html',
  styleUrls: ['./live-list.component.css']
})

export class LiveListComponent implements OnInit {

  livesPrevious!: Live[];
  livesNext!: Live[];


  constructor(public liveService: LiveService) { }

  ngOnInit(): void {
    this.livesPrevious = new Array<Live>();
    this.livesNext = new Array<Live>();;
    this.getLives();
  }



  getLives(){
    /*this.liveService.getLivesWithFlag('previous').subscribe(data => {
      this.livesPrevious = data.content;
    });
    this.liveService.getLivesWithFlag('next').subscribe(data => {
      this.livesPrevious = data.content;
    });WITH API */

    //WITHOUT API
    for (let index = 0; index < 3; index++) {
      this.livesPrevious.push(previousMock(index));
    }
    
    for (let index = 0; index < 2; index++) {
      this.livesNext.push(nextMock(index));
    }

  }
  
}
