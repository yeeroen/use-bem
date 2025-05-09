import { describe, expect, it } from 'vitest'
import useBem from './use-bem'

describe('useBem', () => {
    describe('block name', () => {
        it('block name without modifiers', () => {
            const { block } = useBem('block')
            expect(block()).toEqual(['block'])
        })

        it('block name with modifiers', () => {
            const { block, modifier } = useBem('block')
            expect(block(
                modifier('modifier-one', 'value'),
                modifier('modifier-two', true),
                modifier('modifier-three', false),
                modifier('modifier-four'),
            )).toEqual([
                'block',
                'block--modifier-one-value',
                'block--modifier-two',
                'block--modifier-four',
            ])
        })
    })

    describe('element name', () => {
        it('element name without modifiers', () => {
            const { element } = useBem('block')
            expect(element('element')).toEqual(['block__element'])
        })

        it('element name with modifiers', () => {
            const { element, modifier } = useBem('block')
            expect(element(
                'element',
                modifier('modifier-one', 'value'),
                modifier('modifier-two', true),
                modifier('modifier-three', false),
                modifier('modifier-four'),
            )).toEqual([
                'block__element',
                'block__element--modifier-one-value',
                'block__element--modifier-two',
                'block__element--modifier-four',
            ])
        })
    })

    describe('modifiers', () => {
        it('modifier with string value', () => {
            const { modifier } = useBem('block')
            expect(modifier('modifier', 'value')).toEqual('modifier-value')
        })

        it('modifier with boolean value', () => {
            const { modifier } = useBem('block')
            expect(modifier('modifier', true)).toEqual('modifier')
            expect(modifier('modifier', false)).toEqual('')
        })

        it('modifier without value', () => {
            const { modifier } = useBem('block')
            expect(modifier('modifier')).toEqual('modifier')
        })
    })
})
