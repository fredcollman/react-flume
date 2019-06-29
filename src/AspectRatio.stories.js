// @flow
import React from "react";
import { storiesOf } from "@storybook/react";
import { action } from "@storybook/addon-actions";

import AspectRatio from "./AspectRatio";

storiesOf("AspectRatio", module)
  .add("with default 1:1 ratio", () => (
    <div style={{ width: "160px" }}>
      <AspectRatio>
        <div style={{ background: "#f001" }} />
      </AspectRatio>
    </div>
  ))
  .add("with 16:9 aspect ratio", () => (
    <div style={{ width: "160px" }}>
      <AspectRatio ratio={16 / 9}>
        <div style={{ background: "#f001" }} />
      </AspectRatio>
    </div>
  ));
