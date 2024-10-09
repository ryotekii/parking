import {Parking} from "./Parking";
import type {GPS} from "./GPS.ts";
import {toSlug} from "../utils/toSlug"

export class City{
    id:number;
    name:string;
    slug:string;
    parkingsIds:number[]=[];
    country:string;
    location:GPS;

    constructor(i:number,n:string,c:string,l:GPS){
        this.name=n;
        this.slug=toSlug(n);
        this.country=c;
        this.location=l;
        this.id=i;
    }

    add(p:Parking){
        if (!this.parkingsIds.includes(p.id)){
            this.parkingsIds.push(p.id);
        }
        p.city_id=this.id;
        p.location=this.location;
    }

}