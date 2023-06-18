import { useState } from "react";
import { validateEmail, validatePhoneNumber, toTitleCase } from "../utils/helpers";

export default function Contact() {

  const defaultErrorMessage =
    "";

  const [inputs, setInputs] = useState({}); 
  const [message, setMessage] = useState(""); 
  const [errorMessage, setErrorMessage] = useState(defaultErrorMessage); 

  const handleChange = (event) => {
    const name = event.target.name;
    const value = event.target.value;
    setInputs((values) => ({ ...values, [name]: value }));
  };

  const handleMessageChange = (event) => {
    setMessage(event.target.value);
  };

  const handleLostFocus = (event) => {
    const { target } = event;
    const inputName = target.name;
    const inputValue = target.value;

    if (inputValue === "") {
      setErrorMessage(`${toTitleCase(inputName)} is required.`);
      return;
    }

    if (inputName === "email") {
      if (!validateEmail(inputValue)) {
        setErrorMessage("Invalid Email Address.");
        return;
      }
    }

    if (inputName === "phone") {
      if (!validatePhoneNumber(inputValue)) {
        setErrorMessage("Invalid Phone Number.");
        return;
      }
    }

    if (
      inputs.name &&
      message &&
      validatePhoneNumber(inputs.phone) &&
      validateEmail(inputs.email)
    ) {
      setErrorMessage("");
    }
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    if (inputs.name && message && validatePhoneNumber(inputs.phone) && validateEmail(inputs.email)) {
      
      setErrorMessage(defaultErrorMessage);
    }
  };

  return (
    <div className="sections">
      <section id="Contact">
        <h2>Contact Me:</h2>
        <p>
          <form onSubmit={handleSubmit}>
            
            <label for="name">Name:</label>
            <br />
            <input
              type="text"
              id="name"
              name="name"
              value={inputs.name || ""}
              onChange={handleChange}
              onBlur={handleLostFocus}
            />
            <br />

            <label for="email">Email:</label>
            <br />
            <input
              type="text"
              id="email"
              name="email"
              value={inputs.email || ""}
              onChange={handleChange}
              onBlur={handleLostFocus}
            />
            <br />

            <label for="email">Phone Number:</label>
            <br />
            <input
              type="text"
              id="phone"
              name="phone"
              value={inputs.phone || ""}
              onChange={handleChange}
              onBlur={handleLostFocus}
            />
            <br />

            <label for="message">Message:</label>
            <br />
            <textarea
              id="message"
              name="message"
              value={message}
              onChange={handleMessageChange}
              onBlur={handleLostFocus}
              rows="10"
            />
            <br />

            <input type="submit" text="Submit" />

          </form>
          {errorMessage && (
            <div>
              <p className="error-text">{errorMessage}</p>
            </div>
          )}
        </p>
      </section>
    </div>
  );
}