// @flow
import React, { useState, useEffect, type Element } from "react";
import { hot } from "react-hot-loader/root";
import "./App.css";
import TitleSlide from "./TitleSlide";
import SimpleSlide from "./SimpleSlide";
import Thumbnails from "./Thumbnails";
import WithSidebar from "./WithSidebar";

const SLIDES = [
  {
    slide: <TitleSlide title="Title Slide" subtitle="by Sub Title" />,
    notes: "Welcome to the presentation",
  },
  {
    slide: (
      <SimpleSlide title="Slide #2">
        You can put whatever content you want here
      </SimpleSlide>
    ),
    notes: "I am demoing some content",
  },
  {
    slide: (
      <SimpleSlide title="With Some Bullets">
        <ul>
          <li>Consectetur aspernatur numquam dicta magni.</li>
          <li>Dolor quos reprehenderit quia eveniet</li>
          <li>Ipsum nisi at architecto debitis?</li>
        </ul>
      </SimpleSlide>
    ),
    notes: "Max 5 bullets per slide",
  },
].map((slide, index) => ({ ...slide, id: `slide-${index}` }));

type Props = {
  slides: {
    slide: Element<any>,
    notes: string,
    id: string,
  }[],
};

const App = ({ slides }: Props) => {
  const [selected, setSelected] = useState(0);
  const onKeyDown = event => {
    switch (event.key) {
      case "j":
        setSelected(s => Math.min(s + 1, slides.length - 1));
        break;
      case "k":
        setSelected(s => Math.max(s - 1, 0));
        break;
      case "G":
        setSelected(slides.length - 1);
        break;
    }
  };
  useEffect(() => {
    window.addEventListener("keydown", onKeyDown);
    return () => {
      window.removeEventListener("keydown", onKeyDown);
    };
  });
  return (
    <WithSidebar
      left={
        <Thumbnails onSwitch={setSelected}>
          {slides.map(slide =>
            React.cloneElement(slide.slide, { key: slide.id })
          )}
        </Thumbnails>
      }
      right={
        <main className="bg-subtle padding-m">
          <div className="current-slide-container stack">
            <section className="current-slide">
              {slides[selected].slide}
            </section>
            <aside>{slides[selected].notes}</aside>
          </div>
        </main>
      }
    />
  );
};

export default hot(() => <App slides={SLIDES} />);
