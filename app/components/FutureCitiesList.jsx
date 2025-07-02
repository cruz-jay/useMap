import FutureCityItem from "./FutureCitiesItem";
import { useFutureCities } from "../store/future-cities";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "./ui/carousel";
import { Card, CardContent } from "./ui/card";

function FutureCitiesList() {
  const { data: cities, isLoading, error } = useFutureCities();
  const citiesArray = cities?.cities || [];

  if (citiesArray.length === 0)
    return <p className="text-white">No past cities yet.</p>;

  return (
    <div className="flex justify-center w-full relative pt-20 pb-20">
      <Carousel
        opts={{ align: "start", loop: true }}
        orientation="vertical"
        className="w-full max-w-xs relative">
        <CarouselContent className="-mt-1 h-[400px]">
          {citiesArray.map((city) => (
            <CarouselItem key={city.id} className="pt-1 md:basis-1/2">
              <div className="p-1">
                <Card className="bg-[#172a32] border-[#21373f]">
                  <CardContent className="flex items-center justify-center p-6">
                    <FutureCityItem city={city} />
                  </CardContent>
                </Card>
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious className="bg-[#1c3139] hover:bg-[#21373f] border-[#253e45] text-gray-300 left-1/2 transform -translate-x-1/2 rotate-90 z-10" />
        <CarouselNext className="bg-[#1c3139] hover:bg-[#21373f] border-[#253e45] text-gray-300 absolute -bottom-10 left-1/2 transform -translate-x-1/2 rotate-90 z-1" />
      </Carousel>
    </div>
  );
}

export default FutureCitiesList;
