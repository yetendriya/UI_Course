import React, { useState } from 'react'
//rafce

const FavColor = () => {

    const [color, setColor] = useState('red');
    
const inlineStyle = {background:color}
  return (
    <div style={inlineStyle}>{color}
    <button onClick={()=>{setColor('blue')}}>Blue</button>
    <button onClick={()=>{setColor('yellow')}}>Yellow</button>
    <button onClick={()=>{setColor('green')}}>Green</button> 
    <button onClick={()=>{setColor('pink')}}>Pink</button>
    {
    }
    <React.Fragment>
        this is react fragment
    </React.Fragment>
    <>
    this is also a react fragment
    </>
    

    </div>
  )
}

export default FavColor

