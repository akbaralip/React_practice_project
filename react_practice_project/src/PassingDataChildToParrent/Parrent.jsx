import { useState } from "react";
import Child from "./Child";

function Parrent(){
    const parentData = 'hey from Parent'
    const [childData, setChildData] = useState('')

    // callback function
    function getData(data){
        setChildData(data)
    }       

    return(
        <>
        <h4>props through passing data Parent to child / callback fun through passing data child to parent</h4>
        <br />
        <div style={{backgroundColor:'blue '}}>iam parent : 
        <br />
        {childData}
        </div>
        <br />
        <Child data={parentData} sendData={getData}/>
        </>
        
    )
}
export default Parrent;