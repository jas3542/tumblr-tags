import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { pipe, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TagService {

  // Tumblr will give CORS origin error. Using this proxy we can fix that error
  private  serviceURL: string = 'https://cors-anywhere.herokuapp.com/';

  constructor(private http: HttpClient) { }

  public getTags(): Observable<any> {
    console.log("service is here!");
    // const headers = new HttpHeaders();
    // headers.append('Access-Control-Allow-Origin', '*');
    // headers.append('User-Agent','Mozilla/5.0 (Windows NT 6.1; Win64; x64; rv:47.0) Gecko/20100101 Firefox/47.0');

    // TODO: do call for login using the credentials.

    // var getTags = this.http.get('https://www.tumblr.com/mega-editor/published/my-ordered-disorder',{ headers})
    // .pipe().subscribe(); // should be map here

    // console.log(getTags);
    console.log("Getting tags service");
    return this.http.get(this.serviceURL + 'http://www.tumblr.com/mega-editor/published/my-ordered-disorder');
  }

}
