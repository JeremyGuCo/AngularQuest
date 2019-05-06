import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SignUpComponent } from './sign-up/sign-up.component';
import { UserProfileComponent } from './user-profile/user-profile.component';
import { CommonModule } from '@angular/common';
import { SearchMovieComponent } from './search-movie/search-movie.component';
import { CocktailListComponent } from './cocktail-list/cocktail-list.component';
import { NasaComponent } from './nasa/nasa.component';
import { YodaComponent } from './yoda/yoda.component';



const routes: Routes = [
{ path: 'sign-up', component: SignUpComponent },
{ path: 'user-profile', component: UserProfileComponent },
{ path: 'search-movie', component: SearchMovieComponent},
{ path: '', component: UserProfileComponent },
{ path: 'cocktail-list', component: CocktailListComponent},
{ path: 'nasa', component: NasaComponent },
{ path: 'yoda', component: YodaComponent },
];

@NgModule({
declarations: [],

imports: [
CommonModule,
[RouterModule.forRoot(routes)]],

exports: [RouterModule]
})
export class AppRoutingModule { }