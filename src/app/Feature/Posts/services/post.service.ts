import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from '../../../../environments/environment';
import { PostParams } from '../models/post-params';

@Injectable({
  providedIn: 'root'
})
export class PostService {
  readonly baseUrl = environment.apiUrl;

  constructor(private httpClient: HttpClient) {}

  getPost(postParams: PostParams): Observable<any> {
    const params = new HttpParams()
      .set('limit', postParams.limit || 10)
      .set('before', postParams.before || '')
      .set('after', postParams.after || '');
    return this.httpClient.get(this.baseUrl + postParams.category + '.json', {
      params
    });
  }
}
