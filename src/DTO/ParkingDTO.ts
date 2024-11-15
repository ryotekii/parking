import { Parking } from "../models/Parking";

export class ParkingDTO{
    id:number;
    name:string;
    cityId:number;
    location:string;
    numberOfSpots:number;
    opened:boolean|null=true;
    hourlyRate?:number|null;
    constructor(i:number,n:string,c:number,l:string,nos:number,o:boolean,hr:number){
        this.id=i;
        this.name=n;
        this.cityId=c;
        this.location=l;
        this.numberOfSpots=nos;
        this.opened=o;
        this.hourlyRate=hr;
    }

    static fromDomain(parking:Parking){
        return new ParkingDTO(
            parking.id,
            parking.name,
            parking.cityId,
            parking.location,
            parking.numberOfSpots,
            parking.opened,
            parking.hourlyRate
        );
    }
}