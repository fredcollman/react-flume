// @flow
import parseCommands from "./parseCommands";

const items: string[] = ["one", "two", "three"];

describe("the next key (j)", () => {
  it("moves to the next item", () => {
    const result = parseCommands("j")({ items, selected: 0 });
    expect(result).toEqual({ items, selected: 1 });
  });

  it("does not move beyond the end", () => {
    const result = parseCommands("j")({ items, selected: 2 });
    expect(result).toEqual({ items, selected: 2 });
  });
});

describe("the previous key (k)", () => {
  it("moves to the previous item", () => {
    const result = parseCommands("k")({ items, selected: 1 });
    expect(result).toEqual({ items, selected: 0 });
  });

  it("does not move beyond the start", () => {
    const result = parseCommands("k")({ items, selected: 0 });
    expect(result).toEqual({ items, selected: 0 });
  });
});

describe("the last key (G)", () => {
  it("moves to the last item", () => {
    const result = parseCommands("G")({ items, selected: 0 });
    expect(result).toEqual({ items, selected: 2 });
  });
});

describe("multiple key strokes", () => {
  it("can go next twice", () => {
    const result = parseCommands("jj")({ items, selected: 0 });
    expect(result).toEqual({ items, selected: 2 });
  });

  it("can go next and then previous", () => {
    const result = parseCommands("jk")({ items, selected: 1 });
    expect(result).toEqual({ items, selected: 1 });
  });

  it("can go to end and then previous", () => {
    const result = parseCommands("Gk")({ items, selected: 0 });
    expect(result).toEqual({ items, selected: 1 });
  });
});
