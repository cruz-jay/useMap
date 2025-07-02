import FutureCityItem from "./FutureCitiesItem";
import { useFutureCities } from "../store/future-cities";

function FutureCitiesList() {
  const { data: cities, isLoading, error } = useFutureCities();

  const citiesArray = cities?.cities || [];

  if (citiesArray.length === 0)
    return <p className="text-white">No past cities yet.</p>;

  return (
    <div>
      <ul className="grid grid-cols-1 gap-4">
        {citiesArray.map((city) => (
          <FutureCityItem key={city.id} city={city} />
        ))}
      </ul>
    </div>
  );
}

export default FutureCitiesList;
