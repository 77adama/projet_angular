import { Client } from "./Client";
import { Produit } from "./produit";

export interface Commande{
    id:number,
    nom:string,
    etat:string,
    produits:Produit[],
    quantite:number
    client:Client[],
    zones:Zone[],
    timeAt:number,
}

