// @flow
import React, { type Node } from "react";
import classnames from "classnames";

type Props = { children: Node, height?: string, className?: string };

const BaseSlide = ({ height, children, className }: Props) => (
  <article className={classnames("padding-m", className)} style={{ height }}>
    {children}
  </article>
);

export default BaseSlide;
