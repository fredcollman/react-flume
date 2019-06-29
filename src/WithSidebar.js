// @flow
import React, { type Node } from "react";
import "./WithSidebar.css";

type Props = { left: Node, right: Node };

const WithSidebar = ({ left, right }: Props) => (
  <div className="with-sidebar">
    {left}
    {right}
  </div>
);

export default WithSidebar;
