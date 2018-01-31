import { h, app } from 'hyperapp'
import { expect } from 'chai'
import sinon from 'sinon'
import { withEffects } from 'hyperapp-effects'
import { render } from 'hyperapp-render'
import Button from './Button'
import { BUTTON_STYLE } from './Button'
import event from 'synthetic-dom-events'

describe('components/Button', () => {
    let component
    // Create fake app:
    const TEST = 'TEST'
    const BAD = 'BAD'
    const state = {
        test: 0
    }
    const actions = {
        [TEST]: () => state => ({ test: state.test + 1 })
        , [BAD]: () => state => ({ test: state.test + 1 })
    }
    const view = state => (<Button clickSymbol={TEST}
        value={state.test} />)

    // Fake click event:
    const click = event('click', { bubbles: true })

    // Spy on action:
    sinon.spy(actions, TEST)
    sinon.spy(actions, BAD)

    beforeEach((done) => {
        component = render(withEffects(app))(
            state
            , actions
            , view
            , document.body
        )
        setTimeout(done, 1)
    })
    afterEach(() => {
        document.body.innerHTML = ''
    })
    it('should render without crashing', () => {
        expect(component.toString()).to.equal(`<button class="${BUTTON_STYLE} green b--green" onclick="event,[object Object]">0</button>`)
    })
    it('should trigger a TEST event when clicked', () => {
        document.body.children[0].dispatchEvent(click)
        expect(actions[TEST].calledOnce).to.equal(true)
    })
    it('should not trigger a BAD event when clicked', () => {
        document.body.children[0].dispatchEvent(click)
        expect(actions[BAD].called).to.equal(false)
    })
})