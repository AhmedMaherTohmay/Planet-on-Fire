import styled from "styled-components";

import SeaAnimal from "./SeaAnimal";
const Div = styled.div`
  width: 230px;
  min-height: 320px;
  border: 1px black solid;
  overflow: hidden;
  background: url("../../public/nasa data/seaBack.gif");
  position: relative;
  box-shadow: rgb(38, 57, 77) 0px 20px 30px -10px;
  border-radius: 20px;
`;

let seaAnimals = [
  "🐠",
  "🐡",
  "🦈",
  "🐟",
  "🐳",
  "🐬",
  "🐠",
  "🐡",
  "🦈",
  "🐟",
  "🐳",
  "🐬",
  "🐠",
  "🐡",
  "🦈",
  "🐟",
  "🐳",
  "🐬",
];

function SeaSquare() {
  return (
    <Div>
      {/* {seaAnimals.map((animal) => (
        <SeaAnimal move={true}>{animal}</SeaAnimal>
      ))} */}
    </Div>
  );
}

export default SeaSquare;
