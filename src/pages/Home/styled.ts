import styled from "styled-components";

export const ParentStyled = styled.div`
  overflow: scroll;
  height: 100vh;
  scroll-snap-points-y: repeat(100vh);
  scroll-snap-type: y proximity;
`;

export const SectionStyled = styled.div`
  height: 100vh;
  scroll-snap-align: start;
  position: relative;
`;