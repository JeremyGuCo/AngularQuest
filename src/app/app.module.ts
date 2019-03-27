import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { HighlightDirective } from './user-profile/highlight.directive';
import { SignUpComponent } from './sign-up/sign-up.component';
import { UserProfileComponent } from './user-profile/user-profile.component';
import { MenuComponent } from './menu/menu.component';




@NgModule({
declarations: [
AppComponent,
HighlightDirective,
SignUpComponent,
UserProfileComponent,
MenuComponent,

],
imports: [
BrowserModule,
AppRoutingModule,
FormsModule,



],
providers: [],
bootstrap: [AppComponent]
})
export class AppModule { }