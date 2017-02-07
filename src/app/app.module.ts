import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent }  from './app.component';
import { ToDoListComponent } from './ToDoList/toDoList.component';
import { TableStockListComponent } from './TableStockList/tableStockList.component';

@NgModule({
  imports:      [ 
    BrowserModule 
  ],
  declarations: [ 
    AppComponent,
    ToDoListComponent,
    TableStockListComponent
  ],
  bootstrap:    [ AppComponent ]
})

export class AppModule { }
