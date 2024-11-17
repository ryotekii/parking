import {Layout} from "../shared/Layout";
import City from "../../models/City";
import Parking from "../../models/Parking";

type ReadOneCityViewProps = {
    city: City;
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
