import { useState } from 'react';

export default function Contact() {
  const [form, setForm] = useState({ name: '', email: '', message: '' });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm({ ...form, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!form.name || !form.email || !form.message) {
      alert('All fields are required');
      return;
    }
    alert('Form submitted successfully!');
  };

  return (
    <div>
      <h1>Contact Me</h1>
      <form onSubmit={handleSubmit} className='container'>
        <label>
          Name:
          <input type="text" name="name" value={form.name} onChange={handleChange} />
        </label>
        <br />
        <label>
          Email:
          <input type="email" name="email" value={form.email} onChange={handleChange} />
        </label>
        <br />
        <label>
          Message:
          <textarea name="message" value={form.message} onChange={handleChange} />
        </label>
        <br />
        <button type="submit">Submit</button>
      </form>
    </div>
  );
}
