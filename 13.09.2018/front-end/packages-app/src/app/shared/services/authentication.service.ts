import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Md5 } from 'ts-md5/dist/md5';
import { Global, User } from '../../imports';

@Injectable()
export class AuthenticationService {

    //----------------PROPERTIRS-------------------

    basicURL: string = Global.Host;

    //----------------CONSTRUCTOR------------------

    constructor(private httpClient: HttpClient) { }

    //----------------METHODS-------------------

    login(name: string, password: string): Observable<any> {
        let url: string = `${this.basicURL}/login`;
        //encrypt password using sha256 algorithm
        let encryptedPassword:any = Md5.hashStr(password);
        //send name and encrypted passwort to server
        let data = { name: name, password: encryptedPassword };
        return this.httpClient.post(url, data);
    }

    register(user: User): Observable<any> {
        let url: string = `${this.basicURL}/register`;
        //encrypt password using sha256 algorithm
        let encryptedPassword:any = Md5.hashStr(user.password);
        user.password=encryptedPassword;
        return this.httpClient.post(url, user);
    }

    logout() {
        // remove user from local storage to log user out
        localStorage.removeItem(Global.Token);
        localStorage.removeItem(Global.CurrentUser);
    }
    upload(image: any): Observable<any> {
        let url: string = `${this.basicURL}/upload`;
        let formData: FormData = new FormData();
        formData.append('file', image, image.name);
        return this.httpClient.post(url, formData);
    }
}