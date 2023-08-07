import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { PokemonSet } from './interfaces/pokemonSet';
import { map, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PokemonService {

  private baseUrl = 'http://localhost:3000';

  constructor(private http: HttpClient) { }

  getRandomPokemonSample(size: number): Observable<Array<PokemonSet>> {
    const url = `${this.baseUrl}/pokemons/randomSample`;

    const params = new HttpParams().set('size', size.toString());

    return this.http.get<Array<PokemonSet>>(url, { params })
      .pipe(
        map((data: Array<PokemonSet>) => {
          return data.map(pokemonSet => ({
            ...pokemonSet,
            baseStats: pokemonSet.baseStats ? new Map(Object.entries(pokemonSet.baseStats)) : new Map<string, number>(),
            evs: pokemonSet.evs ? new Map(Object.entries(pokemonSet.evs)) : new Map<string, number>(),
            ivs: pokemonSet.ivs ? new Map(Object.entries(pokemonSet.ivs)) : new Map<string, number>()
          }));;
        })
      );
  }
}
