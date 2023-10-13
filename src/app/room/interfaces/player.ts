import { PokemonSet } from "src/app/pokemon/interfaces/pokemonSet";

export interface Player {
    nickname: string;
    toChoseFrom: PokemonSet[];
    team: PokemonSet[];
    sit: number;
    hasPicked: boolean;
    isConnected: boolean;
}