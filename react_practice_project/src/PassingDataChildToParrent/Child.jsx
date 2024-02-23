import { useEffect } from "react"

function Child(props){
    const {data, sendData} = props

    const childData = 'hello parrent from child'

    function send(){
        sendData(childData)
    }
    useEffect(()=>{
        send()
    },[])
    return(
        <>
        <div style={{backgroundColor:'orange'}}>iam child : 
        <br />
        <h2>{data}</h2>
        </div>

        </>
        
    )
}

export default Child;