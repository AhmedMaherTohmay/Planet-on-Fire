import styled from "styled-components";
import AiResult from "./components/AiResult";
import BackGround from "./components/BackGround";
import "./index.css";
import AppLayout from "./ui/AppLayout";
import { useEffect, useState } from "react";

const FILE = "../public/";
const VIDEO = "istockphoto-1690940931-640_adpp_is";
const IMAGE = "stars";

const Div = styled.div`
  width: 100%;
  min-height: 20rem;
  padding: 1rem;
  display: flex;
  flex-direction: column;
  background: rgba(255, 255, 255, 0.2); /* Optional: semi-transparent white */
  margin-top: 20px;
`;

function App() {
  return (
    <>
      <BackGround
        url={`${FILE}${VIDEO}.mp4`}
        playbackSpeed="0.8"
        img={`${FILE}/nasa data/${IMAGE}.png`}
      />

      <AppLayout />
      <Div>
        <AiResult
          text="Lorem ipsum, dolor sit amet consectetur adipisicing elit. Facilis
          architecto natus et dolor! Laborum doloremque hic soluta enim a
          accusamus odit possimus. Ratione, corrupti vel quisquam odio ab liberoenim."
          reactionUrl="sad"
        />
      </Div>
    </>
  );
}
export default App;
