import { Component } from '@angular/core';
import { TableStockListService } from './tableStockList.service';

@Component({
    moduleId: module.id,
    selector: 'tableStockList',
    templateUrl: 'tableStockList.component.html',
    styleUrls: [ 'tableStockList.component.css' ],
    providers: [ TableStockListService ]
})

export class TableStockListComponent{
    title = "First North";

    stocks;
    constructor(tableStockListService: TableStockListService) {
        this.stocks = tableStockListService.getStocks();
    }
}