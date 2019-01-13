import { Profile } from "./profile";

export interface Voyage {
    key?: string;
    depart: string;
    destination: string;
    date: string;
    heure: string;
    prix: number;
    places: number;
    rdv: string;
    infos: string;
    participants: Profile[];
}