import { useTranslation } from 'react-i18next';
import { MenuItemStyled } from './styled';

export function MenuList({ closeMenuCb }: { closeMenuCb?: (isMenuShowed: boolean) => void }) {
  const { t } = useTranslation();

  const isActiveLink = ({ isActive }: { isActive: boolean }) => {

    
    return {
      color: isActive ? '#FFB22E' : '#ffffff',
    }
  };

  return (
    <>
      <MenuItemStyled to="/" style={isActiveLink} onClick={() => closeMenuCb && closeMenuCb(false)}>{t('menu-item-home')}</MenuItemStyled>
      <MenuItemStyled to="resources" style={isActiveLink} onClick={() => closeMenuCb && closeMenuCb(false)}>{t('menu-item-resources')}</MenuItemStyled>
      <MenuItemStyled to="faq" style={isActiveLink} onClick={() => closeMenuCb && closeMenuCb(false)}>{t('menu-item-faq')}</MenuItemStyled>
    </>
  );
}