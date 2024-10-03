import styled from "styled-components";
import IceAnimal from "./IceAnimal";

const Div = styled.div`
  width: ${(props) => props.height || "230px"};
  height: ${(props) => props.width || "160px"};
  position: relative;
  border: 1px black solid;
  background: url("../../public/nasa data/iceBackDone.gif");
  background-size: cover;
  box-shadow: rgb(38, 57, 77) 0px 20px 30px -10px;
  border-radius: 20px;
  background-color: ${(props) => props.BackgroundColor || ""};
`;
// "🗻",
// "❄️",
// "⛄", "☃️"
// "🗯️", "💭"
let iceAnimals = ["🐧", "🦣", "🐧", "🦣", "🐧", "🦣", "🐧", "🦣", "🐧", "🦣"];
function IceSquare({ width, height }) {
  return (
    <Div width={width} height={height}>
      {/* {iceAnimals.map((animal) => (
        <IceAnimal move={true}>{animal}</IceAnimal>
      ))} */}
    </Div>
  );
}

export default IceSquare;
