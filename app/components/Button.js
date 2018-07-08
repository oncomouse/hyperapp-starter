import { h } from 'hyperapp'
import { action } from '@hyperapp/fx'

const Button = ({
  clickSymbol, value, disabled,
}) => (
  <button
    onclick={action(clickSymbol)}
    disabled={disabled}
    type="button"
  >
    {value}
  </button>
)

export default Button
