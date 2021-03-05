import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomepageRoutingModule } from './homepage-routing.module';
import { AttendeesComponent } from './component/attendees/attendees.component';
import { ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [ AttendeesComponent],
    imports: [
        CommonModule,
        HomepageRoutingModule,
        ReactiveFormsModule,
    ],
})
export class HomepageModule { }
