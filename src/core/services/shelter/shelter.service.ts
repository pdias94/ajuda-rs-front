import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from '../../../environments/environment.development';
import { Shelter, Shelters } from '../../models/shelter/shelter';

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

  public getShelterById(id: string): Observable<Shelter>{
    return this.httpClient.get<Shelter>(`${this.baseApi}/shelter/${id}`)
  }
}
