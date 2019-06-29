// @flow
import React from "react";

type Props = { title: string, subtitle: string };

const TitleSlide = ({ title, subtitle }: Props) => (
  <article className="width-m height-m bg-subtle">
    <div className="cover height-full">
      <div className="center">
        <h1>{title + 3}</h1>
        <h2>{subtitle}</h2>
      </div>
    </div>
  </article>
);

export default TitleSlide;
