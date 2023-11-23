import { Injectable } from '@angular/core';
// import { Storage } from '@ionic/storage-angular';
import { DataService } from '../data/data.service';
import { BehaviorSubject, Observable,EMPTY } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { HelpersService } from '../helpers/helpers.service';

// Storage KEYS
const USER = 'user';
const ACCESS_TOKEN = 'accessToken';
const REFRESH_TOKEN = 'refreshToken';
const INTRO_KEY = 'intro-key';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  BASEAPI=this.data.baseApi;
  isAuthenticated:BehaviorSubject<boolean>=new BehaviorSubject<boolean>(false)
  constructor(
    private helper:HelpersService,
    private data:DataService,
    // this is the ionic/storage-angular not the other one.
    // private storage:Storage,
    private http:HttpClient,
    private router:Router,

  ) { }

  // #####################################################################
  get accessToken(): string | null {
    return localStorage.getItem(ACCESS_TOKEN);
  }
  // #####################################################################
  // #####################################################################
  async removeCredentials(): Promise<void> {
    localStorage.removeItem(ACCESS_TOKEN);
    // await this.storage.remove(USER);
    // await this.storage.remove(REFRESH_TOKEN);
  }
  // #####################################################################

  // #####################################################################
  // This function uses Ionic Angular storage, its's easy to install `npm i @ionic/storage-angular`
  // You may want to use the LocalStorage instead no need to install any packages
    // #####################################################################
    async logOut(): Promise<void> {
      // await this.storage.remove('isAuthenticated')
      // this.isAuthenticated.next(false)
      // await this.helper.showLoading();
      // await this.removeCredentials();
      // await this.helper.dismissLoading();
      this.router.navigateByUrl('/login',{replaceUrl:true})
    }
// #####################################################################
  // This function uses Ionic Angular storage, its's easy to install `npm i @ionic/storage-angular`
  // You may want to use the LocalStorage instead no need to install any packages
  // P.S the Helper Function will have the loading and the toasters, configure them before using them here
///////////////////////////////////////////////////////////////////
login(form: any): Observable<any> {
  // this.helper.showLoading();

  // return this.http.post(this.BASEAPI+'/user/login', form).pipe(
  //   switchMap((data: any) => {
  //     const { the_user, accessToken, refreshToken } = data;
  //     return from(Promise.all([
  //       this.storage.set(USER, the_user),
  //       this.storage.set(REFRESH_TOKEN, refreshToken)
  //     ])).pipe(
  //       tap(() => {
  //         localStorage.setItem(ACCESS_TOKEN, accessToken);
  //         this.isAuthenticated.next(true);
  //         this.router.navigateByUrl('/tabs',{replaceUrl:true})
  //       })
  //     );
  //   }),
  //   catchError((error) => {
  //     this.helper.dismissLoading();
  //     if(error.status===0){
  //       this.helper.presentToast(`App is not connected to the server ( ${error.statusText} )`)
  //     }
  //     else {


  //       this.helper.presentToast(error.error.message)
  //       console.log('Error:', error);
  //     }
  //     return throwError(error);
  //   })
  // );
  // Remove this return statement
return EMPTY
}
///////////////////////////////////////////////////////////////////
// #####################################################################
  // This function uses Ionic Angular storage, its's easy to install `npm i @ionic/storage-angular`
  // You may want to use the LocalStorage instead no need to install any packages
  // P.S the Helper Function will have the loading and the toasters, configure them before using them here
///////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////
signup(form: any): Observable<any> {
  // console.log('started');

  // this.helper.showLoading();
  // return this.http.post(this.BASEAPI+'/user/register', form).pipe(
  //   switchMap((data: any) => {
  //     console.log(`From SwithcMapRxJs: `, data);

  //     const { user, accessToken, refreshToken } = data;
  //     return from(Promise.all([
  //       this.storage.set(USER, user),
  //       this.storage.set(REFRESH_TOKEN, refreshToken)
  //     ])).pipe(
  //       tap(() => {
  //         localStorage.setItem(ACCESS_TOKEN, accessToken);
  //         this.isAuthenticated.next(true);
  //         this.router.navigateByUrl('/profile-image',{replaceUrl:true})
  //       })
  //     );
  //   }),
  //   catchError((error) => {
  //     this.helper.dismissLoading();
  //     if(error.status===0){
  //       this.helper.presentToast(`App is not connected to the server ( ${error.statusText} )`)
  //     }
  //     else {

  //       this.helper.presentToast(error.error.message)
  //       console.log('Error:', error);
  //     }
  //     return throwError(error);
  //   })
  // );
// Remove this return statement
return EMPTY
}
///////////////////////////////////////////////////////////////////\
// This function is important if you are scaling the app and want to handle the expired tokens
// P.S Configure a ./interceptors/jwt.interceptor.ts file and register it in the app.module.ts
///////////////////////////////////////////////////////////////////
// getRefreshToken(): Observable<any> {
//   const PROMISE: Promise<string> = new Promise(async (resolve, reject) => {
//     const token: string = await this.storage.get(REFRESH_TOKEN);
//     this.data.getData('/user/refreshToken?token=' + token).subscribe(
//       (res: any) => {
//         localStorage.setItem(ACCESS_TOKEN, res.accessToken);
//         resolve(res.token);
//       },
//       (err) => reject(err)
//     );
//   });
//   return from(PROMISE);
// }
}