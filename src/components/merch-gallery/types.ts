type Color = {
  url: string;
  hex: string;
  name?: string;
};

export type Print = {
  name: string,
  variants: PrintVariant[],
};

export type PrintVariant = {
  base: Color,
  print: Color,
};
