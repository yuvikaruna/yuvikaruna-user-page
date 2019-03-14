import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProfileComponent } from './profile/profile.component';
import { HomeComponent } from './home/home.component';
import { SharedModule } from '../shared/shared.module';

@NgModule({
  imports: [
    CommonModule, SharedModule
  ],
  declarations: [ProfileComponent, HomeComponent]
})
export class HomeModule { }
