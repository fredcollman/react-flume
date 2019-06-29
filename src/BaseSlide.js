// @flow
import React, { type Node } from "react";
import classnames from "classnames";
import AspectRatio from "./AspectRatio";

type Props = { children: Node, height?: string, className?: string };

const BaseSlide = ({ height, children, className }: Props) => (
  <AspectRatio ratio={16 / 9}>
    <article className={classnames("padding-m", className)}>{children}</article>
  </AspectRatio>
);

export default BaseSlide;
