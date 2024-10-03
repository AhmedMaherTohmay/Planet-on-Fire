import styled from "styled-components";
import { memo } from "react";
import SquareForest from "./SquareForest";
import IceSquare from "./IceSquare";
import SeaSquare from "./SeaSquare";
import SandSquare from "./SandSquare";
// import useStore from "../../store";

const Column = styled.div`
  display: flex;
  gap: 20px;
  flex-direction: column;
`;
const Row = styled.div`
  display: flex;
  flex-direction: row;

  gap: 10px;
`;

const GameGrid = memo(function GameGrid() {
  return (
    <Row>
      <Column>
        <IceSquare BackgroundColor="white" />
        <SeaSquare BackgroundColor="blue" />
      </Column>
      <Column>
        <SquareForest height={"320px"} width={"460px"} move={true} />
        <SandSquare height={"320px"} width={"460px"} move={true} />
      </Column>
    </Row>
  );
});

export default GameGrid;
