// @flow
import React from "react";
import BaseSlide from "./BaseSlide";

type Props = { height?: string, title: string, subtitle: string };

const TitleSlide = ({ height, title, subtitle }: Props) => (
  <BaseSlide className="cover" {...{ height }}>
    <div className="center">
      <h1>{title}</h1>
      <h2>{subtitle}</h2>
    </div>
  </BaseSlide>
);

export default TitleSlide;
