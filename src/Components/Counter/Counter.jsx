import { useSelector, useDispatch } from 'react-redux'
import { decrement, increment } from '../../Store/features/counter/counterSlice.js'

const Counter = () => {
  const count = useSelector((state) => state.counter.value) // de CounterSlice: const initialState = {value: 10, }
  const isLogged = useSelector((state) => state.counter.isLogged) // counter es de strore.js: const store = configureStore({ counter
  const dispatch = useDispatch()

  return (
    <div>
      <div><span>{isLogged}</span>
        <button
          aria-label="Increment value"
          onClick={() => dispatch(increment())}
        >
          Increment
        </button>
        <span>{count}</span>
        <button
          aria-label="Decrement value"
          onClick={() => dispatch(decrement())}
        >
          Decrement
        </button>
      </div>
    </div>
  )
}

export default Counter;