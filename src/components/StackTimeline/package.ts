export type Package = {
  name: string
  description: string
  type: 'framework' | 'lib' | 'game' | 'other'
  url: string
};
