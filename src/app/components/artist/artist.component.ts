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
    loading: boolean;

    constructor(private route: ActivatedRoute,
                private spotify: SpotifyService) {

        this.loading = true;

        this.route.params.subscribe( params => {
            let artistId = params['id'];
            console.log(artistId);

            this.getArtist(artistId);
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



}
