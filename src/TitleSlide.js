// @flow
import React from "react";

type Props = { title: string, subtitle: string };

const TitleSlide = ({ title, subtitle }: Props) => (
  <article className="height-full cover">
    <div className="center">
      <h1>{title}</h1>
      <h2>{subtitle}</h2>
    </div>
  </article>
);

export default TitleSlide;
