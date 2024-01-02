import { SVGIcon } from '@astrn/common/components/svg-icon';
import ArrowRight from '@astrn/assets/icons/breadcrumbs-arrow.svg';
import { BreadcrumbsStyled } from './styled';
import { Link } from 'react-router-dom';

export function Breadcrumbs({ title }: { title: string }) {
  return (
    <BreadcrumbsStyled>
      <Link to='/'>Home</Link><SVGIcon type={ArrowRight} sizes={{ w: 16, h: 16 }} />
      <Link to='/resources'>Resources</Link><SVGIcon type={ArrowRight} sizes={{ w: 16, h: 16 }} />
      {title}
    </BreadcrumbsStyled>
  );
}
