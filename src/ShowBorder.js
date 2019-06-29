// @flow
import React, { type Node } from "react";

type Props = { color?: string, children: Node };

const ShowBorder = ({ color = "red", children }: Props) => (
  <div style={{ border: `1px dotted ${color}` }}>{children}</div>
);

export default ShowBorder;
