import { Parking } from "@prisma/client";

export class ParkingDTO{
    id:number;
    name:string;
    city_id:number;
    location:string;
    numberOfSpots:number;
    opened:boolean|null=true;
    hourlyRate?:number|null;
    constructor(parking:Parking){
        this.id=parking.id;
        this.name=parking.name;
        this.city_id=parking.cityId;
        this.location=parking.location;
        this.numberOfSpots=parking.numberOfSpots;
        this.opened=parking.opened;
        this.hourlyRate=parking.hourlyRate;
    }
}