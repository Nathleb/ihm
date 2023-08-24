import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PokemonCardComponent } from './pokemon/pokemon-card/pokemon-card.component';
import { PokemonCardGridComponent } from './pokemon/pokemon-card-grid/pokemon-card-grid.component';
import { PokemonCardTypesComponent } from './pokemon/pokemon-card/pokemon-card-types/pokemon-card-types.component';
import { PokemonCardMovesComponent } from './pokemon/pokemon-card/pokemon-card-moves/pokemon-card-moves.component';
import { PokemonCardKeywordsComponent } from './pokemon/pokemon-card/pokemon-card-keywords/pokemon-card-keywords.component';
import { PokemonCardStatsComponent } from './pokemon/pokemon-card/pokemon-card-stats/pokemon-card-stats.component';
import { StatProgressBarComponent } from './pokemon/pokemon-card/pokemon-card-stats/stat-progress-bar/stat-progress-bar.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';


import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatListModule } from '@angular/material/list';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatProgressBarModule } from '@angular/material/progress-bar';
import { MatBadgeModule } from '@angular/material/badge';
import { CdkDropList, CdkDrag } from '@angular/cdk/drag-drop';
import { MatTooltipModule } from '@angular/material/tooltip';
import { AccueilComponent } from './accueil/accueil.component';
import { RoomComponent } from './room/room.component';

@NgModule({
  declarations: [
    AppComponent,
    PokemonCardComponent,
    PokemonCardGridComponent,
    PokemonCardTypesComponent,
    PokemonCardMovesComponent,
    PokemonCardKeywordsComponent,
    PokemonCardStatsComponent,
    AccueilComponent,
    RoomComponent,
    StatProgressBarComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    BrowserAnimationsModule,
    MatButtonModule,
    MatCardModule,
    MatGridListModule,
    MatListModule,
    MatProgressBarModule,
    MatBadgeModule,
    MatTooltipModule,
    CdkDropList,
    CdkDrag
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
