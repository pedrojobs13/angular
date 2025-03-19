import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {APIResponseModel} from '../model/interface/role';
import {environment} from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class MasterService {

  constructor(private http: HttpClient) {
  }

  getDesignation(): Observable<APIResponseModel> {
    console.log(environment.API_URL)
    return this.http.get<APIResponseModel>(environment.API_URL + "GetAllDesignation")
  }
}
