import { Taille } from "./taille";

export interface Boisson{
    id:number;
    nom:string,
    image?:string,
    prix:number,
    quantity:number;
    tailles:Taille[]
}