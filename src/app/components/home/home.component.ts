import {Component, OnInit} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {SpotifyService} from '../../services/spotify.service';

@Component({
    selector: 'app-home',
    templateUrl: './home.component.html',
    styles: []
})
export class HomeComponent /*implements OnInit*/ {

    newReleases: any[] = [];
    loading: boolean;

    constructor(private spotify: SpotifyService) {

        this.loading = true;
        spotify.getNewReleases()
            .subscribe((data: any) => {
                console.log(data);
                this.newReleases = data;
                this.loading = false;
            });
    }

    // ngOnInit(): void {
    // }

}
