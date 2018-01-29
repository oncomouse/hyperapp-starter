import { expect } from 'chai'
import { DOWN, UP } from '../symbols'
import actions from './'
describe('actions/index.js', () => {
    it('should add one to count when UP', () => {
        const state = {
            count: 0
        }
        expect(actions[UP]()(state)).to.deep.equals({
            count: 1
        })
    })
    it('should subtract one to count when DOWN', () => {
        const state = {
            count: 0
        }
        expect(actions[DOWN]()(state)).to.deep.equals({
            count: -1
        })
    })
})