import { Component,Input } from '@angular/core';
import { Task } from 'src/app/tasks';
import { TASKS } from 'src/app/mock-tasks';

@Component({
  selector: 'app-tasks-item',
  templateUrl: './tasks-item.component.html',
  styleUrls: ['./tasks-item.component.css']
})
export class TasksItemComponent {
  @Input() task:Task=TASKS[0]
}
