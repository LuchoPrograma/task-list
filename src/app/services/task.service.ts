import { Injectable } from '@angular/core';

import { Task } from '../tasks'; //interfaz
import { TASKS } from '../mock-tasks';//"Base de datos" (arreglo)

import {Observable, of} from 'rxjs';/*Nos permite realizar trabajo "asincronico": las bases de datos pueden
tomarse su tiempo en responder. Observable  */
import {HttpClient, HttpHandler, HttpHeaders} from '@angular/common/http' /* Nos permitira comunicarnos con nuestro servidor de base de datos
casi real (json-server) en el puerto 5000 */
const httpOptions = {
  headers: new HttpHeaders({'Content-Type':'application/json'}) //avisamos que mandamos el contenido en formato json
}

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
    // Devuelve mediante el metodo http GET todos los elementos del tipo Task[] encontrados en el servidor a traves de la url que creamos
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

  deleteTask(task: Task): Observable<Task>{
    //const url = ${this.apiUrl}/${task.id}  //Tuve que usar una sintaxis mas casera porque la del pibe no funcionaba
    return this.http.delete<Task>(this.apiUrl + "/" + task.id); //devuelve el elemento que queremos borrar(?)
  }

  updateTaskReminder(task:Task): Observable<Task>{

    return this.http.put<Task>((this.apiUrl + "/" + task.id), task, httpOptions ); //con httOptions le informamos al backend que lo que mandamos es un json
  }

  addTask(task:Task): Observable<Task>{
    return this.http.post<Task>(this.apiUrl,task,httpOptions);
  }
  
}
