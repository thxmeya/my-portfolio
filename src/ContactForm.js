import React, { useState } from 'react'; 
function ContactForm() { 
// State variables to store form inputs 
const [name, setName] = useState(''); 
const [email, setEmail] = useState(''); 
const [message, setMessage] = useState(''); 
const [error, setError] = useState(''); 
// Function to handle form submission 
const handleSubmit = (e) => { 
e.preventDefault(); // Prevents page refresh 
if (!email.includes('@')) { 
setError('Please enter a valid email.'); 
return; 
} 
alert(`Thank you ${name}, your message has been sent!`); 
// Reset form 
setName(''); 
setEmail(''); 
setMessage(''); 
setError(''); 
}; 
return ( 
<section style={{ padding: '20px', maxWidth: '400px', margin: 'auto' }}> 
<h2>Contact Me</h2> 
<form onSubmit={handleSubmit}> 
<div> 
<label>Name:</label><br /> 
<input type="text" value={name} onChange={(e) => 
setName(e.target.value)} required /> 
</div> 
<div> 
<label>Email:</label><br /> 
<input type="email" value={email} onChange={(e) => 
setEmail(e.target.value)} required /> 
</div> 
<div> 
<label>Message:</label><br /> 
<textarea value={message} onChange={(e) => 
setMessage(e.target.value)} required /> 
</div> 
{error && <p style={{ color: 'red' }}>{error}</p>} 
<button type="submit">Send</button> 
</form> 
<p style={{ fontSize: '12px', marginTop: '10px' }}> 
Your data will only be used to contact you. We do not store or share 
your information. 
</p> 
</section> 
); 
} 
export default ContactForm;