import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {Client} from '../model/class/Client';
import {environment} from '../../environments/environment';
import {APIResponseModel} from '../model/interface/role';
import {Constant} from "../constant/Constant";

@Injectable({
    providedIn: 'root'
})
export class ClientService {

    constructor(private http: HttpClient) {
    }

    getAllClients(): Observable<APIResponseModel> {
        return this.http.get<APIResponseModel>(environment.API_URL + Constant.API_METHOD.GET_ALL_CLIENT);
    }

    getAllClientsProject(): Observable<APIResponseModel> {
        return this.http.get<APIResponseModel>(environment.API_URL + Constant.API_METHOD.GET_ALL_CLIENT_PROJECT);
    }

    getAllUsers() {
        return this.http.get("https://jsonplaceholder.typicode.com/users")
    }

    getAllEmployee(): Observable<APIResponseModel> {
        return this.http.get<APIResponseModel>(environment.API_URL + Constant.API_METHOD.GET_ALL_EMP);
    }

    addUpdate(obj: Client): Observable<APIResponseModel> {
        return this.http.post<APIResponseModel>(environment.API_URL + "AddUpdateClient", obj)
    }

    deleteClientById(id: number): Observable<APIResponseModel> {
        return this.http.delete<APIResponseModel>(environment.API_URL + "DeleteClientByClientId?clientId=" + id)

    }

    addClientProjectUpdate(obj: Client): Observable<APIResponseModel> {
        return this.http.post<APIResponseModel>(environment.API_URL + "AddUpdateClientProjec", obj)
    }

}
