import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgProgressModule } from '@ngx-progressbar/core';
import { NgProgressRouterModule } from '@ngx-progressbar/router';
import { ServiceWorkerModule } from '@angular/service-worker';
import { environment } from '../environments/environment';
import { HttpClientModule } from '@angular/common/http';
import { SharedModule } from './shared/shared.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { InventoryComponent } from './inventory/inventory.component';
import {MatFormFieldModule, MatInputModule } from '@angular/material';
import { OrderDetailsComponent } from './order-details/order-details.component';
import { TableService } from './inventory/inventory.service';

@NgModule({
  declarations: [
    AppComponent,
    InventoryComponent,
    OrderDetailsComponent,
    
  ],
  providers:[TableService],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    SharedModule,
    AppRoutingModule,
    MatInputModule,
    NgProgressModule.forRoot(),
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    MatFormFieldModule,
    NgProgressRouterModule,
    ServiceWorkerModule.register('/ngsw-worker.js', { enabled: environment.production })

  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
