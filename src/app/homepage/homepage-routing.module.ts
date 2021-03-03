import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AttendeesComponent } from './component/attendees/attendees.component';

const routes: Routes = [{path: 'attendees', component: AttendeesComponent}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class HomepageRoutingModule {
}
