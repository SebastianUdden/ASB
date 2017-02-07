import { Component } from '@angular/core';
import { ToDoListService } from './toDoList.service';

@Component({
    moduleId: module.id,
    selector: 'toDoList',
    templateUrl: 'toDoList.component.html',
    styleUrls: [ 'toDoList.component.css' ],
    providers: [ ToDoListService ]
})

export class ToDoListComponent{
    title = "To dos";
    
    toDos;
    constructor(toDoListService: ToDoListService) {
        this.toDos = toDoListService.getToDos();
    }
}