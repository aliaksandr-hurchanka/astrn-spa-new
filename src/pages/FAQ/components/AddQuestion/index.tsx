import React from 'react';
import { Container } from '../../../../common/components/grid';
import { AddQuestionSectionStyled, BgStyled, ButtonStyled, FormStyled, SubTitleStyled, TitleStyled } from './styled';

export function AddQuestion() {
  return (
    <Container lgExpanded>
      <AddQuestionSectionStyled>
        <FormStyled>
          <TitleStyled>
            Have any additional questions?
          </TitleStyled>
          <SubTitleStyled>
            If you still have any questions, please ask us and we will answer them for you
          </SubTitleStyled>
          <ButtonStyled>
            Add question
          </ButtonStyled>
        </FormStyled>
        <BgStyled></BgStyled>
      </AddQuestionSectionStyled>
    </Container>
  );
}
