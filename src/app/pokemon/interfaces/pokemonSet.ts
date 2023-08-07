import { KeyWord } from './keyWord';
import { Move } from './move';

export interface PokemonSet {
    name: string;
    level: number;
    ability: KeyWord;
    item: KeyWord;
    moves: Array<Move>;
    teraType: string;
    role: string;
    evs: Map<string, number>;
    ivs: Map<string, number>;
    sprite: string;
    types: Array<string>;
    baseStats: Map<string, number>;
}
