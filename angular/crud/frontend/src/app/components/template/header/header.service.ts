import { HeaderDataInterface } from './header-data.model';
import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})

export class HeaderService {

  private _headerData = new BehaviorSubject<HeaderDataInterface>({
    title: 'Início',
    icon: 'home',
    routeUrl: '',
  })
  
  constructor() { }

  get headerData(): HeaderDataInterface {
    return this._headerData.value;
  }

  set headerData(headerData: HeaderDataInterface) {
    this._headerData.next(headerData);
  }
}
