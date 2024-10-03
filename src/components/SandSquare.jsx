import styled from "styled-components";
import SandAnimal from "./SandAnimal";

const Div = styled.div`
  width: 460px;
  min-height: 160px;
  position: relative;
  border: 1px black solid;
  background: url("../../public/nasa data/sandBack.gif");
  background-size: cover;
  border-radius: 20px;
  background-color: ${(props) => props.BackgroundColor || ""};
`;

let sandAnimal = ["🐪", "🐪", "🐪", "🐪", "🐪", "🐪", "🐪", "🐪", "🐪", "🐪"];
function SandSquare() {
  return (
    <Div>
      {/* {sandAnimal.map((animal) => (
        <SandAnimal move={true}>{animal}</SandAnimal>
      ))} */}
    </Div>
  );
}

export default SandSquare;
