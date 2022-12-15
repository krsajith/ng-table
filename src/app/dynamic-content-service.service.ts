import { Injectable, Type } from '@angular/core';
import { DynamicContent } from './dynamic-content';

type Constructor<T> = {
  new(...args: any[]): T;
  readonly prototype: T;
}

@Injectable({
  providedIn: 'root'
})
export class DynamicContentServiceService {

  static implementations: Map<string,Type<DynamicContent>> = new Map();
  static register(typeName: string) {
    return function<T extends Constructor<DynamicContent>>(ctor: T) {
      if (DynamicContentServiceService.implementations.hasOwnProperty(typeName)) {
        console.error("This type type has already been registered. Did you forget to change the argument for @Register()?");
      }
      else {
        DynamicContentServiceService.implementations.set(typeName,ctor);
      }
      return ctor;
    }
  }
  constructor() { }
  getTypeFromString(typeName: string) {
    if (!DynamicContentServiceService.implementations.has(typeName)) {
      throw new Error("This type type does not exist. Did you forget to @Register() it?");
    }
    return DynamicContentServiceService.implementations.get(typeName);
  }
}
