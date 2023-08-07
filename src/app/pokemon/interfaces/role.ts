export interface Role {
    name: string;
    weight: number;
    items: Map<string, number>;
    abilities: Map<string, number>;
    teraTypes: Map<string, number>;
    moves: Map<string, number>;
    evs: Map<string, number>;
    ivs: Map<string, number>;
}