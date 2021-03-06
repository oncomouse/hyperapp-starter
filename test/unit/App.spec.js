import { h, app } from 'hyperapp'
import { expect } from 'chai'
import { withEffects } from 'hyperapp-effects'
import { withRender } from '@hyperapp/render'
import App from 'APP/containers/App'

describe('containers/App', () => {
    let component
    // Create fake app:
    const state = {}
    const actions = {}
    const view = state => (<App state={state} />)

    beforeEach((done) => {
        component = withRender(withEffects(app))(
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
        expect(component.toString()).to.be.a('string')
    })
    it('should render an <H1>', () => {
        expect(
            document.querySelectorAll('h1').length
        ).to.equal(1)
    })
})
