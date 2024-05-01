import React, {useState} from "react";

export default function useCounter(initiaValue) {
    const [count, setCount] = useState(initiaValue)

    const increaseCount = () => setCount((count) => count + 1)
    const decreaseCount = () => setCount((count) => Math.max(count - 1, 0))
    
    return [count, increaseCount, decreaseCount]
}