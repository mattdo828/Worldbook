import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from './components/home/home.component';
import { CharactersComponent } from './components/characters/characters.component';
import { NgModule } from '@angular/core';


export const routes: Routes = [
    { path: '', component: HomeComponent },
    { path: 'characters', component: CharactersComponent }
  ];
