import { Parking } from "../../models/Parking";
import {Layout} from "../shared/Layout"


type ReadAllParkingsViewProps = {
    parkings: Array<Parking>;
}

const ReadAllCitiesView =
({ parkings }: ReadAllParkingsViewProps) =>

<Layout pageTitle={"Liste des Parkings"}>
    <div>
        <ul>
            {parkings.map((parking) => (
                <li key={parking.id}>
                    <a href={`/parkings/${parking.id}`}>Parking {parking.name}</a> {parking.hourlyRate}€/h, {parking.numberOfSpots} places
                </li>
            ))}
        </ul>
        </div>
</Layout>

export default ReadAllCitiesView;
