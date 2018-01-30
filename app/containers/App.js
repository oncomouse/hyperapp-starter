import { h } from 'hyperapp'
import Button from '../components/Button'
import { DOWN, UP } from '../symbols'
import styled from '../utilities/styled'

const Title = styled('h1')({
    color: '#19a974'
})

const App = ({ state: { count } }) => (
    <main className="measure-l tc sans-serif ml-auto mr-auto">
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