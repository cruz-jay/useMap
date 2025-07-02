import useCitiesStore from "../store/useCitiesStore";

const formatDate = (date) =>
  new Intl.DateTimeFormat("en", {
    day: "numeric",
    month: "long",
    year: "numeric",
  }).format(new Date(date));

function PastCityItem({ city }) {
  const setCurrentCity = useCitiesStore((s) => s.setCurrentCity);
  const currentCity = useCitiesStore((s) => s.currentCity);

  const { cityName, emoji, date } = city;

  return (
    <li
      onClick={() => setCurrentCity(city)}
      className={` p-3 rounded-lg flex items-center gap-4 group h-full cursor-pointer transition-colors
        ${
          city.id === currentCity?.id
            ? "ring-2 ring-[#253e45] bg-[#172a32]"
            : ""
        }`}>
      <span className="text-3xl group-hover:text-gray-400 text-white">
        {emoji}
      </span>
      <div className="flex-1">
        <h3 className="font-semibold text-2xl text-gray-200 group-hover:text-gray-300">
          {cityName}
        </h3>
        <time className="text-md text-gray-400 group-hover:text-gray-500">
          {formatDate(date)}
        </time>
      </div>
    </li>
  );
}

export default PastCityItem;
