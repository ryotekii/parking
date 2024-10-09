import {City} from "../../models/City";
import {Layout} from "../shared/Layout"


type ReadAllCitiesViewProps = {
    cities: Array<City>; //parkings
}

const ReadAllCitiesView =
({ cities }: ReadAllCitiesViewProps) =>

<Layout pageTitle={"Liste des villes"}>
    <div>
        <ul>
            {cities.map((city) => (
                <li key={city.id}>
                    <a href={`/cities/${city.slug}`}>{city.name}</a>, {city.country}, {city.parkingsIds.length} parkings
                </li>
            ))}
        </ul>
        </div>
</Layout>

export default ReadAllCitiesView;
