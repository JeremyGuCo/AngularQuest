import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SignUpComponent } from './sign-up/sign-up.component';
import { UserProfileComponent } from './user-profile/user-profile.component';
import { CommonModule } from '@angular/common';



const routes: Routes = [
{ path: 'sign-up', component: SignUpComponent },
{ path: 'user-profile', component: UserProfileComponent },
{ path: '', component: UserProfileComponent },
];

@NgModule({
declarations: [],

imports: [
CommonModule,
[RouterModule.forRoot(routes)]],

exports: [RouterModule]
})
export class AppRoutingModule { }