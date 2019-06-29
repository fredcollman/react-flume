import React from "react";
import { storiesOf } from "@storybook/react";
import SimpleSlide from "./SimpleSlide";

storiesOf("SimpleSlide", module).add("with text content", () => (
  <SimpleSlide title="Slide #2">
    You can put whatever content you want here
  </SimpleSlide>
));
