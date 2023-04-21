import { Component, OnInit } from '@angular/core';

import { Task } from 'src/app/tasks';
//import { TASKS } from 'src/app/mock-tasks';

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
}
