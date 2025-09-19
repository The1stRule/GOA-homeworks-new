const Counter = ({ count, increment }) => {
    return (
        <div>
            <p>Count: {count}</p>
            <button onClick={increment}>+1</button>
        </div>
    );
}

export default Counter;