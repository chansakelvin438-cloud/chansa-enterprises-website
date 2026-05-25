import { useState } from 'react'

function EnquiryForm() {
  const [form, setForm] = useState({
    name: '',
    service: 'Website Development',
    message: '',
  })

  const handleChange = (event) => {
    const { name, value } = event.target

    setForm((currentForm) => ({
      ...currentForm,
      [name]: value,
    }))
  }

  const whatsappMessage = encodeURIComponent(
    `Hello Chansa Enterprises, my name is ${form.name}. I am interested in ${form.service}. ${form.message}`,
  )

  return (
    <div className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm">
      <h3 className="text-2xl font-bold text-slate-950">Send an Enquiry</h3>

      <p className="mt-3 text-sm leading-7 text-slate-600">
        Fill in the details below and continue on WhatsApp. This helps us understand
        what you need before responding.
      </p>

      <div className="mt-6 grid gap-5">
        <div>
          <label className="text-sm font-semibold text-slate-700">Your Name</label>
          <input
            type="text"
            name="name"
            value={form.name}
            onChange={handleChange}
            placeholder="Enter your name"
            className="mt-2 w-full rounded-2xl border border-slate-200 px-4 py-3 text-slate-950 outline-none focus:border-cyan-500"
          />
        </div>

        <div>
          <label className="text-sm font-semibold text-slate-700">What do you need?</label>
          <select
            name="service"
            value={form.service}
            onChange={handleChange}
            className="mt-2 w-full rounded-2xl border border-slate-200 px-4 py-3 text-slate-950 outline-none focus:border-cyan-500"
          >
            <option>Website Development</option>
            <option>Web Hosting</option>
            <option>Business Email</option>
            <option>Graphic Design</option>
            <option>Electronics / Device Purchase</option>
            <option>Phone or Laptop Support</option>
            <option>Networking Support</option>
            <option>General IT Support</option>
          </select>
        </div>

        <div>
          <label className="text-sm font-semibold text-slate-700">Message</label>
          <textarea
            name="message"
            value={form.message}
            onChange={handleChange}
            placeholder="Briefly describe what you need"
            rows="5"
            className="mt-2 w-full rounded-2xl border border-slate-200 px-4 py-3 text-slate-950 outline-none focus:border-cyan-500"
          ></textarea>
        </div>

        <a
          href={`https://wa.me/260967644528?text=${whatsappMessage}`}
          target="_blank"
          rel="noopener noreferrer"
          className="rounded-full bg-cyan-400 px-6 py-3 text-center font-semibold text-slate-950 hover:bg-cyan-300"
        >
          Continue on WhatsApp
        </a>
      </div>
    </div>
  )
}

export default EnquiryForm