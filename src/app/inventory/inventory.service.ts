import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class TableService {
  constructor() { }
   jsn = [
    {
        "id": "1",
        "name": "Peter Dinklage",
        "age": "45"
    },
    {
        "id": "2",
        "name": "Lina Heady",
        "age": "43"
    },
    {
        "id": "3",
        "name": "Emilia Clarke",
        "age": "30"
    },
    {
        "id": "4",
        "name": "Kit Harrington",
        "age": "30"
    },
    {
        "id": "4",
        "name": "Kit Harrington",
        "age": "30"
    },
    {
        "id": "4",
        "name": "Kit Harrington",
        "age": "30"
    },
    {
        "id": "4",
        "name": "Kit Harrington",
        "age": "30"
    },
    {
        "id": "4",
        "name": "Kit Harrington",
        "age": "30"
    },
    {
        "id": "4",
        "name": "Kit Harrington",
        "age": "30"
    },
    {
        "id": "4",
        "name": "Kit Harrington",
        "age": "30"
    },
    {
        "id": "4",
        "name": "Kit Harrington",
        "age": "30"
    },
    {
        "id": "4",
        "name": "Kit Harrington",
        "age": "30"
    },
    {
        "id": "4",
        "name": "Kit Harrington",
        "age": "30"
    },
    {
        "id": "4",
        "name": "Kit Harrington",
        "age": "30"
    },
    {
        "id": "4",
        "name": "Kit Harrington",
        "age": "30"
    },
    {
        "id": "4",
        "name": "Kit Harrington",
        "age": "30"
    },
    {
        "id": "4",
        "name": "Kit Harrington",
        "age": "30"
    },
    {
        "id": "4",
        "name": "Kit Harrington",
        "age": "30"
    },
    {
        "id": "4",
        "name": "Kit Harrington",
        "age": "30"
    },
    {
        "id": "4",
        "name": "Kit Harrington",
        "age": "30"
    },
    {
        "id": "4",
        "name": "Kit Harrington",
        "age": "30"
    },
    {
        "id": "4",
        "name": "Kit Harrington",
        "age": "30"
    },
    {
        "id": "4",
        "name": "Kit Harrington",
        "age": "30"
    },
    {
        "id": "4",
        "name": "Kit Harrington",
        "age": "30"
    },
    {
        "id": "4",
        "name": "Kit Harrington",
        "age": "30"
    },
    {
        "id": "5",
        "name": "Sean Bean",
        "age": "50"
    }];
 
  getData() {
    return this.jsn;
        }
}
