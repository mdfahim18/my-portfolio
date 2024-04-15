import React, { useState } from 'react';
import './style.scss';
import axios from 'axios';

const EmailJs = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    const serviceId = 'service_092cusx';
    const templateId = 'template_v9g3cni';
    const publicKey = 'rjA7TpZ76hAVwLAOQ';
    console.log(templateId);
    const data = {
      service_id: serviceId,
      template_id: templateId,
      user_id: publicKey,
      template_params: {
        from_name: name,
        from_email: email,
        usename: 'Md Fahim',
        message: message,
      },
    };

    try {
      const res = await axios.post(
        'https://api.emailjs.com/api/v1.0/email/send',
        data
      );
      console.log(res.data);
      setName('');
      setEmail('');
      setMessage('');
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label htmlFor='name'>Name:</label>
        <input
          type='text'
          id='name'
          name='name'
          value={name}
          onChange={(e) => setName(e.target.value)}
          required
        />
      </div>
      <div>
        <label htmlFor='email'>Email:</label>
        <input
          type='email'
          id='email'
          name='email'
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
      </div>
      <div>
        <label htmlFor='message'>Message:</label>
        <textarea
          id='message'
          name='message'
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          required
        ></textarea>
      </div>
      <button type='submit' className='submit-btn'>
        Send
      </button>
    </form>
  );
};

export default EmailJs;
