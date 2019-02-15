import { NgModule } from '@angular/core';
import { MatButtonModule, MatCheckboxModule,
  MatIconModule, MatMenuModule, MatSidenavModule,
  MatExpansionModule, MatListModule,MatSelectModule,
  MatInputModule } from '@angular/material';
import { MatToolbarModule } from '@angular/material/toolbar';
import { FlexLayoutModule } from '@angular/flex-layout';
import { HttpClientModule } from '@angular/common/http';
import { Ng2SmartTableModule } from 'ng2-smart-table';


@NgModule({
  imports: [
    MatSelectModule,
    MatInputModule, 
    MatButtonModule,
    MatCheckboxModule,
    MatToolbarModule,
    MatIconModule,
    MatMenuModule,
    MatSidenavModule,
    FlexLayoutModule,
    MatExpansionModule,
    MatListModule,
    HttpClientModule,
    Ng2SmartTableModule
  ],
  exports: [
    MatSelectModule,
    MatInputModule, 
    MatButtonModule,
    MatCheckboxModule,
    MatToolbarModule,
    MatIconModule,
    MatMenuModule,
    MatSidenavModule,
    FlexLayoutModule,
    MatExpansionModule,
    MatListModule,
    HttpClientModule,
    Ng2SmartTableModule
  ],
})
export class SharedModule { }
