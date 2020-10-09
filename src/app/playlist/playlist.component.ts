import { Component, OnInit } from '@angular/core';
import { IMedia } from '../app.component';
import { NextVideoService } from '../next-video.service';
import {VideolistService} from '../videolist.service';



@Component({
  selector: 'app-playlist',
  templateUrl: './playlist.component.html',
  styleUrls: ['./playlist.component.scss']
})
export class PlaylistComponent implements OnInit {

  playlist: Array<IMedia> = [
    {
        title: 'Pale Blue Dot',
        src: 'http://static.videogular.com/assets/videos/videogular.mp4',
        type: 'video/mp4'
    },
    {
        title: 'Big Buck Bunny',
        src: 'http://static.videogular.com/assets/videos/big_buck_bunny_720p_h264.mov',
        type: 'video/mp4'
    },
    {
        title: 'Elephants Dream',
        src: 'http://static.videogular.com/assets/videos/elephants-dream.mp4',
        type: 'video/mp4'  
    }
];

currentIndex = 0;

  constructor(private nextVideoService: NextVideoService, private videolist: VideolistService) {
 
   }

  ngOnInit(): void {
    this.videolist.getAllMedia().subscribe((data:any) =>{
      this.playlist = data;
    });
  }
  

  onClickPlaylistItem(item: IMedia, index:number) {
      this.currentIndex = index;
      this.nextVideoService.nextVideoSubscriber.next(item);
  }


}
