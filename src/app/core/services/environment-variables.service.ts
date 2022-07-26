import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class EnvironmentVariablesService {

  constructor() { }

  get variables () {
    return environment;
  }
}
