// @flow
import React from "react";
import BaseSlide from "./BaseSlide";

type Props = { title: string, subtitle: string };

const TitleSlide = ({ title, subtitle }: Props) => (
  <BaseSlide>
    <div className="cover">
      <div className="center">
        <h1>{title}</h1>
        <h2>{subtitle}</h2>
      </div>
    </div>
  </BaseSlide>
);

export default TitleSlide;
