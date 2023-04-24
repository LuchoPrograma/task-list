import { Component, EventEmitter, Output } from '@angular/core';
import { Subscription } from 'rxjs';
import { UiService } from 'src/app/services/ui.service';
import { Task } from 'src/app/tasks';

@Component({
  selector: 'app-add-task',
  templateUrl: './add-task.component.html',
  styleUrls: ['./add-task.component.css']
})
export class AddTaskComponent {
  @Output() onAddTask: EventEmitter<Task> = new EventEmitter; 

  text:string="";
  day:string ="";
  reminder:boolean = false;
  showAddTask:boolean=false;
  subscription?:Subscription;

  constructor(private uiService: UiService){
    this.subscription = this.uiService.onToggle().subscribe(value => this.showAddTask = value)
    //Triangulacion de evento junto a al servicio de UI y botton.component. 
    //botton y add-task se subscriben para escuchar al mismo evento cada vez que se emita
  }

  onSubmit(){
    if(!this.text){
      alert("Please write something!");
      return;
    }
    
    //Recibimos los parametros del template y los almacenamos
    const {text, day, reminder} = this;
    const newTask = {text, day, reminder}; //javascript syntaxis
    /*
    const newTask = {           Lo mismo que arriba pero no tan bonito
      text: this.text,
      day: this.day,
      reminder: this.reminder
    }
    */

    this.onAddTask.emit(newTask);
  }


}
