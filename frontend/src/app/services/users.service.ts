import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Usuario } from '../models/Usuario';

@Injectable({
  providedIn: 'root'
})
export class UsersService {
  private urlBase = 'http://tpfinal-hia-backend-1:4000/users'

  constructor(private _http: HttpClient) { }

  public getUsuarios(): Observable<any> {
    const httpOptions = {
      headers: new HttpHeaders({})
    }

    return this._http.get(this.urlBase, httpOptions);
  }

  public getUsuarioById(usuarioId: string): Observable<any> {
    const httpOptions = {
      headers: new HttpHeaders({
      }),
    }
    return this._http.get(this.urlBase + usuarioId, httpOptions);
  }

  public createUsuario(usuario: Usuario): Observable<any> {
    let httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json'
      }),
    }
    let body: any = JSON.stringify(usuario);

    return this._http.post(this.urlBase, body, httpOptions);
  }

  public deleteUsuario(usuarioId: string): Observable<any> {
    const httpOptions = {
      headers: new HttpHeaders({
      }),
    }
    return this._http.delete(this.urlBase + usuarioId, httpOptions);
  }

  public updateUsuario(usuario: Usuario): Observable<any> {
    let httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json'
      }),
    }
    let body: any = JSON.stringify(usuario);

    return this._http.put(this.urlBase + usuario._id, body, httpOptions);
  }
}
