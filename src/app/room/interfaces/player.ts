import { PokemonSet } from "src/app/pokemon/interfaces/pokemonSet";

export interface Player {
    pseudo: string;
    toChoseFrom: PokemonSet[];
    team: PokemonSet[];
    sit: number;
    hasPicked: boolean;
}