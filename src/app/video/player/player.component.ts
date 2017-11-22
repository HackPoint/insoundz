import { Component, OnInit } from '@angular/core';
import { Video } from '../../shared/models/video';

@Component({
  selector: 'nga-player',
  templateUrl: './player.component.html',
  styleUrls: ['./player.component.scss']
})
export class PlayerComponent implements OnInit {
  public videoUrl: string;
  constructor() { }

  ngOnInit() {
  }

  selectVideo(selectedVideo: Video) {
    this.videoUrl = selectedVideo.url;
  }
}
