import React, { useRef, useState } from "react";

import { AccordionContentStyled, AccordionSectionStyled, AccordionStyled, AccordionTextStyled, AccordionTitleStyled } from "./styled";
import { SVGIcon } from "../svg-icon";
import UpArrowIcon from '@astrn/assets/icons/up-arrow.svg';
import DownArrowIcon from '@astrn/assets/icons/down-arrow.svg';

export function Accordion(props: any) {
  const [active, setActive] = useState(false);
  const content = useRef(null);
  const [height, setHeight] = useState("0px");

  function toggleAccordion() {
    setActive(!active);
    // @ts-ignore
    setHeight(active ? "0px" : `${content.current?.scrollHeight}px`);
  }

  return (
    <AccordionSectionStyled theme={props.theme}>
      <AccordionStyled
        className={`${active ? "active" : ""}`}
        onClick={toggleAccordion}
      >
        <AccordionTitleStyled>{props.title}</AccordionTitleStyled>
        <span style={{ marginLeft: "20px" }}>{active ? <SVGIcon type={UpArrowIcon} sizes={{
          w: 24,
          h: 24
        }} /> : <SVGIcon type={DownArrowIcon} sizes={{
          w: 24,
          h: 24
        }} />}</span>
      </AccordionStyled>
      <AccordionContentStyled
        ref={content}
        style={{ maxHeight: `${height}` }}
      >
        <AccordionTextStyled
          dangerouslySetInnerHTML={{ __html: props.content }}
        />
      </AccordionContentStyled>
    </AccordionSectionStyled>
  );
}

export default Accordion;
