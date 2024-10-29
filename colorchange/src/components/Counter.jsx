import React, { useState } from 'react'

const Counter = () => {
    const [count, setCount] = useState(1)
  return (
    <div>Counter : {count}
    <button onClick={()=>{setCount(count+1)}}>+</button>

    </div>
  )
}

export default Counter

