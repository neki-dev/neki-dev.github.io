export type Package = {
  name: string;
  description: string;
  type: 'framework' | 'lib' | 'game';
  langs: string[];
  mark?: string;
};
