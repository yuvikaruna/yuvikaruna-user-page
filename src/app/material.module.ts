import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {
  MatButtonModule, MatCheckboxModule, MatCardModule, MatToolbarModule,
  MatTabsModule
} from '@angular/material';
@NgModule({
  imports: [
    CommonModule,
    MatButtonModule, MatCheckboxModule, MatCardModule, MatToolbarModule,
    MatTabsModule
  ],
  exports: [
    MatButtonModule, MatCheckboxModule, MatCardModule, MatToolbarModule,
    MatTabsModule
  ],
  declarations: []
})
export class MaterialModule { }
