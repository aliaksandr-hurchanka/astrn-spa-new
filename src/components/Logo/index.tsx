import React from 'react';
import { AsteronIconStyled, LogoIconStyled, LogoStyled } from './styled';
import LogoIcon from '../../assets/logo.svg';
import AsteronLogo from '../../assets/asteron.svg';
import { Link } from 'react-router-dom';

export function Logo() {
	return (
		<Link to='/'>
			<LogoStyled>
				<LogoIconStyled alt="" src={LogoIcon} />
				<AsteronIconStyled alt="" src={AsteronLogo} />
			</LogoStyled>
		</Link>
	);
}
