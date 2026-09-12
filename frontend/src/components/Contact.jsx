import React, { useState } from 'react'
import axios from 'axios'

function Contact() {
  const [form, setForm] = useState({
    name: '',
    email: '',
    message: ''
  })
  const [status, setStatus] = useState('idle')
  const [message, setMessage] = useState('')

  const handleChange = (e) => {
    const { name, value } = e.target
    setForm(prev => ({
      ...prev,
      [name]: value
    }))
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    setStatus('loading')

    try {
      const response = await axios.post('/api/contact/', form)
      setStatus('success')
      setMessage('Message sent successfully!')
      setForm({ name: '', email: '', message: '' })
      setTimeout(() => {
        setStatus('idle')
        setMessage('')
      }, 3000)
    } catch (error) {
      setStatus('error')
      setMessage('Failed to send message. Please try again.')
      setTimeout(() => {
        setStatus('idle')
        setMessage('')
      }, 3000)
    }
  }

  return (
    <section id="contact">
      <h2>Get In Touch</h2>
      <div className="contact-form">
        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label htmlFor="name">Name</label>
            <input
              type="text"
              id="name"
              name="name"
              value={form.name}
              onChange={handleChange}
              required
              placeholder="Your name"
            />
          </div>
          <div className="form-group">
            <label htmlFor="email">Email</label>
            <input
              type="email"
              id="email"
              name="email"
              value={form.email}
              onChange={handleChange}
              required
              placeholder="your@email.com"
            />
          </div>
          <div className="form-group">
            <label htmlFor="message">Message</label>
            <textarea
              id="message"
              name="message"
              value={form.message}
              onChange={handleChange}
              required
              rows="5"
              placeholder="Your message..."
            />
          </div>
          <button type="submit" disabled={status === 'loading'}>
            {status === 'loading' ? 'Sending...' : 'Send Message'}
          </button>
        </form>
        {message && (
          <div style={{
            marginTop: '20px',
            padding: '15px',
            borderRadius: '4px',
            background: status === 'success' ? '#d4edda' : '#f8d7da',
            color: status === 'success' ? '#155724' : '#721c24'
          }}>
            {message}
          </div>
        )}
      </div>
    </section>
  )
}

export default Contact
