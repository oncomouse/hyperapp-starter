import { h } from 'hyperapp'
import Button from '../components/Button'
import { DOWN, UP } from '../symbols'
import styled from '../utilities/styled'

const Title = styled('h1')({
    color: '#19a974'
})

const App = ({ state: { count } }) => (
    <main class="measure-l tc sans-serif center-ns">
        <Title>
            {count}
        </Title>
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