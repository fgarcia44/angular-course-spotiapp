import { Component, OnInit } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {SpotifyService} from '../../services/spotify.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styles: [
  ]
})
export class HomeComponent /*implements OnInit*/ {

  newReleases: any[] = [];

  constructor( private spotify: SpotifyService ) {
    spotify.getNewReleases()
        .subscribe( (data: any) => {
          console.log(data);
          this.newReleases = data;
        });
  }

  // ngOnInit(): void {
  // }

}
