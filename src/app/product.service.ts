import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { Observable } from 'rxjs/Observable';

import 'rxjs/add/operator/map';
import { Response } from '@angular/http/src/static_response';

@Injectable()
export class ProductService {

  private _albumUrl: string = "../assets/album.json";

  constructor(private _http: Http) { 
    
  }


  getAlbum(id: number): Observable<any>{
    return this._http.get(this._albumUrl)
      .map((response: Response) => response.json());
  }

}
