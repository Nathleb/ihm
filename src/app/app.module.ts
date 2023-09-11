import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
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
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatCardModule } from '@angular/material/card';
import { MatListModule } from '@angular/material/list';
import { MatIconModule } from '@angular/material/icon';
import { MatProgressBarModule } from '@angular/material/progress-bar';
import { MatInputModule } from '@angular/material/input';
import { MatBadgeModule } from '@angular/material/badge';

import { DragDropModule, CdkDropList, CdkDrag, CdkDragPreview } from '@angular/cdk/drag-drop';
import { MatTooltipModule } from '@angular/material/tooltip';
import { AccueilComponent } from './accueil/accueil.component';
import { RoomComponent } from './room/room.component';
import { TableSitsComponent } from './room/table-sits/table-sits.component';
import { GameParametersFormComponent } from './accueil/game-parameters-form/game-parameters-form.component';
import { ToolbarComponent } from './toolbar/toolbar.component';
import { RoomListComponent } from './accueil/room-list/room-list.component';
import { NicknameFormComponent } from './accueil/nickname-form/nickname-form.component';

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
    TableSitsComponent,
    GameParametersFormComponent,
    ToolbarComponent,
    RoomListComponent,
    NicknameFormComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    BrowserAnimationsModule,
    MatButtonModule,
    MatCardModule,
    MatListModule,
    MatProgressBarModule,
    MatBadgeModule,
    MatTooltipModule,
    CdkDropList,
    CdkDrag,
    CdkDragPreview,
    DragDropModule,
    MatInputModule,
    FormsModule,
    MatToolbarModule,
    MatIconModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
