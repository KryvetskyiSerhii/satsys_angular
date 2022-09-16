import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class BackService {
  constructor(private http: HttpClient) {}

  getData(url: string) {
    return this.http.get(`https://cors-anywhere.herokuapp.com/${url}`);
  }
}
