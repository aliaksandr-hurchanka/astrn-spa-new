import styled from "styled-components";
import { Image } from "../../../../common/components/image";
import { Row } from "../../../../common/components/grid";

export const ImageLayer1Styled = styled(Image)`
  /* position: absolute; */
  max-width: 1200px;
  z-index: 2;
`;

export const ImageLayer2Styled = styled(Image)`
  /* position: absolute; */
  z-index: 3;
`;

export const RowStyled = styled(Row)`
  width: 100%;
`;

export const LeftSectionStyled = styled.div`
      /* align-items: center; */
    /* display: flex; */
    height: 100vh;
    /* align-items: center; */
    display: flex;
    flex-direction: column;
    justify-content: center;

    > h2 {
      font-size: 45px;
    }
    > p {
      font-size: 30px;
    }
`;