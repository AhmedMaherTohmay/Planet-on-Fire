import styled from "styled-components";

const Span = styled.span`
  font-size: 8rem;
  position: absolute;
  top: ${(props) => props.top};
  left: ${(props) => props.left};
`;

function ForestTrees({ children, move }) {
  if (!children.length) return null;
  // const top = `${Math.random() * (200 - 280) + 190}px`;
  const top = "80px";

  const left = `${Math.random() * 60}%`;

  return (
    <Span top={top} left={left} move={move}>
      {children}
    </Span>
  );
}

export default ForestTrees;
