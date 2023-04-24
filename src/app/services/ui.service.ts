import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs'; //Nos permiten encadenar eventos. El fin es escuchar cambios en funciones, sean sincronicas o asincronicas

@Injectable({
  providedIn: 'root'
})
export class UiService {

  private showAddTask:boolean = false;
  private subject = new Subject<any>; //Escuchamos cambios en el template

  constructor() { }

  toggleAddTask():void{
    console.log("toggleAddTask works!")
    this.showAddTask = !this.showAddTask;
    this.subject.next(this.showAddTask);
  }

  onToggle(): Observable<any>{
    return this.subject.asObservable();
  }

}
