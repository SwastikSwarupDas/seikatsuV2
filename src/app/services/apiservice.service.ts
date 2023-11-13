import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ApiserviceService {

  constructor(private dataFetch : HttpClient) { }

  addUser(userdata:any){
    
  }

}
