export type BaseMeta = {
  url: string
  hex: string
  name: string
};

export type PrintMeta = {
  url: string
  hex: string
  name: string
  source: string
  size: number
  offset: number
};

export type PrintVariant = {
  base: BaseMeta
  print: PrintMeta
};

export type Print = {
  name: string
  variants: PrintVariant[]
};
