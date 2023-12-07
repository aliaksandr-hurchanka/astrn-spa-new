import styled from "styled-components";
import { HeadingLevel1 } from "../../common/tokens/typography";
import { getTextStyles } from "../../common/utils/styles";

export const FAQTitleStyled = styled(HeadingLevel1)`
	text-align: center;
	margin-top: 80px;
`;

export const FAQSubtitleStyled = styled.div`
	${getTextStyles('Montserrat', 400, 16, 24)}
	text-align: center;
	margin-top: 16px;
`;