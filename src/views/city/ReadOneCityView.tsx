import {City} from "../../models/City";
import {Layout} from "../shared/Layout";
import { parkings } from "../../data/staticDatabase";

type ReadOneCityViewProps = {
    city: City;
    name:String
}



const ReadOneCityView =
({ city }: ReadOneCityViewProps) =>

<Layout pageTitle={city.name}>
    <div>
        <p>Ville n°{city.id}, {city.country} ({city.location.latitude},{city.location.longitude}) : {city.parkingsIds.length} parkings</p>
        <h2>Parkings disponibles :</h2>
        <ul>
            {parkings.filter(parking => parking.city_id === city.id).map((parking) => (
                <li key={parking.id}>
                    <a href={`/parkings/${parking.id}`}>{parking.name}</a>, {parking.hourlyRate}€/h
                </li>
            ))}
        </ul>
    </div>
</Layout>

export default ReadOneCityView;
