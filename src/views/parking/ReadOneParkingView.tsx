import Parking from "../../models/Parking";
import {Layout} from "../shared/Layout";

type ReadOneParkingViewProps = {
    parking: Parking;
}

const ReadOneCityView =
({ parking }: ReadOneParkingViewProps) =>

<Layout pageTitle={parking.name}>
    <div>
        <p>Parking n°{parking.id}, {parking.hourlyRate}€/h, {parking.numberOfSpots} places</p>
    </div>
</Layout>

export default ReadOneCityView;
