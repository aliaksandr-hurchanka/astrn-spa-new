import styled from 'styled-components';
import { HeadingLevel2 } from '../../../../common/tokens/typography';
import { getTextStyles } from '../../../../common/utils/styles';
import { Col, Row } from '../../../../common/components/grid';
import { ADAPTIVE } from '../../../../common/tokens/screen';

export const TitleStyled = styled(HeadingLevel2)`
  margin-top: 80px;
  margin-bottom: 16px;
  text-align: center;
`;

export const SubTitleStyled = styled.p`
  ${getTextStyles('Montserrat', 400, 16, 24)}
  text-align: center;
`;

export const DownloadFileStyled = styled(Row)`
  padding: 24px;
  justify-content: space-between;
  align-items: center;
  border-radius: 8px;
  background: #141414;
  width: 60%;
  margin: 0 auto 16px auto;

  ${ADAPTIVE.minWidth.tablet} {
    padding: 36px;
  }
`;

export const LeftColStyled = styled(Col)`
  ${getTextStyles('Montserrat', 700, 20, 30)}
`;

export const RightColStyled = styled(Col)`
  ${getTextStyles('Montserrat', 700, 20, 30)}
  display: inline-flex;
  text-align: right;
  justify-content: flex-end;
  color: #FFB22E;
  gap: 8px;
  cursor: pointer;
`;