import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from '../../../environments/environment.development';
import { ShelterById } from '../../models/shelter/shelter-by-id';
import { Shelters } from '../../models/shelter/shelters';

@Injectable({
  providedIn: 'root'
})
export class ShelterService {

  private baseApi = environment.baseApi;
  constructor(private httpClient: HttpClient) {

  }

  public getAllShelters(): Observable<Shelters>{
    return this.httpClient.get<Shelters>(`${this.baseApi}/shelters`)
  }

  public getShelterById(id: string): Observable<ShelterById>{
    return this.httpClient.get<ShelterById>(`${this.baseApi}/shelter/${id}`)
  }
}
