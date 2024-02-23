import { useRef } from "react"

export function ImageScroller (){
    const imageRef = useRef();

    function handleClick(){
        imageRef.current.scrollIntoView({behaviour:'smooth'})
    }

    return (
        <div>
            <button onClick={handleClick}>Scroll</button>
            <br />
            <br />
            {/* <div style={{height:'1000px'}}></div> */}

            <img 
                src="https://picsum.photos/200/300" 
                alt="Random" 
                ref={imageRef}
            />

        </div>
    )
}

