declare interface BemBlock {
    block: (...modifiers: BemModifier[]) => string[];
    element: (elementName: string, ...modifiers: BemModifier[]) => string[];
    modifier: (key: string, value?: BemModifierValue) => string;
}

declare type BemModifier = string | null | undefined;

declare type BemModifierValue = string | number | boolean | undefined;

declare type UseBem = (blockName: string) => BemBlock;

declare const useBem: UseBem;
export default useBem;

export { }
