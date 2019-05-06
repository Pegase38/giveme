import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Annonce } from 'src/app/shared/models/annonce';
import { Observable } from 'rxjs';
import {tap} from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class AnnonceService {
  private apiBaseURL = 'http://localhost:3000/';
  private basePath = 'annonces';
  constructor(private http:HttpClient) {}

  getAnnonces():Observable<Annonce[]> {
    return this.http.get<Annonce[]>(this.apiBaseURL+this.basePath).pipe(tap(data => console.log(data)));
  }

  add(annonce: Annonce) {
    if (annonce) {
      return this.http.post(this.apiBaseURL+this.basePath, annonce);
    }
  }

  edit(annonce: Annonce) {
    console.log('edit prestation');
    console.log(annonce);
  }
}
