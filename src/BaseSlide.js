// @flow
import React, { type Node } from "react";
import classnames from "classnames";
import AspectRatio from "./AspectRatio";

type Props = { children: Node, className?: string };

const BaseSlide = ({ children, className }: Props) => (
  <AspectRatio ratio={16 / 9}>
    <article className={classnames("padding-m border-thin", className)}>
      {children}
    </article>
  </AspectRatio>
);

export default BaseSlide;
