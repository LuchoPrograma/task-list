import { Component } from '@angular/core';

import { Task } from 'src/app/tasks';
import { TASKS } from 'src/app/mock-tasks';

//componente padre de task-item
@Component({
  selector: 'app-tasks',
  templateUrl: './tasks.component.html',
  styleUrls: ['./tasks.component.css']
})
export class TasksComponent {
  tasks: Task[] = TASKS;
}
