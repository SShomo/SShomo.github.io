'use client'

import { useState } from 'react'
import { Mail, User, MessageSquare, Cat } from 'lucide-react'

export default function Contact() {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' })

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData(prevState => ({ ...prevState, [name]: value }))
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    console.log('Form submitted:', formData)
    setFormData({ name: '', email: '', message: '' })
  }

  return (
    <section id="contact" className="mb-12">
      <h2 className="text-2xl font-bold mb-4 text-amber-800 flex items-center">
        <Mail className="w-6 h-6 mr-2" /> Cat-act Me
      </h2>
      <form onSubmit={handleSubmit} className="bg-amber-100 p-6 rounded shadow">
        <div className="mb-4">
          <label htmlFor="name" className="block text-amber-800 font-bold mb-2 flex items-center">
            <User className="w-4 h-4 mr-2" /> Name
          </label>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            required
            className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-amber-500"
          />
        </div>
        <div className="mb-4">
          <label htmlFor="email" className="block text-amber-800 font-bold mb-2 flex items-center">
            <Mail className="w-4 h-4 mr-2" /> Email
          </label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
            className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-amber-500"
          />
        </div>
        <div className="mb-4">
          <label htmlFor="message" className="block text-amber-800 font-bold mb-2 flex items-center">
            <MessageSquare className="w-4 h-4 mr-2" /> Meow-ssage
          </label>
          <textarea
            id="message"
            name="message"
            value={formData.message}
            onChange={handleChange}
            required
            rows={4}
            className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-amber-500"
          ></textarea>
        </div>
        <button type="submit" className="bg-amber-600 text-white px-4 py-2 rounded hover:bg-amber-700 transition-colors flex items-center">
          Send Meow-ssage <Cat className="w-4 h-4 ml-2" />
        </button>
      </form>
    </section>
  )
}

