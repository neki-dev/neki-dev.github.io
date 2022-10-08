export type Stack = {
  name: string
  beg: number
  end: number
  color: [string, string]
};

export type StackGroup = {
  name: string
  stacks: Stack[]
};
