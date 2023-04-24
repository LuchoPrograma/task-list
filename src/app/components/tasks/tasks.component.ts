import { Component, OnInit } from '@angular/core';

import { Task } from 'src/app/tasks';
import { TASKS } from 'src/app/mock-tasks';

import { TaskService } from 'src/app/services/task.service'; /*Reemplazamos lo que hicimos anteriormente
implementando un servicio(inyeccion de dependencia) especializado en administrar nuestra "base de datos"*/

//componente padre de task-item
@Component({
  selector: 'app-tasks',
  templateUrl: './tasks.component.html',
  styleUrls: ['./tasks.component.css']
})
export class TasksComponent {
  //tasks: Task[] = TASKS;
  tasks: Task[] = [];

  constructor(private taskService: TaskService){ //Inicializamos nuestro servicio
  }
/*
  ngOnInit(): void{ 
    this.tasks = this.taskService.getTask();
  }
*/

//Like Promise (????)
  ngOnInit(): void{ //Accion que se realiza al crearse un nuevo componente Tasks
    //TasksComponent obtiene los datos de la "base de datos" (arreglo TASKS en mock-tasks)
    this.taskService.getTask().subscribe((tasks)=>(this.tasks = tasks)); //con ayuda de Observable y su metodo subscibe
  }

  deleteTask(task: Task){ //Hay formas mas bonitas de hacer esto
    this.taskService.deleteTask(task).subscribe( () => (this.tasks = this.tasks.filter(t => t.id !== task.id) ) )
    /*                                                                          ^filtra y devuelve todos los elementos distintos al que queremos borrar */
  }

  toggleReminder(task:Task){
    task.reminder = !task.reminder //cambio para el frontend
    this.taskService.updateTaskReminder(task).subscribe();// + actualizo el cambio para el backend, persistencia de la info
  }

  addTask(task:Task){
    this.taskService.addTask(task).subscribe((task)=>(this.tasks.push(task))); 
    /*                                                          ^Metemos la tarea en el arreglo (ademas de a la base de datos)*/
  }
}
