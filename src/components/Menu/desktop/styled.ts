import styled from "styled-components";
import { ADAPTIVE } from "../../../common/tokens/screen";

export const MenuCategoriesStyled = styled.div`
  display: flex;
  gap: 48px;

  ${ADAPTIVE.maxWidth.mobile} {
    flex-direction: column;
    gap: 16px;
    padding-top: 40px;
  }
`;
