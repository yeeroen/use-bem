export type BemModifier = string | null | undefined

export type BemModifierValue = string | number | boolean | undefined

export interface BemBlock {
    block: (...modifiers: BemModifier[]) => string[]
    element: (elementName: string, ...modifiers: BemModifier[]) => string[]
    modifier: (key: string, value?: BemModifierValue) => string
}

export type UseBem = (blockName: string) => BemBlock
