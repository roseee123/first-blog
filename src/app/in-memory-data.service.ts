import { Injectable } from '@angular/core';

import { InMemoryDbService } from 'angular-in-memory-web-api';
import { Article } from './article';
import { from } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class InMemoryDataService implements InMemoryDbService{
  createDb() {
    const article  = [
      { id: 1, title: 'Article 1-', content: '1111' },
      { id: 2, title: 'Article 2-', content: '2222' },
      { id: 3, title: 'Article 3-', content: '3333' },
      { id: 4, title: 'Article 4-', content: '4444' },
      { id: 5, title: 'Article 5-', content: '5555' }
    ];
    return {article};
  }

  constructor() { }

  genId(articles: Article[]): number {
    return articles.length > 0 ? Math.max(...articles.map(article => article.id)) + 1 : 1;
  }
}
