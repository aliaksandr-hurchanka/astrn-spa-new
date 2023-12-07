import styled from "styled-components";
import { Image } from "../../../../common/components/image";
import { Row } from "../../../../common/components/grid";
import { getTextStyles } from "../../../../common/utils/styles";

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

// export const SectionWrapperStyled = styled.div`
//   /* height: 100vh;
//   display: flex;
//   flex-direction: column;
//   justify-content: center; */

//   margin-top: -80px;

//   h3 {
//     ${getTextStyles('Montserrat', 700, 48, 60)}
//     text-transform: uppercase;
//     & > span {
//       color: #FFB22E;
//     }
//   }

//   h4 {
//     ${getTextStyles('Montserrat', 700, 24, 32)}
//     color: #FFB22E;
//   }

//   p {
//     ${getTextStyles('Montserrat', 400, 16, 24)}
//   }
// `;

export const AppsTitleStyled = styled.div`
  position: absolute;
  // text-align: center;
  left: 670px;
  letter-spacing: -0.02em;
  line-height: 60px;
  text-transform: uppercase;
  display: inline-block;
  width: 554px;

  h3 {
    ${getTextStyles('Montserrat', 700, 48, 60)}
    text-transform: uppercase;
    & > span {
      color: #FFB22E;
    }
  }

  h4 {
    ${getTextStyles('Montserrat', 700, 24, 32)}
    color: #FFB22E;
  }

  p {
    ${getTextStyles('Montserrat', 400, 16, 24)}
  }
`;