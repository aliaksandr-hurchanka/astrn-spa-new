import React from 'react';
import { MenuCategoriesStyled } from './styled';
import { MenuList } from '../components/MenuList';

export function Menu() {
  return (
    <MenuCategoriesStyled>
      <MenuList />
    </MenuCategoriesStyled>
  );
}
