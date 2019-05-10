import { ConfigService } from 'src/app/core/config/config.service';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

import { Annonce } from 'src/app/shared/models/annonce';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class AnnonceService {
  constructor(private http: HttpClient, private config: ConfigService) {}

  getAnnonces(): Observable<Annonce[]> {
    return this.http.get<Annonce[]>(this.getResourceBaseUrl());
  }

  getAnnonce(id: number): Observable<Annonce> {
    return this.http.get<Annonce>(`${this.getResourceBaseUrl()}/${id}`);
  }

  add(annonce: Annonce): Observable<Annonce> {
    if (annonce) {
      return this.http.post<Annonce>(this.getResourceBaseUrl(), annonce);
    }
  }

  edit(annonce: Annonce) {}

  private getResourceBaseUrl() {
    return `${this.config.getApiBaseUrl()}annonces`;
  }
}
