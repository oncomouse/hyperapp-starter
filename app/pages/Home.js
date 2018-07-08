import { h } from 'hyperapp'
import Button from '../components/Button'
import { DOWN, UP } from '../symbols'

const App = () => ({ count }) => (
  <main key="Home">
    <h1>
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
