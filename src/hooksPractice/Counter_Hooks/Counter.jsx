import useCounter from './useCounter'

const Counter = () => {

    const {
        count,
        increment,
        decrement
    } = useCounter();

    const counter = useCounter();

  return (

    <div>
        <h1>{count}</h1>

        <button onClick={increment}>+</button>

        <button onClick={decrement}>-</button>


        <h1>{counter.count}</h1>
        <button onClick={counter.increment}>+</button>
        <button onClick={counter.decrement}>-</button>
    </div>

    

  )
}

export default Counter
