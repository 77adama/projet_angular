import { Boisson } from "./boisson";
import { Burger } from "./burger";
import { Fritte } from "./fritte";
import { menuBoissons } from "./menuBoissons";

export interface Menu{
    menuBoissons: any;
    id:number;
    nom:string,
    image:string,
    menuBoisson:menuBoissons[],
    boisson:Boisson[],
    fritte:Fritte[],
    prix:number;
    quantity:number;
}