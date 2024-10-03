import { useState } from "react";
import styled from "styled-components";

const Image = styled.img`
  margin: 0 auto;
`;
const P = styled.p`
  color: black;
  font-family: "Times New Roman", Times, serif;
  text-align: center;
  font-family: Cambria, Cochin, Georgia, Times, "Times New Roman", serif;
  font-size: 1.4rem;
`;
const Button = styled.button`
  width: 100px;
  max-height: 50px;
  cursor: pointer;
  font-weight: 700;
  font-size: large;
  margin-top: auto;
  align-self: center;
`;
function AiResult({ text, reactionUrl }) {
  const [generate, setGenerate] = useState();

  return (
    <>
      <Image src={reactionUrl} alt={reactionUrl} />

      <div>
        <P>{text}</P>
      </div>
      <Button onClick={() => setGenerate((e) => !e)} disabled={generate}>
        {!generate ? "Generate Ai" : "is predicting..."}
      </Button>
    </>
  );
}

export default AiResult;
// import styled from "styled-components";
// import { useState, useEffect } from "react";

// // Style the Image
// const Image = styled.img`
//   margin: 0 auto;
// `;

// // Style the Paragraph with the typewriter effect, but without the blinking cursor
// const P = styled.p`
//   color: black;
//   font-family: Cambria, Cochin, Georgia, Times, "Times New Roman", serif;
//   text-align: center;
//   font-size: 1.4rem;
//   white-space: pre-wrap; /* Allows line breaks and respects \n */
//   overflow: hidden; /* Hides the text until the animation reveals it */
//   width: 100%; /* Ensure width is controlled */
//   margin: 0 auto; /* Align the text block */
//   /* letter-spacing: 0.15em; */
// `;

// function AiResult({ text = "", reactionUrl }) {
//   const [displayText, setDisplayText] = useState(text);

//   useEffect(() => {
//     // Reset the displayText on new input text
//     setDisplayText("");

//     const words = text.split(" "); // Split the text into words
//     let index = 0;

//     const intervalId = setInterval(() => {
//       setDisplayText((prev) => prev + (index > 0 ? " " : "") + words[index]);
//       index++;
//       if (index >= words.length) {
//         clearInterval(intervalId);
//       }
//     }, 100); // Typing speed in milliseconds

//     return () => clearInterval(intervalId); // Cleanup interval on unmount
//   }, [text]); // Effect depends on text prop

//   return (
//     <>
//       <Image src={reactionUrl} alt={reactionUrl} />
//       <P>{displayText}</P> {/* Displaying text progressively, word by word */}
//     </>
//   );
// }

// export default AiResult;
