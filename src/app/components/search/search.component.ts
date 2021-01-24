import { Component, OnInit } from '@angular/core';
import {SpotifyService} from '../../services/spotify.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styles: [
  ]
})
export class SearchComponent /*implements OnInit*/ {

  searchedArtists: any[] = [];

  constructor( private spotify: SpotifyService ) { }

  searchArtist( term: string ) {
    console.log(term);

    this.spotify.searchArtists(term)
        .subscribe((data: any) => {
          this.searchedArtists = data;
        })
  }

  // ngOnInit(): void {
  // }

}
