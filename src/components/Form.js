import styled from 'styled-components';
import React, { useRef, useState } from 'react';
import emailjs from 'emailjs-com';

const Form = () => {
  const formRef = useRef();
  const [message, setMessage] = useState('');
  const handleSubmit = (e) => {
    e.preventDefault(); //prevent the page to refresh

    emailjs
      .sendForm(process.env.REACT_APP_EMAILJS_SERVICE_ID, process.env.REACT_APP_EMAILJS_TEMPLATE_ID, formRef.current, process.env.REACT_APP_EMAILJS_USER_ID)
      .then((result) => {
        // console.log(result.text);
        setMessage('Thank you!');
      })
      .catch((error) => {
        // console.log(error.text);
        setMessage('There was an error sending the email. Please try again later.');
      });

    e.target.reset();
  };

  return (
    <FormDiv name="submit-to-google-sheet" ref={formRef} onSubmit={handleSubmit}>
      <input type="text" name="name" placeholder="Your Name" required />
      <input type="email" name="email" placeholder="Your Email" required />
      <textarea name="message" placeholder="Your Message" required></textarea>
      <button type="submit" onSubmit={handleSubmit}>
        Submit
      </button>
      <span id="msg"> {message} </span>
    </FormDiv>
  );
};

const FormDiv = styled.form`
  width: 100%;
  textarea {
    resize: none;
  }
  input,
  textarea {
    letter-spacing: 1px;
    width: 100%;
    border: 0;
    outline: none;
    background: #2b2232;
    padding: 3%;
    margin: 2% 0;
    color: var(--font-color);
    font-size: 14px;
    border-radius: 5px;
    font-family: Inter, system-ui, Avenir, Helvetica, Arial, sans-serif;
  }
  span {
    margin-left: 20px;
    font-weight: 500;
  }
`;
export default Form;
