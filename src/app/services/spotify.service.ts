import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';

import { map } from 'rxjs/operators';

@Injectable({
      providedIn: 'root'
})
export class SpotifyService {

  authorizationToken = 'Bearer BQAcJCFWNCnmq2qNKyxP-rbxdZCNQFG4v83XcKPCU6otg_r9NmBa61lBFDaRx8v9FkbiIRZJymAfX-xw3o4';
  headers = new HttpHeaders({
    'Authorization': this.authorizationToken
  });

  constructor( private http: HttpClient) {
    console.log('Loading Spotify Service');
  }

  getNewReleases() {

    return this.http.get('https://api.spotify.com/v1/browse/new-releases', { headers: this.headers })
        .pipe( map (data => data['albums'].items));

  }

  searchArtists( term: string) {

    return this.http.get(`https://api.spotify.com/v1/search?q=${term}&type=artist`, { headers: this.headers })
        .pipe( map (data => data['artists'].items));

  }
}
