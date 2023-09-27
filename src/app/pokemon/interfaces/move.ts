export interface Move {
    name: string;
    description: string;
    pp: number;
    damage: number;
    accuracy: number | boolean;
    type: string;
    category: string;
}
