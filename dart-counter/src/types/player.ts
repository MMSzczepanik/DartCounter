import { Leg } from "./leg";

export interface Player {
    name: string,
    wonLegs: number;
    legs: Leg[];
}