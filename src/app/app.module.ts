import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { HighlightDirective } from './user-profile/highlight.directive';
import { SignUpComponent } from './sign-up/sign-up.component';
import { UserProfileComponent } from './user-profile/user-profile.component';
import { MenuComponent } from './menu/menu.component';
import { CocktailListComponent } from './cocktail-list/cocktail-list.component';
import { HttpClientModule } from  '@angular/common/http';
import { NasaComponent } from './nasa/nasa.component';




@NgModule({
declarations: [
AppComponent,
HighlightDirective,
SignUpComponent,
UserProfileComponent,
MenuComponent,
CocktailListComponent,
NasaComponent,


],
imports: [
BrowserModule,
AppRoutingModule,
FormsModule,
HttpClientModule,



],
providers: [],
bootstrap: [AppComponent]
})
export class AppModule { }