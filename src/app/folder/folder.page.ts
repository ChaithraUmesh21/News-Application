import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { NewsapiService } from './../services/newsapi.service';
import { Article } from './../interfaces/news-response';
import { map } from 'rxjs';

@Component({
  selector: 'app-folder',
  templateUrl: './folder.page.html',
  styleUrls: ['./folder.page.scss'],
})
export class FolderPage implements OnInit {
  public folder!: string;
  newsList: Article[] = [];


  constructor(private activatedRoute: ActivatedRoute, 
              private newsApiService: NewsapiService
            ) {
              this.newsList = [];
            }

  ngOnInit() {
    this.folder = this.activatedRoute.snapshot.paramMap.get('id') as string;
    this.getTopHeadlines();
  }

  getTopHeadlines() { 
    this.newsApiService
    .getTopCountryHeadlines('ir', this.folder)
    .pipe(map((res) => res.articles))
    .subscribe((news) => this.newsList = news);
  }
}
