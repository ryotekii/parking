import {Layout} from "../shared/Layout";
import { CityDTO } from "../../DTO/CityDTO";
import { Parking } from "@prisma/client";

type ReadOneCityViewProps = {
    city: CityDTO;
    parkings: Parking[]
}



const ReadOneCityView =
({ city,parkings }: ReadOneCityViewProps) =>

<Layout pageTitle={city.name}>
    <div>
        <p>Ville n°{city.id}, {city.country} ({city.location}) : {city.parkingsIds.length} parkings</p>
        <h2>Parkings disponibles :</h2>
        <ul>
            {parkings.filter(parking => parking.cityId === city.id).map((parking) => (
                <li key={parking.id}>
                    <a href={`/parkings/${parking.id}`}>{parking.name}</a>, {parking.hourlyRate}€/h
                </li>
            ))}
        </ul>
    </div>
</Layout>

export default ReadOneCityView;
