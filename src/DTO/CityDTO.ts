import { City } from '../models/City';
import { Parking } from '../models/Parking';

export class CityDTO {
  id: number;
  name: string;
  country: string;
  location: string;
  parkingsIds: number[]=[];

  constructor(id: number, name: string, country: string, location: string, parkingsIds?: number[]) {
    this.id = id;
    this.name = name;
    this.country = country;
    this.location = location;
    if(parkingsIds){
      this.parkingsIds = parkingsIds;
    }
  }

  static fromDomain(city: City,parkingsIds?:number[]): CityDTO {
    return new CityDTO(
      city.id,
      city.name,
      city.country,
      city.location,
      parkingsIds,
    );
  }
}
