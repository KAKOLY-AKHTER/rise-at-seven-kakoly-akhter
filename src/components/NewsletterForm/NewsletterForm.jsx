import { useState } from 'react'
import './NewsletterForm.css'

export default function NewsletterForm() {
  const [email, setEmail] = useState('')
  const [submitted, setSubmitted] = useState(false)

  const handleSubmit = (e) => {
    e.preventDefault()
    if (!email) return
    setSubmitted(true)
  }

  if (submitted) {
    return (
      <div className="nl-success">
        <p>Thanks for subscribing!</p>
      </div>
    )
  }

  return (
    <form className="nl-form" onSubmit={handleSubmit}>
      <label className="nl-label">Sign up to our newsletter</label>
      <div className="nl-row">
        <input
          type="email"
          className="nl-input"
          placeholder="Your email address"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
        <button type="submit" className="nl-btn">Subscribe</button>
      </div>
    </form>
  )
}
