import styled from "styled-components";
import ControlRow from "./ControlRow";
import useStore from "../../store";

const H1 = styled.h1`
  text-align: center;
  color: aliceblue;
`;

function Controller() {
  const rain = useStore((state) => state.rain);
  const setRain = useStore((state) => state.setRain);
  const temp = useStore((state) => state.temp);
  const setTemp = useStore((state) => state.setTemp);
  const humidity = useStore((state) => state.humidity);
  const setHumidity = useStore((state) => state.setHumidity);
  const plastic = useStore((state) => state.plastic);
  const setPlastic = useStore((state) => state.setPlastic);
  const fossilFuel = useStore((state) => state.fossilFuel);
  const setFossilFuel = useStore((state) => state.setFossilFuel);
  const windSpeed = useStore((state) => state.windSpeed);
  const setWindSpeed = useStore((state) => state.setWindSpeed);
  const windDirection = useStore((state) => state.windDirection);
  const setWindDirection = useStore((state) => state.setWindDirection);

  function handleNumOfForestAnimals() {}
  function handleNumOfCamels() {}
  function handleNumOfForestTrees() {}
  function handleNumOfIceLayers() {}
  function handleNumOfWaterLayers() {}
  return (
    <>
      <H1>Environmental Data</H1>
      <div style={{ display: "flex", flexDirection: "column", gap: "10px" }}>
        <ControlRow factor={1} state={rain} setState={setRain} name="Rain" />
        <ControlRow
          factor={1}
          state={temp}
          setState={setTemp}
          name="Temperature"
        />
        <ControlRow
          factor={1}
          state={humidity}
          setState={setHumidity}
          name="Humidity"
        />
        <ControlRow
          factor={0.1}
          state={plastic}
          setState={setPlastic}
          name="Plastic"
        />
        <ControlRow
          factor={1}
          state={fossilFuel}
          setState={setFossilFuel}
          name="Fossil Fuel"
        />
        <ControlRow
          factor={1}
          state={windSpeed}
          setState={setWindSpeed}
          name="Wind Speed"
        />
        <ControlRow
          state={windDirection}
          setState={setWindDirection}
          name="Wind Direction"
          wind={true}
        />
      </div>
    </>
  );
}

export default Controller;
