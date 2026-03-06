# @yeeroen/use-bem — Skill Spec

A lightweight TypeScript utility that generates BEM (Block Element Modifier) class name arrays. Developers call `useBem('blockName')` to get `block()`, `element()`, and `modifier()` helpers that produce correctly formatted BEM class arrays for use in component templates, primarily Vue.

## Domains

| Domain | Description | Skills |
| --- | --- | --- |
| generating BEM class names | Creating correctly structured BEM class name arrays for component templates using the useBem factory and its block, element, and modifier helpers. | generate-bem-classes |

## Skill Inventory

| Skill | Type | Domain | What it covers | Failure modes |
| --- | --- | --- | --- | --- |
| generate-bem-classes | core | bem-class-generation | useBem(), block(), element(), modifier(), BemBlock, BemModifier, BemModifierValue | 5 |

## Failure Mode Inventory

### Generate BEM Classes (5 failure modes)

| # | Mistake | Priority | Source | Cross-skill? |
| --- | --- | --- | --- | --- |
| 1 | Treating block()/element() return as string | CRITICAL | src/use-bem.ts:8-10, src/types.ts:6-7 | — |
| 2 | Treating useBem as a React hook | HIGH | src/use-bem.ts:28-34, maintainer interview | — |
| 3 | Using modifier() result directly as class name | HIGH | src/use-bem.ts:16-26 | — |
| 4 | Writing BEM strings manually instead of using library | HIGH | README.md, maintainer interview | — |
| 5 | Using wrong BEM separator format | MEDIUM | src/use-bem.ts:3-6, src/use-bem.ts:12-14 | — |

## Tensions

None — single-skill library with no cross-cutting concerns.

## Cross-References

None — single skill.

## Subsystems & Reference Candidates

| Skill | Subsystems | Reference candidates |
| --- | --- | --- |
| generate-bem-classes | — | — |

## Remaining Gaps

None — all gaps resolved during interview.

## Recommended Skill File Structure

- **Core skills:** generate-bem-classes
- **Framework skills:** None needed (framework-agnostic utility, though primarily used with Vue)
- **Lifecycle skills:** None needed (no getting-started or migration complexity)
- **Composition skills:** None needed (no peer dependencies or required integrations)
- **Reference files:** None needed (small API surface)

## Composition Opportunities

None — no peer dependencies or required integrations.
