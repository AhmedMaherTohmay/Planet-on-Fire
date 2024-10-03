import styled from "styled-components";

const Div = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;
const Button = styled.button`
  width: 50px;
  height: 50px;
  border-radius: 50%;
  cursor: pointer;
`;
const P = styled.p`
  font-size: larger;
  color: aliceblue;
  font-weight: 700;
  font-family: "Times New Roman", Times, serif;
`;

function ControlRow({ state, setState, name, wind = null, factor }) {
  function handleWindUp() {
    wind ? setState(0) : null;
  }
  function handleWindDown() {
    wind ? setState(180) : null;
  }
  function handleWindRight() {
    wind ? setState(90) : null;
  }
  function handleWindLeft() {
    wind ? setState(270) : null;
  }
  return (
    <Div>
      <div
        style={{
          display: "flex",
          gap: "10px",
        }}
      >
        {wind ? (
          <div>
            <Button
              onClick={wind ? handleWindUp : () => setState(state + factor)}
            >
              {!wind ? "➕" : "⬆️"}
            </Button>
            <Button
              onClick={wind ? handleWindDown : () => setState(state - factor)}
            >
              {!wind ? "➖" : "⬇️"}
            </Button>
          </div>
        ) : (
          <>
            <Button
              onClick={wind ? handleWindUp : () => setState(state + factor)}
            >
              {!wind ? "➕" : "⬆️"}
            </Button>
            <Button
              onClick={wind ? handleWindDown : () => setState(state - factor)}
            >
              {!wind ? "➖" : "⬇️"}
            </Button>
          </>
        )}

        {wind ? (
          <div>
            <Button onClick={wind ? handleWindLeft : () => setState(state + 5)}>
              ⬅️
            </Button>
            <Button
              onClick={wind ? handleWindRight : () => setState(state + 5)}
            >
              ➡️
            </Button>
          </div>
        ) : null}
      </div>
      <div>
        <P>
          {name}:{" "}
          {`${name === "Plastic" ? Math.round(state * 10) / 10 : state}${
            wind ? "°" : ""
          }`}
          {name === "Temperature"
            ? " C°"
            : name === "Rain"
            ? " mm"
            : name === "Humidity"
            ? " %"
            : name === "Fossil Fuel"
            ? " L"
            : name === "Plastic"
            ? " kg"
            : name === "Wind Speed"
            ? " m/s"
            : null}
        </P>
      </div>
    </Div>
  );
}

export default ControlRow;
