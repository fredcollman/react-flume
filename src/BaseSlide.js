// @flow
import React, { type Node } from "react";

type Props = { children: Node };

const BaseSlide = ({ children }: Props) => (
  <article className="padding-m">{children}</article>
);

export default BaseSlide;
