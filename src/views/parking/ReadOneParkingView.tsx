import {Parking} from "../../models/Parking";
import {Layout} from "../shared/Layout";
import { parkings } from "../../data/staticDatabase";
import { ParkingDTO } from "../../DTO/ParkingDTO";

type ReadOneParkingViewProps = {
    parking: ParkingDTO;
}

const ReadOneCityView =
({ parking }: ReadOneParkingViewProps) =>

<Layout pageTitle={parking.name}>
    <div>
        <p>Parking n°{parking.id}, {parking.hourlyRate}€/h, {parking.numberOfSpots} places</p>
    </div>
</Layout>

export default ReadOneCityView;
