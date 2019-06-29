// @flow
import React, { type Node } from "react";
import BaseSlide from "./BaseSlide";

type Props = { title: string, children: Node };

const SimpleSlide = ({ title, children }: Props) => (
  <BaseSlide>
    <h2 className="center">{title}</h2>
    {children}
  </BaseSlide>
);

export default SimpleSlide;
