import { City } from "@prisma/client";
export class CityDTO{
    id:number;
    name:string;
    slug:string;
    parkingsIds:number[];
    country:string;
    location: string;
    constructor(city: City, parkingsIds: number[]) {
        this.id = city.id;
        this.name = city.name;
        this.slug = city.slug;
        this.parkingsIds = parkingsIds;
        this.country = city.country;
        this.location = city.location;
    }
}