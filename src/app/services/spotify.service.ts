import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';

import { map } from 'rxjs/operators';

@Injectable({
      providedIn: 'root'
})
export class SpotifyService {

  constructor( private http: HttpClient) {
    console.log('Loading Spotify Service');
  }

  getQuery(query: string){

    const url = `https://api.spotify.com/v1/${query}`;

    const authorizationToken = 'Bearer BQAffHFMsZOKEvMjiVWOBQja-b6U5ev02uJXE0WT8QmCSvB-itCSYDimyvk1sBt6LGnZrdcxeBIsJg8ngJQ';
    const headers = new HttpHeaders({
      'Authorization': authorizationToken
    });

    return this.http.get(url, { headers });
  }

  getNewReleases() {

    return this.getQuery('browse/new-releases')
        .pipe( map (data => data['albums'].items));

  }

  searchArtists( term: string) {

    return this.getQuery(`search?q=${term}&type=artist`)
        .pipe( map (data => data['artists'].items));

  }

  getArtist( id: string) {

    return this.getQuery(`artists/${id}`)
        .pipe(); //TODO why do I need the pipe? otherwise it doesn't work!

  }
}
