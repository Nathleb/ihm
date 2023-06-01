import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { PokemonSet } from './classes/pokemonSet';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PokemonService {

  private baseUrl = 'http://localhost:3000';

  constructor(private http: HttpClient) { }

  getRandomPokemonSample(size: number): Observable<Array<PokemonSet>> {
    const url = `${this.baseUrl}/pokemons/randomSample`;

    const params = new HttpParams().set('size', size.toString());

    return this.http.get<Array<PokemonSet>>(url, { params });
  }
}
