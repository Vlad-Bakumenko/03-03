import { useState, useRef, useEffect } from 'react'
import './App.css'

// Task: Create a form with a text input field for the user to enter their name. The form should have a submit button to submit the name. When the user submits the form, the name should be logged to the console. Additionally, when the component mounts, the input field should be focused automatically.

// difference useState and useRef - useRef not triggering re-render

function App() {
 
  const [name, setName] = useState('');
  // same as:
  // let name = "";
  
  // function setName() {
  // name = e.target.value;
  // return name
  //}

  const [count, setCount] = useState(0);
  const inputRef = useRef(); // as we understand we can even not set an initial value

  // const countRef = useRef();
  function handleChange(e) {
    setName(e.target.value); // name = e.target.value
    //console.log(name);
    // setCount(count + 1);
    // countRef.current = count;
    // console.log("You clicked", countRef.current, "times");
  }
  
  //console.log(name);

  // useEffect allows me control when some action will happen (on initial render [] or on change of some state variables [name])

  useEffect(() => {
    inputRef.current.focus();
  }, []) // auto-focus happens after initial render

  useEffect(() => {
    console.log(name);
    setCount(count+1);
  }, [name]) // console.log and setCount executes when variable "name" changing
  
  

  function handleSubmit(e) {
    e.preventDefault();
    console.log("Submitted name:", name);
  }

  return (
    <form onSubmit={handleSubmit}>
      <label htmlFor="">Name:</label>
      <input type="text" onChange={handleChange} ref={inputRef} value={name}/> 
      {/* value attribute make input - controlled component */}
      <button type='submit'>Submit</button>
    </form>
  )
}

export default App

// const obj = {};

// obj.name = "Andres";
// obj["surname"] = "Villay";
// obj."city" = "Berlin"; //! we can't assign property of the object - in this way

// console.log(obj);