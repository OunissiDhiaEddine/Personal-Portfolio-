import { NavLink } from 'react-router-dom';
import React, { useState } from "react";

const Suggestions = () => {
    const [name, setName] = useState("");
    const [suggestion, setSuggestion] = useState("");
  
    const handleNameChange = (event) => {
      setName(event.target.value);
    };
  
    const handleSuggestionChange = (event) => {
      setSuggestion(event.target.value);
    };
  
const handleSubmit = (event) => {
  event.preventDefault();

  // Create a FormData object and append the form data
  const formData = new FormData();
  formData.append("name", name);
  formData.append("suggestion", suggestion);

  // Send the form data to the PHP backend using fetch
  fetch("https://ounissibackend.000webhostapp.com", {
    method: "POST",
    body: formData,
  })
    .then((response) => response.text())
    .then((result) => {
      console.log(result); // Log the server response
      // Reset form fields
      setName("");
      setSuggestion("");
    })
    .catch((error) => {
      console.error("Error:", error);
    });
};

    return (
      <div className="sugcont">
      <div className="nav2">
         <NavLink classname="nav2home" to="/" style={{ textDecoration: 'none' , color:'rgba(29,37,58,.9)'}} >Home</NavLink>
      </div>
      <img src={require('./Pics/logo.png')} className = "logo2" alt = "logo2" />
      <img src={require('./Pics/betalogo.png')} className='betalogo' alt='betalogo'/>
      <h1 className='sug'>Suggestions</h1>
      <form onSubmit={handleSubmit}>
        <input
          className='namefield'
          type="text"
          value={name}
          onChange={handleNameChange}
          placeholder="Your Name"
          required
        />
        <textarea
          value={suggestion}
          onChange={handleSuggestionChange}
          placeholder="Your Suggestion"
          required
        ></textarea>
        <button type="submit">Submit</button>
      </form>

      </div>

    );
}
 
export default Suggestions;