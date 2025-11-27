import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { Tiendas } from "../models/Tiendas";
import { Global } from '../services/global';

@Injectable()

export class TiendaService {
    public url: string;

    constructor(
        private _http: HttpClient
    ) {
        this.url = Global.url;
    }


    //1) Vamos a ver la información de las tiendas
    //http://localhost:3600/tienda - GET
    getTiendas(): Observable<any> {
        let headers = new HttpHeaders().set('Content-Type', 'application/json');
        return this._http.get(this.url + 'tienda', { headers: headers });
    }


    //2) Vamos a obtener los datos de una tienda en específico
    //http://localhost:3600/tienda/:id 
    getTienda(id: String): Observable<any> {
        let headers = new HttpHeaders().set('Content-Type', 'application/json');
        return this._http.get(this.url + 'tienda/' + id, { headers: headers });
    }


    //3) Vamos a guardar el producto
    //http://localhost:3600/guardar-tienda - POST
    saveTienda(tienda: Tiendas): Observable<any> {
        let params = JSON.stringify(tienda);
        let headers = new HttpHeaders().set('Content-Type', 'application/json');
        return this._http.post(this.url + 'guardar-tienda', params, { headers: headers })
    }

    //4) Actualizar la información de las tiendas
    //http://localhost:3600/tienda/:id - PUT
    updateTienda(tienda: Tiendas): Observable<any> {
        let params = JSON.stringify(tienda);
        let headers = new HttpHeaders().set('Content-Type', 'application/json');
        return this._http.put(this.url + 'tienda/' + tienda._id, params, { headers: headers })
    }

    //5) Eliminar una tienda
    //http://localhost:3600/tienda/:id - DELETE
    deleteTienda(id: String): Observable<any> {
        let headers = new HttpHeaders().set('Content-Type', 'application/json');
        return this._http.delete(this.url + 'tienda/' + id, { headers: headers });
    }


}