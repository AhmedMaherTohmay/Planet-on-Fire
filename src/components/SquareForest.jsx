import styled from "styled-components";
import ForestAnimal from "./ForestAnimal";
import ForestTrees from "./ForestTrees";
// import { forestTrees } from "../../public/data";
const Div = styled.div`
  width: ${(props) => props.width || "230px"};
  height: ${(props) => props.height || "160px"};
  border: 1px black solid;
  box-shadow: rgb(38, 57, 77) 0px 20px 30px -10px;
  border-radius: 80px;
  background: url("../../public/nasa data/forestBack.gif");
  background-size: cover;

  position: relative;
`;

let forestAnimals = [
  "🐑",
  "🐎",
  "🐖",
  "🐄",
  "🐑",
  "🐎",
  "🐖",
  "🐄",
  "🐑",
  "🐎",
  "🐖",
  "🐄",
  "🐑",
  "🐎",
  "🐖",
  "🐄",
  "🐑",
  "🐎",
  "🐖",
  "🐄",
  "🐑",
  "🐎",
  "🐖",
  "🐄",
];

let forestTrees = [
  //   "🌳",
  //   "🌲",
  //   "🌴",
  //   "🌳",
  //   "🌲",
  //   "🌴",
  //   "🌳",
  //   "🌲",
  //   "🌴",
  //   "🌳",
  //   "🌲",
  //   "🌴",
  //   "🌳",
  //   "🌲",
  //   "🌴",
  //   "🌳",
  //   "🌲",
  //   "🌴",
  //   "🌳",
  //   "🌲",
  //   "🌴",
  //   "🌳",
  //   "🌲",
  //   "🌴",
];

function SquareForest({ width, height, move = null }) {
  return (
    <Div width={width} height={height}>
      {/* {forestAnimals.map((animal) => (
        <ForestAnimal key={Math.floor(Math.random() * 1000)} move={move}>
          {animal}
        </ForestAnimal>
      ))}
      {forestTrees?.map((animal) => (
        <ForestTrees key={Math.floor(Math.random() * 1000)}>
          {animal}
        </ForestTrees>
      ))} */}
    </Div>
  );
}

export default SquareForest;
