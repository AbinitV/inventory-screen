import { Component, OnInit } from '@angular/core';
import { TableService } from './inventory.service';

@Component({
  selector: 'app-inventory',
  templateUrl: './inventory.component.html',
  styleUrls: ['./inventory.component.css']
})
export class InventoryComponent implements OnInit {
  employees: any[];

  settings = {

    attr: {
      class: 'table table-bordered'
    },

    actions: {
      add: false,
      edit: false,
      delete: false,
    },

    columns: {
      id: {
        title: 'ID'
      },
      name: {
        title: 'Name'
      },
      age: {
        title: 'Age'
      },
    }
  };

  constructor(private tservice: TableService) { }

  ngOnInit() {
      this.employees = (this.tservice.getData());
  }

}
