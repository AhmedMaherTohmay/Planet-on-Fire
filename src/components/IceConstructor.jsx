import styled from "styled-components";

const Span = styled.span`
  width: 23px;
  width: 16px;
  box-shadow: rgba(50, 50, 93, 0.25) 0px 50px 100px -20px,
    rgba(0, 0, 0, 0.3) 0px 30px 60px -30px,
    rgba(10, 37, 64, 0.35) 0px -2px 6px 0px inset;
`;
function IceConstructor({ children }) {
  if (!children.length) return null;
  return <Span>{children}</Span>;
}

export default IceConstructor;
