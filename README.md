# @yeeroen/use-bem

A lightweight utility for generating BEM (Block Element Modifier) class names in TypeScript/JavaScript.

## Installation

```bash
npm install @yeeroen/use-bem
```

## Usage

```typescript
import useBem from '@yeeroen/use-bem'

const { block, element, modifier } = useBem('button')

// Block with modifiers
block(
    modifier('primary', true),
    modifier('size', 'large')
) // ['button', 'button--primary', 'button--size-large']

// Element with modifiers
element(
    'icon',
    modifier('color', 'red')
) // ['button__icon', 'button__icon--color-red']
```