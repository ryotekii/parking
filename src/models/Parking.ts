import type {GPS} from "./GPS.ts";
import Spot from "./Spot";
import Park from "./Park";
import City from "./City";
import { generateRandomNumberId } from "../utils/generateRandomNumberId.js";
import { parkingEntity } from "@prisma/client";

export default class Parking{
    id:number;
    name:string;
    cityId:number;
    location:string;
    numberOfSpots:number;
    opened:boolean=true;
    hourlyRate:number;
    parksIds:number[]=[];

    constructor(n:string,nos:number,hr:number,c:number,l:string,id?:number){
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
        this.hourlyRate=hr;
        this.cityId=c;
        this.location=l;
        this.numberOfSpots=nos;
    }

    add(park:Park){
        if (this.parksIds.includes(park.id)){
            this.parksIds.push();
        }
    }

    static fromEntity(parking:parkingEntity){
        return new Parking(
            parking.name,
            parking.numberOfSpots,
            parking.hourlyRate,
            parking.cityId,
            parking.location,
            parking.id,
        );
    }
}