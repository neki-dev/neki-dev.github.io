export type PrintColor = {
  url: string
  hex: string
  name?: string
};

export type PrintVariant = {
  base: PrintColor
  print: PrintColor
};

export type Print = {
  name: string
  variants: PrintVariant[]
};
