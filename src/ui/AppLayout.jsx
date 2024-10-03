import styled from "styled-components";
import Controller from "../components/Controller";
import GameGrid from "../components/GameGrid";

const Container = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 90dvh;
`;

const Section = styled.section`
  width: 500px;
  height: 500px;
  margin: 1rem;
  display: flex;
  justify-content: space-around;
  gap: 1rem;
`;
const Map = styled.section`
  width: 700px;
  height: 500px;
  margin: 1rem;
  /* display: flex; */
  justify-content: space-around;
  /* background-image: url("../../public/nasa data/lawn-253616_1280.jpg"); */
  background-repeat: repeat; /* Repeat the image horizontally */

  /* Scale the image so that it repeats 3 times across the width */
  background-size: calc(100% / 60) auto; /* This divides the width into 3 equal parts */

  gap: 5rem;
`;

const Header = styled.header`
  width: 100%;
  height: 10%;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const H1 = styled.h1`
  text-align: center;
  color: white;
`;
const Div = styled.div`
  width: 100%;
  height: 100%;
  padding: 1rem;
  background: rgba(255, 255, 255, 0.2); /* Optional: semi-transparent white */
`;
const Image = styled.img`
  width: 80px;
  height: auto;
  margin-top: 10px;
`;
function AppLayout() {
  return (
    <>
      <Header>
        <H1>Mini Earth </H1>
        <Image src="../../public/nasa data/istockphoto-1226218465-640-adp-unscreen.gif"></Image>
      </Header>
      <Container>
        <Map>
          <GameGrid />
        </Map>
        <Section style={{ flexDirection: "column" }}>
          <Div>
            <Controller />
          </Div>
        </Section>
      </Container>
    </>
  );
}

export default AppLayout;

// src/App.js
