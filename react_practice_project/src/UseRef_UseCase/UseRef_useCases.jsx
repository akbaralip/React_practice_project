import React, { useEffect, useRef } from 'react'

function UseRef_useCases() {
    const inputRef = useRef();

    function handleClick(){
        inputRef.current.focus();
    }

    useEffect(()=>{
        // inputRef.current.focus();
        handleClick()
    },[])
    
  return (
    <div>
      <input type="text" ref={inputRef} />
      <button onClick={handleClick}>Foucus</button>
    </div>
  )
}

export default UseRef_useCases
