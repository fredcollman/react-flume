// @flow

type State = {
  selected: number,
  items: any[],
};

const next = (state: State) => ({
  ...state,
  selected: Math.min(state.selected + 1, state.items.length - 1),
});

const previous = (state: State) => ({
  ...state,
  selected: Math.max(state.selected - 1, 0),
});

const last = (state: State) => ({
  ...state,
  selected: state.items.length - 1,
});

const identity = (x: any) => x;

const parseFirstCommand = (keys: string) => {
  switch (keys[0]) {
    case "j":
      return [next, keys.substr(1)];
    case "k":
      return [previous, keys.substr(1)];
    case "G":
      return [last, keys.substr(1)];
    default:
      return [identity, keys.substr(1)];
  }
};

const parseCommands = (keys: string) => {
  let remainingKeys = keys;
  let commands = [];
  let command;
  while (remainingKeys.length) {
    [command, remainingKeys] = parseFirstCommand(remainingKeys);
    commands.push(command);
  }
  return (state: State) => commands.reduce((s, c) => c(s), state);
};

export default parseCommands;
