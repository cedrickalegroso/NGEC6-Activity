import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AboutmeComponent } from './aboutme/aboutme.component';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { PrelimComponent } from './prelim/prelim.component';
import { ActFinalsComponent } from './act-finals/act-finals.component';
import { ArtowrkComponent } from './artowrk/artowrk.component';


const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
},
  {
    path: 'about',
    component: AboutmeComponent,
},

{
  path: 'prelim',
  component: PrelimComponent,
},

{
  path: 'artwork',
  component: ArtowrkComponent,
},


{
  path: 'activityfinals',
  component: ActFinalsComponent,
},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
