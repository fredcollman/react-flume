// @flow
import React from "react";
import { storiesOf } from "@storybook/react";
import TitleSlide from "./TitleSlide";

storiesOf("TitleSlide", module).add("with subtitle", () => (
  <TitleSlide title="Title Slide" subtitle="by Sub Title" />
));
