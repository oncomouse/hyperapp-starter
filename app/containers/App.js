import { h } from 'hyperapp'
import Button from '../components/Button'
import { DOWN, UP } from '../symbols'

export const MAIN_STYLE = 'measure-l tc sans-serif center-ns'
export const TITLE_STYLE = 'green'

const App = ({ state: { count } }) => (
    <main class={MAIN_STYLE}>
        <h1 class={TITLE_STYLE}>
            {count}
        </h1>
        <Button
            clickSymbol={DOWN}
            value="-"
            disabled={count <= 0}
        />
        <Button
            clickSymbol={UP}
            value="+"
        />
    </main>
)
export default App
