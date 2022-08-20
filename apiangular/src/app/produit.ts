import { Burger } from "./burger";
import { Menu } from "./menu";

export interface Produit{
    id:number,
    nom:string,
    prix:number,
    produits:Menu[],
    quantite:number
    produit:Burger[],
    type:string,
}