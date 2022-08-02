import { Boisson } from "./boisson";
import { Burger } from "./burger";
import { Fritte } from "./fritte";

export interface Menu{
    id:number;
    nom:string,
    image:string,
    burger:Burger[],
    boisson:Boisson[],
    fritte:Fritte[],
    prix:number;
    quantity:number;
}