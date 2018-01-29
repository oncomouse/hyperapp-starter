import { h } from 'hyperapp'
import { event } from 'hyperapp-effects'

const BUTTON_STYLE = 'f5 fw6 link dim br3 ba bw1 ph3 pv2 mh1 mb2 dib'
const buttonStyle = ({ color='green' }) => `${BUTTON_STYLE} ${color} b--${color}`
const Button = ({ clickSymbol, value, color }) => (
    <button
        className={buttonStyle(color||'green')}
        onclick={event(clickSymbol)}
    >
        {value}
    </button>
)

export default Button