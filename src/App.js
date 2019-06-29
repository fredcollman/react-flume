// @flow
import React, { type Node } from "react";
import { hot } from "react-hot-loader/root";
import "./App.css";
import TitleSlide from "./TitleSlide";
import SimpleSlide from "./SimpleSlide";

type Props = {
  children: Node,
};

const Thumbnail = ({ children }: Props) => (
  <div className="width-m height-m bg-subtle">{children}</div>
);

const Thumbnails = ({ children }: Props) => (
  <aside className="stack stack-m">
    {React.Children.map(children, child => (
      <Thumbnail>{child}</Thumbnail>
    ))}
  </aside>
);

const App = () => (
  <Thumbnails>
    <TitleSlide title="Title Slide" subtitle="by Sub Title" />
    <SimpleSlide title="Slide #2">
      You can put whatever content you want here
    </SimpleSlide>
  </Thumbnails>
);

export default hot(App);
