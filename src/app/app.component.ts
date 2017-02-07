import { Component } from '@angular/core';

@Component({
    moduleId: module.id,
    selector: 'my-app',
    template: `
        <toDoList></toDoList>
        <tableStockList></tableStockList>
  `
})

export class AppComponent { name = 'Angular'; }
