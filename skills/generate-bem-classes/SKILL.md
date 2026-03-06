---
name: generate-bem-classes
description: >
  Using useBem() to generate BEM class name arrays for component templates.
  Covers block(), element(), modifier() with boolean, string, number, and
  key-only values. Returns string[] — works natively with Vue :class bindings,
  needs .join(' ') for React className. Import from @yeeroen/use-bem.
type: core
library: use-bem
library_version: "1.0.4"
sources:
  - "yeeroen/use-bem:src/use-bem.ts"
  - "yeeroen/use-bem:src/types.ts"
  - "yeeroen/use-bem:README.md"
---

# @yeeroen/use-bem — Generate BEM Classes

## Setup

```typescript
import useBem from '@yeeroen/use-bem'

const { block, element, modifier } = useBem('button')
```

`useBem` is a plain factory function (not a React hook). Call it anywhere — top-level, inside conditionals, in loops.

## Core Patterns

### Block with modifiers

```typescript
const { block, modifier } = useBem('button')

block()
// ['button']

block(modifier('primary', true), modifier('size', 'large'))
// ['button', 'button--primary', 'button--size-large']
```

### Element with modifiers

```typescript
const { element, modifier } = useBem('button')

element('icon')
// ['button__icon']

element('icon', modifier('color', 'red'), modifier('visible', true))
// ['button__icon', 'button__icon--color-red', 'button__icon--visible']
```

### Conditional modifiers with boolean values

```typescript
const { block, modifier } = useBem('button')

const isActive = true
const isDisabled = false

block(modifier('active', isActive), modifier('disabled', isDisabled))
// ['button', 'button--active']
// modifier('disabled', false) returns '' which block() filters out
```

### Key-only modifiers (shorthand)

```typescript
const { block, modifier } = useBem('button')

block(modifier('primary'))
// ['button', 'button--primary']
// Omitting the value is shorthand for an always-on modifier
```

### Vue template usage

```vue
<script setup lang="ts">
import useBem from '@yeeroen/use-bem'

const { block, element, modifier } = useBem('card')
const isExpanded = ref(false)
</script>

<template>
  <div :class="block(modifier('expanded', isExpanded))">
    <h2 :class="element('title')">Title</h2>
    <p :class="element('body')">Content</p>
  </div>
</template>
```

Vue's `:class` accepts arrays natively — no `.join(' ')` needed.

## Common Mistakes

### CRITICAL Treating block()/element() return value as a string

Wrong:

```tsx
// React — passing array directly to className
<div className={block(modifier('active', true))} />
```

Correct:

```tsx
// React — join the array into a space-separated string
<div className={block(modifier('active', true)).join(' ')} />
```

`block()` and `element()` return `string[]`, not `string`. Vue's `:class` accepts arrays natively, but React's `className` and vanilla DOM `element.className` expect a string.

Source: src/use-bem.ts:8-10, src/types.ts:6-7

### HIGH Treating useBem as a React hook

Wrong:

```tsx
function MyComponent({ variant }: Props) {
  // Agent treats useBem as a hook and avoids calling it conditionally
  const { block, modifier } = useBem('my-component')

  // Agent refuses to call useBem inside a condition, thinking it violates hook rules
}
```

Correct:

```typescript
// useBem is a plain function — call it anywhere
const { block, modifier } = useBem('my-component')

if (needsOther) {
  const other = useBem('other-component')
}
```

Despite the `use` prefix, `useBem` is a plain factory function with no framework dependency. It has no internal state, no side effects, and no hook rules.

Source: src/use-bem.ts:28-34

### HIGH Using modifier() result directly in templates

Wrong:

```vue
<div :class="modifier('active', isActive)" />
```

Correct:

```vue
<div :class="block(modifier('active', isActive))" />
```

`modifier('active', false)` returns an empty string `''`. `block()` and `element()` filter out empty strings, but using `modifier()` directly passes the raw empty string to the template.

Source: src/use-bem.ts:16-26

### HIGH Writing BEM strings manually instead of using the library

Wrong:

```vue
<div :class="`button button--${size} button--${variant}`" />
```

Correct:

```vue
<div :class="block(modifier('size', size), modifier('variant', variant))" />
```

Manual string concatenation bypasses the library's boolean filtering, null handling, and consistent separator formatting. It also produces broken class names when modifier values are `false` or `undefined`.

Source: README.md

### MEDIUM Using wrong BEM separator conventions

Wrong:

```typescript
// Manual strings with wrong separators
const classes = ['button', 'button-primary', 'button_icon']
```

Correct:

```typescript
const { block, element, modifier } = useBem('button')
block(modifier('primary', true))   // ['button', 'button--primary']
element('icon')                     // ['button__icon']
```

BEM uses double-dash (`--`) for modifiers and double-underscore (`__`) for elements. The library enforces these separators automatically.

Source: src/use-bem.ts:3-6, src/use-bem.ts:12-14

## Version

Targets @yeeroen/use-bem v1.0.4.
