import React, { useState } from 'react';

function ContactForm() {
    // hook that wil manage the form data
    const [formState, setFormState] = useState({ name: '', email: '', message: ''});

    const { name, email, message } = formState;

    function handleChange(e) {
        setFormState({...formState, [e.target.name] : e.target.value })
    }

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
                    <input type='text' defaultValue={name} onChange={handleChange} name='name' /> 
                </div>
                {/* email input */}
                <div>
                    <label htmlFor='email'>Email address:</label>
                    <input type='email' defaultValue={email} name='email' onChange={handleChange} /> 
                </div>
                {/* message text area */}
                <div>
                    <label htmlFor='message'>Message:</label>
                    <textarea name='message' defaultValue={message} onChange={handleChange} rows='5' />
                </div>
                
                <button type='submit'>Submit</button>
            </form>
        </section>
    );
}

export default ContactForm;