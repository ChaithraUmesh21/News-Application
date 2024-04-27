import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { newsRespone } from '../interfaces/news-response';
import { HttpClient } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class NewsapiService {
  topHeadlinesPath = environment.baseURL;

  constructor(private http:HttpClient) {}

  getTopCountryHeadlines(country: string, category: string):Observable<newsRespone>{
    return this.http.get<newsRespone>(
      this.topHeadlinesPath+
      '?country=${country}&category=${category}pageSize=10&apiKey=${environment.apiKey}'
    );
  }
}
