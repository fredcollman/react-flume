// @flow
import React, { type Node } from "react";

type Props = { onSwitch?: number => mixed, children: Node };

const Thumbnails = ({ onSwitch, children }: Props) => (
  <aside className="stack stack-m scale-half width-m">
    {React.Children.map(children, (child, index) => (
      <div>
        <a
          className="color-standard"
          href={`#slide-${index}`}
          onClick={() => onSwitch && onSwitch(index)}
        >
          {child}
        </a>
      </div>
    ))}
  </aside>
);

export default Thumbnails;
