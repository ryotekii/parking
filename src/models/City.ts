import Parking from "./Parking";
import type {GPS} from "./GPS.ts";
import {toSlug} from "../utils/toSlug"
import { cityEntity } from "@prisma/client";

export default class City{
    id:number;
    name:string;
    slug:string;
    parkingsIds:number[]=[];
    country:string;
    location:string;

    constructor(i:number,n:string,c:string,l:string){
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
        p.cityId=this.id;
        p.location=this.location;
    }

    static fromEntity(city:cityEntity){
        return new City(
            city.id,
            city.name,
            city.country,
            city.location
        );
    }
}