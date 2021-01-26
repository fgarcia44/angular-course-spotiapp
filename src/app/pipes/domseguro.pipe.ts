import { Pipe, PipeTransform } from '@angular/core';
import { DomSanitizer  } from '@angular/platform-browser';


@Pipe({
  name: 'domseguro'
})
export class DomseguroPipe implements PipeTransform {

  constructor( private domSanitizer: DomSanitizer ){ }

  transform( value: string): any {

    const playerUrl = 'https://open.spotify.com/embed/track/';

    return this.domSanitizer.bypassSecurityTrustResourceUrl( playerUrl + value );
  }

}
