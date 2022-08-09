import { Commande } from "./commande";

export interface Client{
    id:number;
    nom:string,
    commandes:Commande[],
    email:string,
    telephone:number,

}
