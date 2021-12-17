import React, { useState } from 'react';
// validating the email
import { validateEmail } from '../../utils/helpers';

function ContactForm() {
    // hook that wil manage the form data
    const [formState, setFormState] = useState({ name: '', email: '', message: ''});

    const [errorMessage, setErrorMessage] = useState('');

    const { name, email, message } = formState;

    function handleChange(e) {
        if(e.target.name === 'email') {
            const isValid = validateEmail(e.target.value);
            console.log(isValid);
            // isValid conditional statement 
            if(!isValid) {
                setErrorMessage('Your email is invalid.');
            } else {
                setErrorMessage('');
            }
        } else {
            if(!e.target.value.length) {
                setErrorMessage(`${e.target.name} is required!`);
            } else {
                setErrorMessage('');
            }
        }

        if(!errorMessage) {
            setFormState({...formState, [e.target.name] : e.target.value });
        }
    }
    // console.log('errorMessage', errorMessage);

    // console.log(formState);

    function handleSubmit(e) {
        e.preventDefault();
        console.log(formState);
    }

    // JSX
    return (
        <section>
            <h1>Contact me</h1>
            {/* on submission then we run the 'handleSubmit' function */}
            <form id='contact-form' onSubmit={handleSubmit}>
                {/* name input */}
                <div>
                    <label htmlFor='name'>Name:</label>
                    <input type='text' defaultValue={name} onBlur={handleChange} name='name' /> 
                </div>
                {/* email input */}
                <div>
                    <label htmlFor='email'>Email address:</label>
                    <input type='email' defaultValue={email} name='email' onBlur={handleChange} /> 
                </div>
                {/* message text area */}
                <div>
                    <label htmlFor='message'>Message:</label>
                    <textarea name='message' defaultValue={message} onBlur={handleChange} rows='5' />
                </div>

                {errorMessage && (
                    <div>
                        <p className='error-text'>{errorMessage}</p>
                    </div>
                )}
                
                <button type='submit'>Submit</button>
            </form>
        </section>
    );
}

export default ContactForm;