import { Injectable } from '@angular/core';

import { Task } from '../tasks'; //interfaz
import { TASKS } from '../mock-tasks';//"Base de datos" (arreglo)

import {Observable, of} from 'rxjs';/*Nos permite realizar trabajo "asincronico": las bases de datos pueden
tomarse su tiempo en responder. Observable  */
import {HttpClient, HttpHandler} from '@angular/common/http' /* Nos permitira comunicarnos con nuestro servidor de base de datos
casi real (json-server) en el puerto 5000 */

@Injectable({
  providedIn: 'root'
})
export class TaskService { //Creamos servicio encargado de administrar la "base de datos"

  private apiUrl = 'http://localhost:5000/tasks' //"constante para guardar la URL del servidor"
  //"Podriamos tambien guardarlo en una variable entorno" (???)

  constructor(private http:HttpClient) {
    
   }

  //V3
  getTask(): Observable<Task[]>{ 
    return this.http.get<Task[]>(this.apiUrl) //Esta vez implementando el modulo de http en angular
  }

  /*
  V1
  getTask(): Task[]{  
    return TASKS;     //Sincrónico al estar en el propio proyecto Angular
  }

  V2
  getTask(): Observable<Task[]>{ //Asincrónico. Usamos Observable Como si fuera una BS
    //const task = of(TASKS);
    //return task;
  }
  */

  //V3
  
}
