import { useRef } from "react"
// importing es module 
import add from "../EsModuleExampl/EsModule";
function VideoPlayer(){
    const videoRef = useRef();

    function handlePause(){
        videoRef.current.pause()
    }
    function handlePlay(){
        videoRef.current.play()
    }
    console.log('result is ', add(10,20));
    return(
        <>
        <div>video</div>
        <video 
        src="https://www.learningcontainer.com/wp-content/uploads/2020/05/sample-mp4-file.mp4"
        ref={videoRef}
        >
        
        </video>
        <br />
        <button onClick={handlePlay}>Play</button>
        <button onClick={handlePause}>Pause</button>

        {/* <div  style={{ backgroundColor: 'green', width:'200px' }}>
            <h3 style={{fontStyle:'italic'}}>Result :</h3>{add(10,20)}
        </div> */}
        </>
        
    )
}

export default VideoPlayer