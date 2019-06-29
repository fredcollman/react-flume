// @flow
import React from "react";
import { storiesOf } from "@storybook/react";
import { action } from "@storybook/addon-actions";

import WithSidebar from "./WithSidebar";

storiesOf("WithSidebar", module)
  .add("default", () => (
    <WithSidebar
      left={<div style={{ background: "#f001" }}>left</div>}
      right={<div style={{ background: "#0f01" }}>right</div>}
    />
  ))
  .add("with explicit side width", () => (
    <WithSidebar
      left={
        <div style={{ background: "#f001", "flex-basis": "30em" }}>left</div>
      }
      right={<div style={{ background: "#0f01" }}>right</div>}
    />
  ));
