import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { environment } from '../../environments/environment';
import { News } from './models/news.model';

@Injectable({
  providedIn: 'root'
})
export class NewsService {

  constructor(private http: HttpClient) { }

  // Get all posts from the API

  getAllNews(): Observable<News[]> {

    console.log('GET Templates ');

    return this.http.get<News[]>(`${environment.uri}/api/news`)
    .pipe(catchError((error: any) => Observable.throw(error.json())));
  }

}
