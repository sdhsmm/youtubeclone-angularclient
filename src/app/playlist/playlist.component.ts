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
