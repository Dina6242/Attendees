import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomepageRoutingModule } from './homepage-routing.module';
import { AttendeesComponent } from './component/attendees/attendees.component';


@NgModule({
  declarations: [ AttendeesComponent],
  imports: [
    CommonModule,
    HomepageRoutingModule
  ]
})
export class HomepageModule { }
