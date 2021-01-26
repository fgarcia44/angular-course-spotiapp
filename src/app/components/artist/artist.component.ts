import {Component} from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {SpotifyService} from '../../services/spotify.service';

@Component({
    selector: 'app-artist',
    templateUrl: './artist.component.html',
    styles: []
})
export class ArtistComponent {

    artist: any = {};
    topTracks: any[] = [];
    loading: boolean;

    constructor(private route: ActivatedRoute,
                private spotify: SpotifyService) {

        this.loading = true;

        this.route.params.subscribe(params => {
            let artistId = params['id'];
            console.log(artistId);

            this.getArtist(artistId);
            this.getArtistTopTracks(artistId);
        });
    }

    getArtist(artistId: string) {
        this.loading = true;

        this.spotify.getArtist(artistId)
            .subscribe(data => {
                this.artist = data;
                this.loading = false;
            });
    }

    getArtistTopTracks(artistId: string) {

        this.spotify.getArtistTopTracks(artistId)
            .subscribe(data => {
                console.log(data);
                this.topTracks = data;
            });
    }


}
