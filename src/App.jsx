import { useState } from 'react'
import './App.css'

function App() {
  const initialState = {
    issueType: "",
    subject: '',
    message: ''
  }

  const [formState, setFormState] = useState(initialState)

  const handleSubmit =(event) => {
    //prevents data from being blanked when the form is submitted
    event.preventDefault()
    //our functionality
    console.log(formState)
    //clear
    setFormState(initialState)
  }

  const handleChange =(event) => {
    //creating a Controlled form where all data is held in state
    setFormState({...formState, [event.target.id] : event.target.value})
  }

  return (
    <>
    <form onSubmit={handleSubmit}>
      <label htmlFor="issueType">Type of Issue:</label>
      <select id="issueType"
              onChange ={handleChange} value={formState.value}>
        <option value="" disabled defaultValue>Select your issue</option>
        <option value="outage">Service Outage</option>
        <option value="billing">Billing</option>
        <option value="cancel">Cancel Service</option>
      </select>
      <label htmlFor ="subject">Subject:</label>
      <input type="text" id="subject"
                        onChange ={handleChange}
                        value={formState.value}/>

      <label htmlFor="message"></label>
      <textarea id="message"
                cols="30" 
                rows="10"
                onChange={handleChange}
                value={formState.value}></textarea>

      <button type="submit">Send</button>
    </form>
      
    </>
  )
}

export default App
