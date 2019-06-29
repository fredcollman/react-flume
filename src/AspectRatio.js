// @flow
import React, { type Node } from "react";
import "./AspectRatio.css";

type Props = { ratio?: number, children: Node };

const AspectRatio = ({ ratio = 1, children }: Props) => (
  <div className="aspect-ratio" style={{ "--aspect-ratio": ratio }}>
    {children}
  </div>
);

export default AspectRatio;
