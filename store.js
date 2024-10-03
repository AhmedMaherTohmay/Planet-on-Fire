// store.js
import { create } from "zustand";
// Helper function to generate random items

// Initial values for available animals and elements
const availableForestAnimals = ["🐑", "🐎", "🐖", "🐄"];
const availableForestTrees = ["🌳", "🌲", "🌴"];
const availableIceLand = ["⛄", "☃️", "🗻", "⬜", "❄️"];
const availableSeaAnimals = ["⛵", "🐠", "🐡", "🦈", "🐟"];
const availableNormalLand = ["⛰️", "🏔️"];
const availableWeather = ["☁️", "🌧️", "🌦️", "⛈️"];
const useStore = create((set) => ({
  // for map

  // Initial state
  rain: 0,
  generate: false,

  numOfForestAnimals: 20,
  numOfForestTrees: 50,

  fishes: 20,
  iceAnimals: 10,

  numOfCamels: 10,
  numOfIceLayers: 40,
  numOfWaterLayers: 120,

  temp: 25,
  humidity: 50,

  plastic: 0,
  fossilFuel: 0,

  windSpeed: 10,
  windDirection: 0,

  // Actions to update the state
  setRain: (value) => set({ rain: value }),
  setGenerate: (value) => set({ generate: value }),

  setNumOfForestAnimals: (value) => set({ numOfForestAnimals: value }),
  setNumOfForestTrees: (value) => set({ numOfForestTrees: value }),

  setFishes: (value) => set({ fishes: value }),
  setIceAnimals: (value) => set({ iceAnimals: value }),

  setNumOfCamels: (value) => set({ numOfCamels: value }),
  setNumOfIceLayers: (value) => set({ numOfIceLayers: value }),
  setNumOfWaterLayers: (value) => set({ numOfWaterLayers: value }),

  setTemp: (value) => set({ temp: value }),
  setHumidity: (value) => set({ humidity: value }),

  setPlastic: (value) => set({ plastic: value }),
  setFossilFuel: (value) => set({ fossilFuel: value }),

  setWindSpeed: (value) => set({ windSpeed: value }),
  setWindDirection: (value) => set({ windDirection: value }),
}));

export default useStore;
