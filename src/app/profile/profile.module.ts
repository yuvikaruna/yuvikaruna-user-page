import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProfileComponent } from './profile.component';
import { MaterialModule } from '../material.module';

@NgModule({
  imports: [
    CommonModule , MaterialModule
  ],
  declarations: [ProfileComponent]
})
export class ProfileModule { }
