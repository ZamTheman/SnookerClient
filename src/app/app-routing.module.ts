import { NgModule } from '@angular/core';
import { RouterModule } from "@angular/router";

import { GamesComponent } from './games/games.component';
import { PlayersComponent } from './players/players.component';
import { HomeComponent } from './home/home.component';

const appRoutes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'home', component: HomeComponent },
  { path: 'players', component: PlayersComponent },
  { path: 'games', component: GamesComponent }
]

@NgModule({
  imports: [RouterModule.forRoot(appRoutes)],
  exports: [RouterModule]
})
export class AppRoutingModule{

}