import { Leg } from "./leg";

export interface Player {
    name: string,
    id: number;
    wonLegs: number;
    legs: Leg[];
}