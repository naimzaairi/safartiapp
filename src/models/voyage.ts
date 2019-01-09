import { DateTime } from "ionic-angular";

export interface Voyage {
    depart: string;
    destination: string;
    date: DateTime;
    heure: DateTime;
    prix: number;
    places: number;
    rdv: Text;
    infos: Text;
    organisateur: string;
}