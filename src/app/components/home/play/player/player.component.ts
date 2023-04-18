import { Component, OnInit } from '@angular/core';
import * as Plyr from 'plyr';

@Component({
  selector: 'app-player',
  templateUrl: './player.component.html',
  styleUrls: ['./player.component.scss'],
})
export class PlayerComponent implements OnInit {
  player!: Plyr;

  ngOnInit() {
    this.player = new Plyr('#myVideo', {
      captions: {
        active: true,
      },
    });
    (window as any).player = this.player;
  }
}
