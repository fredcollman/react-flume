// @flow
import React, { useEffect, useReducer, type Element } from "react";
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

type SlideInfo = {
  slide: Element<any>,
  notes: string,
  id: string,
};

type Props = {
  slides: SlideInfo[],
};

type State<T> = {
  selected: number,
  items: T[],
  keys: string,
};

const next = state => Math.min(state.selected + 1, state.items.length - 1);
const previous = state => Math.max(state.selected - 1, 0);
const last = state => state.items.length - 1;

const transition = <T>(state: State<T>, callback): State<T> => ({
  ...state,
  keys: "",
  selected: callback(state),
});

const handleKeySequence = <T>(state: State<T>, keys): State<T> => {
  switch (keys[0]) {
    case "g":
      switch (keys[1]) {
        case "g":
          return transition(state, _ => 0);
        case undefined:
          return { ...state, keys };
        default:
          break;
      }
      break;
    case "j":
      return transition(state, next);
    case "k":
      return transition(state, previous);
    case "G":
      return transition(state, last);
    default:
      break;
  }
  // reset due to unrecognised key sequence
  return { ...state, keys: "" };
};

const reducer = <T>(state: State<T>, action): State<T> => {
  switch (action.type) {
    case "goto":
      return transition(state, _ => action.index);
    case "keydown":
      return handleKeySequence(state, state.keys + action.key);
    default:
      return state;
  }
};

const App = ({ slides }: Props) => {
  const [state, dispatch] = useReducer(reducer, {
    selected: 0,
    items: slides,
    keys: "",
  });
  const onKeyDown = event => dispatch({ type: "keydown", key: event.key });
  useEffect(() => {
    window.addEventListener("keydown", onKeyDown);
    return () => {
      window.removeEventListener("keydown", onKeyDown);
    };
  });
  return (
    <WithSidebar
      left={
        <Thumbnails onSwitch={i => dispatch({ type: "goto", index: i })}>
          {slides.map(slide =>
            React.cloneElement(slide.slide, { key: slide.id })
          )}
        </Thumbnails>
      }
      right={
        <main className="bg-subtle padding-m">
          <div className="current-slide-container stack">
            <section className="current-slide">
              {slides[state.selected].slide}
            </section>
            <aside>{slides[state.selected].notes}</aside>
          </div>
        </main>
      }
    />
  );
};

export default hot(() => <App slides={SLIDES} />);
