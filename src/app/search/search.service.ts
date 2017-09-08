import { Injectable } from '@angular/core';
import {Http} from '@angular/http';
import{Observable} from 'rxjs/Rx';
import 'rxjs/add/operator/map';

@Injectable()
export class SearchService {
private clientId: string='17208a2393bc4da68604553b651f4495';
  
private artistsUrl: string='https://api.spotify.com/v1/search?type=artist&limit=10&client_id='+this.clientId+'&q=';
constructor(private http:Http) { }

searchArtists(searchTerm: string){
  let url = this.artistsUrl+searchTerm;
  return this.http.get(url).map(res => res.json());

}
}

