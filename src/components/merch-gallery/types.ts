type Color = {
  url: string;
  hex: string;
  name?: string;
};

export type PrintVariant = {
  base: Color,
  print: Color,
};
