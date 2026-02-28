# @yeeroen/use-bem

[![npm version](https://img.shields.io/npm/v/@yeeroen/use-bem.svg)](https://www.npmjs.com/package/@yeeroen/use-bem)
[![License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)](https://www.gnu.org/licenses/gpl-3.0)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.8-blue.svg)](https://www.typescriptlang.org/)
[![Build Status](https://img.shields.io/github/actions/workflow/status/yeeroen/use-bem/ci.yml?branch=master)](https://github.com/yeeroen/use-bem/actions)

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
