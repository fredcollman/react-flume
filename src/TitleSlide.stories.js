import React from "react";
import { storiesOf } from "@storybook/react";
import TitleSlide from "./TitleSlide";

storiesOf("TitleSlide", module).add("with subtitle", () => (
  <div style={{ border: "1px dotted red" }}>
    <TitleSlide title="Title Slide" subtitle="by Sub Title" />
  </div>
));
