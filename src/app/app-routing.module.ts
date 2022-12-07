import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {HomeComponent} from "./component/home/home.component";
import {NewsComponent} from "./component/news/news.component";
import {EventsComponent} from "./component/events/events.component";
import {ContactsComponent} from "./component/contacts/contacts.component";
import {RegisterComponent} from "./component/register/register.component";
import {SigninComponent} from "./component/signin/signin.component";
import {NotFoundComponent} from "./component/not-found/not-found.component";

const routes: Routes = [
  {path:"", redirectTo:"/home", pathMatch:"full"},
  {path:"home", component:HomeComponent},
  {path:"news", component:NewsComponent},
  {path:"events", component:EventsComponent},
  {path:"contact", component:ContactsComponent},
  {path:"register", component:RegisterComponent},
  {path:"signIn", component:SigninComponent},
  {path:"**", component:NotFoundComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
