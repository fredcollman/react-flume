// @flow
import React, { type Node } from "react";

type Props = {
  children: Node,
};

const Thumbnail = ({ children }: Props) => (
  <div className="bg-subtle">{children}</div>
);

const Thumbnails = ({ children }: Props) => (
  <aside className="stack stack-m scale-half width-m">
    {React.Children.map(children, child => (
      <Thumbnail>{child}</Thumbnail>
    ))}
  </aside>
);

export default Thumbnails;
