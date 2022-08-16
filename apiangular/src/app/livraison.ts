import { Commande } from "./commande";
import { Livreur } from "./livreur";
import { Zones } from "./zone";

export interface Livraison{
    id:number;
    zone:Zones[],
    livreur:Livreur
    commandes:Commande[],
    quantity:number;
}