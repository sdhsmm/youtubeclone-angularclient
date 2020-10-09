import { Component, OnInit } from '@angular/core';
import { IMedia } from '../app.component';
import { NextVideoService } from '../next-video.service';

@Component({
  selector: 'app-videoplayer',
  templateUrl: './videoplayer.component.html',
  styleUrls: ['./videoplayer.component.scss']
})
export class VideoplayerComponent implements OnInit {

  currentItem: IMedia = {
    title:"Default Video",
    src: "http://static.videogular.com/assets/videos/videogular.mp4",
    type:"video/mp4"
  }

  constructor(private nextVideoService: NextVideoService) { }

  ngOnInit(): void {

this.nextVideoService.nextVideoObserver.subscribe((data)=>{
  console.log("Next song req recieved!");
  this.currentItem = data;
});

  }

}
