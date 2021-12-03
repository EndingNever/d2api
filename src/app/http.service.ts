import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import 'rxjs/add/operator/map'
import { map } from 'rxjs/operators';
@Injectable({
  providedIn: 'root'
})
export class HttpService {
  // baseUrl = 'https://www.bungie.net/platform/Destiny2/Manifest/'
  baseUrl = 'https://www.bungie.net/platform/Destiny2/Manifest/'
  constructor(private http: HttpClient) { }

  get(){
    const headers = new HttpHeaders()
      .set('content-type', 'application/json')
      .set('X-API-KEY', '2e578ee5dad14ca79440bd11d79c6ba7')
    return this.http.get(this.baseUrl, { 'headers': headers})
  }

  json(){
      const headers = new HttpHeaders()
        // .set('content-type', 'application/json')
        // .set('X-API-KEY', '2e578ee5dad14ca79440bd11d79c6ba7')
      return this.http.get("https://www.bungie.net//common/destiny2_content/json/en/DestinyAchievementDefinition-d963d715-738b-4b8e-a8c7-6db728a9a8a1.json", { 'headers': headers})
  }
}
