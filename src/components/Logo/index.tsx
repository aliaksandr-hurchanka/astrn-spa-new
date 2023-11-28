import React from 'react';
import { AsteronIconStyled, LogoIconStyled, LogoStyled } from './styled';
import LogoIcon from '../../assets/logo.svg';
import AsteronLogo from '../../assets/asteron.svg';

export function Logo() {
	return (
		<LogoStyled>
			<LogoIconStyled alt="" src={LogoIcon} />
			<AsteronIconStyled alt="" src={AsteronLogo} />
		</LogoStyled>
	);
}
