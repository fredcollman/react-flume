// @flow
import React from "react";
import { storiesOf } from "@storybook/react";
import { action } from "@storybook/addon-actions";
import Thumbnails from "./Thumbnails";

storiesOf("Thumbnails", module)
  .add("with simple contents", () => (
    <Thumbnails>
      <div>one</div>
      <div>two</div>
      <div>three</div>
      <div>four</div>
    </Thumbnails>
  ))
  .add("with switching", () => (
    <Thumbnails onSwitch={action("switched")}>
      <div>one</div>
      <div>two</div>
      <div>three</div>
      <div>four</div>
    </Thumbnails>
  ));
