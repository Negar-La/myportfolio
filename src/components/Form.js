import styled from "styled-components";
import React, { useRef, useState } from 'react';
import emailjs from 'emailjs-com';

const Form = () => {

    const formRef = useRef();
    const [done, setDone] = useState(false);

    const handleSubmit = (e) => {
        e.preventDefault();  //prevent the page to refresh
    
        emailjs.sendForm('service_kje18ll', 'template_00low3l', formRef.current, 'LqZSxi9gt1M7F6IiM')
          .then((result) => {
              console.log(result.text);
              setDone(true)
          }, (error) => {
              console.log(error.text);
          });

          e.target.reset()
      };
 

    return (
        <FormDiv name="submit-to-google-sheet" ref={formRef} onSubmit={handleSubmit}>
            <input type="text" name="name" placeholder="Your Name" required />
            <input type="email" name="email" placeholder="Your Email" required />
            <textarea name="message" placeholder="Your Message"></textarea>
            <button type="submit" onSubmit={handleSubmit}>
                Submit
            </button>
            <span id="msg"> {done  && "Thank you!"} </span>
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