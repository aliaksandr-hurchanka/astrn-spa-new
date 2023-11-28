import React from 'react';
import { MenuCategoriesStyled, MenuItemStyled } from './styled';

export function Menu() {

  const isActiveLink = ({ isActive }: { isActive: boolean }) => ({
    color: isActive ? '#FFB22E' : '#ffffff',
  });

  return (
    <MenuCategoriesStyled>
      <MenuItemStyled to="/" style={isActiveLink}>Home</MenuItemStyled>
      <MenuItemStyled to="resources" style={isActiveLink}>Resources</MenuItemStyled>
      <MenuItemStyled to="about" style={isActiveLink}>About</MenuItemStyled>
    </MenuCategoriesStyled>
  );
}
