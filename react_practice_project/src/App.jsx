import { useEffect, useState } from 'react'
import './App.css'
import ControlledComponentExample from './ControlledComponentExample'
import RefExample from './RefExample'
import F_component from './react_components/F_component'
import Class_component from './react_components/Class_component'
import UseRef_useCases from './UseRef_UseCase/UseRef_useCases'
import { ImageScroller } from './UseRef_UseCase/ImageScroller'
import VideoPlayer from './UseRef_UseCase/VideoPlayer'
import Parrent from './PassingDataChildToParrent/Parrent'

import { Link, MemoryRouter, Route, Routes } from 'react-router-dom'
import MyEnhancedComponent from './HOC/MyEnhancedComponent'
import MyComponent from './HOC/MyComponent'
import MyContext from './ContextAPI/MyContext'

function App() {
  const [count, setCount] = useState(0)

  useEffect(() => {
    console.log('count changed :', count);
  }, [count]) // dependency array is empty , then only the mounting time the useEffect work, if the dependency array inside any value then the value have any change , based on the change the useEffect also working , or re-render the page 

  //  contex value
  const context_value = 'hai its a contex value'



  return (
    <>
      <MyContext.Provider value={context_value}>
        <h3>Memory routing example : </h3>
        <h5>In React Router, the MemoryRouter is a router implementation that keeps the history of your "location" in memory (does not use the browser's history API). It is useful in scenarios where you want to test your application's routing logic without involving the browser's URL.</h5>
        <MemoryRouter>
          <div>
            <nav>
              <ul>
                <li>
                  <Link to='/video_player'>Video player</Link>
                </li>
                <li>
                  <Link to='/image_scroller'>Image Scroller</Link>
                </li>
              </ul>
            </nav>
          </div>
          <Routes>
            <Route path='/video_player' Component={VideoPlayer} />
            <Route path='/image_scroller' Component={ImageScroller} />
          </Routes>
        </MemoryRouter>
        <h2>==============================================================</h2>

        <br />

        {/* controlled component example */}
        <ControlledComponentExample />
        <br />
        <h2>==============================================================</h2>


        <div>
          <h1>Count is {count}</h1>
          <button onClick={() => setCount(count + 1)}>Increment</button>
        </div>

        <br />
        <h2>==============================================================</h2>

        <F_component name='iam fun component' />
        <Class_component name='iam class component' />
        <h2>==============================================================</h2>

        {/* useRef example  */}
        <h3>UseRef examples : </h3>
        <UseRef_useCases />
        <br />
        <ImageScroller />
        <br />
        <VideoPlayer />

        <br />

        <h2>==============================================================</h2>

        {/* props through passing data Parent to child / callback fun through passing data child to parent */}

        <Parrent />
        <br />
        <h2>==============================================================</h2>

        <h3>High Order Component exmaple</h3>

        <MyComponent name={"hey hello world"} />
        <br />
        <MyEnhancedComponent name={"hey hello world ==> its enhanced"} />
      </MyContext.Provider>

    </>
  )
}

export default App

// import React, { useState, useEffect } from 'react';

// function App() {
//   const [position, setPosition] = useState({ x: 0, y: 0 });

//   useEffect(() => {
//     // Event listener to track mouse movement
//     const handleMouseMove = (event) => {
//       setPosition({ x: event.clientX, y: event.clientY });
//     };

//     // Subscribe to mousemove event
//     window.addEventListener('mousemove', handleMouseMove);

//     // Cleanup function to unsubscribe from event listener
//     return () => {
//       window.removeEventListener('mousemove', handleMouseMove);
//     };
//   }, []); // Empty dependency array ensures the effect runs only once

//   return (
//     <div>
//       <h1>Mouse Position</h1>
//       <p>X: {position.x}, Y: {position.y}</p>
//     </div>
//   );
// }

// export default App;
