import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
// import { Storage } from '@ionic/storage-angular';
import { Observable, take } from 'rxjs';
import { environment } from 'src/app/environments/environment';
// import { User } from 'src/app/interfaces/user.interface';

@Injectable({
  providedIn: 'root'
})
export class DataService {
private  BASEAPI = environment.apiUrl as string;
  private body:any;
  private user:any={};
  constructor(
    // this is the ionic/storage-angular not the other one
    // private storage:Storage,
    private http:HttpClient,

) { }

  set Body(body:any){
    this.body = body;
  };

  get Body():any{
    return this.body;
  }
  // a func for setting the user in the storage 
  async setUser(user:any){
    this.user = user
    // You can install `npm i @ionic/storage-angular` to use this storage or use local storage
    // await this.storage.set('user',user);
  }
  // a func for getting the user from the storage
  async getUser():Promise<any> {
    // You can install `npm i @ionic/storage-angular` to use this storage or use local storage
    // this.user = await this.storage.get('user')
    return this.user;
  }

  ///////////////////////////////////
  // Crud Operation by api
  ///////////////////////////////////
  getData(endPoint: string): Observable<object> {
    return this.http.get(this.BASEAPI + endPoint).pipe(take(1));
  }

  postData(endPoing: string, body: any): Observable<object> {
    return this.http.post(this.BASEAPI + endPoing, body).pipe(take(1));
  }

  updateData(endPoing: string, body: any): Observable<object> {
    return this.http.put(this.BASEAPI + endPoing, body).pipe(take(1));
  }

  deleteData(endPoing: string): Observable<object> {
    return this.http.delete(this.BASEAPI + endPoing).pipe(take(1));
  }

  // this is a getter for getting the baseApi, getter is like a variable you get 
get baseApi ():string{
  return this.BASEAPI;
}

}