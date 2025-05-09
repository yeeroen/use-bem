import type { BemBlock, BemModifier, BemModifierValue, UseBem } from './types'

const createBemClasses = (baseName: string, ...modifiers: BemModifier[]): string[] => {
    const mappedModifiers = modifiers.map(modifier => modifier ? `${baseName}--${modifier}` : null)
    return [baseName, ...mappedModifiers].filter((item): item is string => Boolean(item))
}

const block = (blockName: string, ...modifiers: BemModifier[]): string[] => {
    return createBemClasses(blockName, ...modifiers)
}

const element = (blockName: string, elementName: string, ...modifiers: BemModifier[]): string[] => {
    return createBemClasses(`${blockName}__${elementName}`, ...modifiers)
}

const modifier = (key: string, value?: BemModifierValue): string => {
    if (value === undefined) {
        return key
    }

    if (typeof value === 'boolean' || value === null) {
        return value ? key : ''
    }

    return `${key}-${value}`
}

const useBem: UseBem = (blockName: string): BemBlock => {
    return {
        block: (...modifiers: BemModifier[]) => block(blockName, ...modifiers),
        element: (elementName: string, ...modifiers: BemModifier[]) => element(blockName, elementName, ...modifiers),
        modifier,
    }
}

export default useBem
