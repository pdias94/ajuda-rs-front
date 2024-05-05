import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from '../../../environments/environment';
import { RequestHelpResponse, RequestsHelpResponse } from '../../models/register-help/request-help-response';
import { RequestHelp } from '../../models/register-help/request-help';


@Injectable({
  providedIn: 'root'
})
export class RegisterHelpService {

  private baseApi = environment.baseApi;

  constructor(private httpClient: HttpClient) { }


  public getAllRequestsForHelp() : Observable<RequestHelpResponse>{
  return this.httpClient.get<RequestHelpResponse>(`/api/requests`)
  }

  public createRequestHelp(request: RequestHelp): Observable<RequestHelpResponse>{
    return this.httpClient.post<RequestHelpResponse>(`${this.baseApi}/request`, request)
  }

  public finishRequestHelp(document: string): Observable<RequestHelpResponse>{
    return this.httpClient.post<RequestHelpResponse>(`${this.baseApi}/request/finish`, document)
  }

}
