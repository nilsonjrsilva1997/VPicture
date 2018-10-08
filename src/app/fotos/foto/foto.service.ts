import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Foto } from "./foto";

const API = 'http://localhost:3000';

@Injectable({ providedIn: 'root' })
export class FotoService {
    
     constructor(public  http: HttpClient) {}

     listFromUser(userName: string) {
         return this.http.
            get<Foto[]>(`${API}/flavio/photos`);      
     }
}