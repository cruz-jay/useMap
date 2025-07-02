import { NavLink, Outlet } from "react-router";
import { useState, useEffect } from "react";
import { X, Map, Calendar } from "lucide-react";
import useCitiesStore from "../store/useCitiesStore";
import Loader from "./Loader";
import { Card, CardContent } from "./ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "./ui/carousel";

function ImageCarousel({ images }) {
  return (
    <div className="flex justify-center w-full h-full relative">
      <Carousel className="w-full max-w-xs h-full relative">
        <CarouselContent>
          {images.map((img, index) => (
            <CarouselItem key={index}>
              <div className="p-1 h-full">
                <Card className="h-full bg-[#172a32] border-[#21373f]">
                  <CardContent className="flex aspect-square items-center justify-center p-6 h-full">
                    <img
                      src={img}
                      alt={`Image ${index + 1}`}
                      className="w-full h-full object-contain rounded-lg"
                      style={{ maxHeight: "300px" }}
                    />
                  </CardContent>
                </Card>
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious className="bg-[#1c3139] hover:bg-[#21373f] border-[#253e45] text-gray-300 absolute -left-2 top-1/2 transform -translate-y-1/2 z-10 h-8 w-8" />
        <CarouselNext className="bg-[#1c3139] hover:bg-[#21373f] border-[#253e45] text-gray-300 absolute -right-2 top-1/2 transform -translate-y-1/2 z-10 h-8 w-8" />
      </Carousel>
    </div>
  );
}

function SideBarContext() {
  const currentCity = useCitiesStore((s) => s.currentCity);
  const [showImages, setShowImages] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const setCurrentCity = useCitiesStore((s) => s.setCurrentCity);

  useEffect(() => {
    const handleImageTransition = async () => {
      if (currentCity?.images?.length > 0) {
        setIsLoading(true);
        try {
          await new Promise((resolve) => setTimeout(resolve, 500));
          setShowImages(true);
        } finally {
          setIsLoading(false);
        }
      } else {
        setShowImages(false);
      }
    };

    handleImageTransition();
  }, [currentCity]);

  if (isLoading) {
    return (
      <div className="flex h-full items-center justify-center pt-75">
        <Loader />
      </div>
    );
  }

  const handleRefresh = () => {
    setShowImages(false);
    setCurrentCity(null);
  };

  return (
    <div className="flex flex-col h-full relative">
      {!showImages ? (
        <>
          <nav>
            <ul className="space-y-4">
              <li>
                <NavLink
                  to="past-adventures"
                  className={({ isActive }) =>
                    `flex items-center p-3 rounded-lg transition-colors
                    ${
                      isActive
                        ? "bg-[#21373f]/70 text-white shadow-md"
                        : "hover:bg-[#1c3139]/70 hover:text-gray-300"
                    }`
                  }>
                  <Map className="mr-3" size={20} />
                  <span className="text-lg">Visited Cities</span>
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="future-adventures"
                  className={({ isActive }) =>
                    `flex items-center p-3 rounded-lg transition-colors
                    ${
                      isActive
                        ? "bg-[#21373f]/70 text-white shadow-md"
                        : "hover:bg-[#1c3139]/70 hover:text-gray-300"
                    }`
                  }>
                  <Calendar className="mr-3" size={20} />
                  <span className="text-lg">Plan on Visiting</span>
                </NavLink>
              </li>
            </ul>
          </nav>
          <div className="mt-3 flex-1 overflow-hidden rounded-none">
            <Outlet />
          </div>
        </>
      ) : (
        <div className="relative h-full rounded-none overflow-hidden pt-35">
          <button
            onClick={() => handleRefresh()}
            className="absolute top-25 right-5 z-10 p-2 bg-[#0e1c26]/80 rounded-full hover:bg-[#13232c] text-white transition-colors">
            <X size={24} />
          </button>
          {currentCity?.images && (
            <div className="w-full h-full ">
              <ImageCarousel images={currentCity.images} />
            </div>
          )}
        </div>
      )}
    </div>
  );
}

export default SideBarContext;
