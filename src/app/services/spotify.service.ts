import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';

import {map} from 'rxjs/operators';

@Injectable({
    providedIn: 'root'
})
export class SpotifyService {

    constructor(private http: HttpClient) {
        console.log('Loading Spotify Service');
    }

    getQuery(query: string) {

        const url = `https://api.spotify.com/v1/${query}`;

        const authorizationToken = 'Bearer BQCw1DD43IXZiJ5xeQMQCArWKct5ZVEuBnHGlu75QXCkLtH9F3xJZULVmCt_hdYMuFJ_96Nc6kghlYNH8gw';
        const headers = new HttpHeaders({
            'Authorization': authorizationToken
        });

        return this.http.get(url, {headers});
    }

    getNewReleases() {

        return this.getQuery('browse/new-releases')
            .pipe(map(data => data['albums'].items));

    }

    searchArtists(term: string) {

        return this.getQuery(`search?q=${term}&type=artist`)
            .pipe(map(data => data['artists'].items));

    }

    getArtist(id: string) {

        return this.getQuery(`artists/${id}`)
            .pipe(); //TODO why do I need the pipe? otherwise it doesn't work!

    }

    getArtistTopTracks(id: string) {

        return this.getQuery(`artists/${id}/top-tracks?country=es`)
            .pipe(map(data => data['tracks']));
    }
}
