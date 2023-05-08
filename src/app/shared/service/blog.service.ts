import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class BlogService {
  private api = 'http://localhost:3000/blogs';
  constructor(private http: HttpClient) {}

  getBlog(): Observable<any> {
    const headers = new HttpHeaders().set('content-type', 'application-json');
    return this.http.get<any>(this.api, { headers });
  }
  getBlogId(id: any): Observable<any> {
    const headers = new HttpHeaders().set('content-type', 'application-json');
    return this.http.get<any>(`${this.api}/${id}`, { headers });
  }
}
