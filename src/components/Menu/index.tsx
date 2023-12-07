import React from 'react';
import { MenuCategoriesStyled, MenuItemStyled } from './styled';
import { useTranslation } from 'react-i18next';

export function Menu() {

  const { t } = useTranslation();

  const isActiveLink = ({ isActive }: { isActive: boolean }) => ({
    color: isActive ? '#FFB22E' : '#ffffff',
  });

  return (
    <MenuCategoriesStyled>
      <MenuItemStyled to="/" style={isActiveLink}>{t('menu-item-home')}</MenuItemStyled>
      <MenuItemStyled to="resources" style={isActiveLink}>{t('menu-item-resources')}</MenuItemStyled>
      <MenuItemStyled to="faq" style={isActiveLink}>{t('menu-item-faq')}</MenuItemStyled>
    </MenuCategoriesStyled>
  );
}
