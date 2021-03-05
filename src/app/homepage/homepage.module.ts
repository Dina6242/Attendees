import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomepageRoutingModule } from './homepage-routing.module';
import { AttendeesComponent } from './component/attendees/attendees.component';
import { ReactiveFormsModule } from '@angular/forms';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';


@NgModule({
  declarations: [ AttendeesComponent],
  imports: [
    CommonModule,
    HomepageRoutingModule,
    ReactiveFormsModule,
    FontAwesomeModule,
  ],
})
export class HomepageModule { }
