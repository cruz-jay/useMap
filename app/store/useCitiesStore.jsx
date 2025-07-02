import { create } from "zustand";

const useCitiesStore = create((set, get) => ({
  currentCity: null,

  setCurrentCity: (city) => set({ currentCity: city }),

  getCity: (id) => {
    const cities = get().cities;
    return cities.find((city) => city.id === id) || null;
  },

  // Optional: include this if you want to cache cities in Zustand too
  //   cities: [],
  //   setCities: (cities) => set({ cities }),
}));

export default useCitiesStore;
