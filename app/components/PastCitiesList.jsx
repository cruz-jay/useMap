import { usePastCities } from "../store/past-cities";
import PastCityItem from "./PastCityItem";

function PastCitiesList() {
  const { data: cities, isLoading, error } = usePastCities();

  const citiesArray = cities?.cities || [];

  if (citiesArray.length === 0)
    return <p className="text-white">No past cities yet.</p>;

  return (
    <div>
      <ul className="grid grid-cols-1 gap-4">
        {citiesArray.map((city) => (
          <PastCityItem key={city.id} city={city} />
        ))}
      </ul>
    </div>
  );
}

export default PastCitiesList;
