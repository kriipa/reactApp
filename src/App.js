// import logo from './logo.svg';
// import './App.css';
import { useState } from "react";
import Feedback from "./compotents/feedback";

function App() {

  const [counter, setCounter] = useState(0)

  // setTimeout(
  //   () => setCounter(counter +1),1000
  // )

  const handleClick = () => setCounter(counter + 1)
  // function handleClick(){
  //   return setCounter(counter +1)
  // }

  const handleReset = () =>  setCounter(0)

  console.log(`rendering ${counter}`)

  return (
    <div>
      {/* <h1> Hellow {name} <br></br>
      {age} years already <br></br>
      beautiful beautiful loki
      </h1> */}
      <h2> {counter} </h2>
      <button onClick={handleClick}>
        Plus +
      </button>
      <button onClick={handleReset}>
        Reset 
      </button>

      <Feedback/>
    </div>
  );

}

export default App;

