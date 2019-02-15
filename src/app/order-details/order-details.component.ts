import { Component, OnInit } from '@angular/core';
import { OrderDetailsService } from './order-details.service';

@Component({
  selector: 'app-order-details',
  templateUrl: './order-details.component.html',
  styleUrls: ['./order-details.component.css']
})


export class OrderDetailsComponent implements OnInit {
  name : string;

  constructor(private orderDetailsService:OrderDetailsService) { }

  ngOnInit() {
    this.orderDetailsService.getAll().subscribe(data => {
      this.name = data;
    });

    
  }

}