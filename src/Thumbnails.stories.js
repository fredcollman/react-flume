// @flow
import React from "react";
import { storiesOf } from "@storybook/react";
import Thumbnails from "./Thumbnails";

storiesOf("Thumbnails", module).add("with simple contents", () => (
  <Thumbnails>
    <div>one</div>
    <div>two</div>
    <div>three</div>
    <div>four</div>
  </Thumbnails>
));
