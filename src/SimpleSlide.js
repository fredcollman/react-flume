// @flow
import React, { type Node } from "react";

type Props = { title: string, children: Node };

const SimpleSlide = ({ title, children }: Props) => (
  <article className="padding-m">
    <h2 className="center">{title}</h2>
    {children}
  </article>
);

export default SimpleSlide;
