import { Livraison } from "./livraison";

export interface Livreur{
    id:number,
    nom:string,
    email:string,
    prenom:string,
    matricule:string,
    etatLiv:string,
    livraisons:Livraison[],
}