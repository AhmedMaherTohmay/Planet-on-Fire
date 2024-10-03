import styled, { css, keyframes } from "styled-components";
const generateRandomWalk = () => keyframes`
  0% {
    transform: translateX(0) rotate(0deg);
  }
  10% {
    transform: translateX(${Math.random() * 10 - 5}px) rotate(${
  Math.random() * 5 - 2.5
}deg); /* slight shake */
  }
  25% {
    transform: translateX(${Math.random() * 50 - 25}px) rotate(${
  Math.random() * 10 - 5
}deg);
  }
  50% {
    transform: translateX(${Math.random() * 100 - 50}px) rotate(${
  Math.random() * 20 - 10
}deg); /* changing direction */
  }
  75% {
    transform: translateX(${Math.random() * 50 - 25}px) rotate(${
  Math.random() * 10 - 5
}deg); /* changing direction */
  }
  90% {
    transform: translateX(${Math.random() * 10 - 5}px) rotate(${
  Math.random() * 5 - 2.5
}deg); /* slight shake again */
  }
  100% {
    transform: translateX(0) rotate(0deg); /* suddenly stop */
  }
`;

const Span = styled.span`
  font-size: ${(props) => (props.move ? `4rem` : "4rem")};
  position: absolute;
  top: ${(props) => props.top};
  left: ${(props) => props.left};
  ${(props) =>
    props.move
      ? css`
          animation: ${generateRandomWalk()} 9s infinite alternate;
        `
      : ""}
  z-index:10;
`;

function ForestAnimal({ children, move }) {
  if (!children.length) return null;
  const top = "220px";
  const left = `${Math.random() * (360 - 100) + 50}px`;

  return (
    <Span top={top} left={left} move={move}>
      {children}
    </Span>
  );
}

export default ForestAnimal;
