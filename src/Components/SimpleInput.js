import { useState } from "react";

const SimpleInput = (props) => {
  const [enteredName, setEnteredName] = useState("");

  const nameChangeHandler = (event) => {
    setEnteredName(event.target.value);
  };
  const formSubmitHandler = (event) => {
    event.preventDefault();
    console.log(enteredName);

  };

  return (
    <form >
      <div className="form-control">
        <label htmlFor="name">Your Name</label>
        <input type="text" id="name" onClick={nameChangeHandler} />
      </div>
      <div className="form-actions">
        <button onClick={formSubmitHandler} >Submit</button>
      </div>
    </form>
  );
};

export default SimpleInput;
