import React, { useState } from "react";
 
// import "./App.css";
 
const App = () => {
    
    const [counter, setCounter] = useState(0);
 
    
    const handleClick1 = () => {
        
        setCounter(counter + 1);
    };
 
    
    const handleClick2 = () => {
        
        setCounter(counter - 1);
    };
 
    return (
        <div
            style={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                justifyContent: "center",
                fontSize: "300%",
                position: "absolute",
                width: "100%",
                height: "100%",
                top: "-15%",
            }}
        >
            Counter App
            <div
                style={{
                    fontSize: "120%",
                    position: "relative",
                    top: "10vh",
                }}
            >
                {counter}
            </div>
            <div className="buttons">
                <button
                    style={{
                        fontSize: "60%",
                        position: "relative",
                        top: "20vh",
                        marginRight: "5px",
                        backgroundColor: "green",
                        borderRadius: "8%",
                        color: "white",
                    }}
                    onClick={handleClick1}
                >
                    Increment
                </button>
                <button
                    style={{
                        fontSize: "60%",
                        position: "relative",
                        top: "20vh",
                        marginLeft: "5px",
                        backgroundColor: "red",
                        borderRadius: "8%",
                        color: "white",
                    }}
                    onClick={handleClick2}
                >
                    Decrement
                </button>
            </div>
        </div>
    );
};
 
export default App;




// import {useState} from 'react'

// const Home = () => {

//   const [text, setText] = useState('first value');


// const handleChange = (msg) => {
//   setText((prev) => {
//     console.log(prev);
//     return msg;
//   });
// }


//   console.log('render');


//   return (
//     <div className='p-5'>
      
//       <button onClick={() => handleChange('lio')} className=' px-2 py-2 bg-black text-white border-4 font-semibold rounded-xl'>Touch Me</button>
//     <h1>hello text-----{text}</h1>
//     </div>
//   )
// }

// export default Home




// {/* <button class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full">
//                 Change
//             </button> */}