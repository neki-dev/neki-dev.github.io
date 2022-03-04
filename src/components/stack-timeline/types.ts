export type Stack = {
    name: string
    beg: number
    end?: number
    color: [string, string]
    basic?: boolean
};

export type StackGroup = {
    name: string
    stacks: Stack[]
};