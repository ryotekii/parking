import type {GPS} from "./GPS.ts";
import {Spot} from "./Spot";
import {Park} from "./Park";
import {City} from "./City";
import { generateRandomNumberId } from "../utils/generateRandomNumberId.js";

export class Parking{
    id:number;
    name:string;
    city_id:number;
    location:GPS;
    numberOfSpots:number;
    opened:boolean=true;
    hourlyRate?:number;
    parksIds:number[]=[];

    constructor(n:string,nos:number,hr:number,c:City,id?:number){
        if (id){
            this.id=id;
        } else {
            this.id=generateRandomNumberId();
        }
        this.name=n;
        if (nos>=0 && Number.isInteger(nos)){
            this.numberOfSpots=nos;
            for (let i=0;i<nos;i++){
                let s = new Spot(this.id);
                this.parksIds.push(Spot.id);
            }
        }
        if (hr>0){
            this.hourlyRate=hr;
        }
        this.city_id=c.id;
        this.location=c.location;
        this.numberOfSpots=nos;
    }

    add(park:Park){
        if (this.parksIds.includes(park.id)){
            this.parksIds.push();
        }
    }
}