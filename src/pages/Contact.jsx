import EnquiryForm from '../components/EnquiryForm'

const contactOptions = [
  {
    title: 'WhatsApp',
    detail: '+260 967 644 528',
    description: 'Fastest way to request quotes, product prices, support, or service details.',
    action: 'Chat on WhatsApp',
    link: 'https://wa.me/260967644528',
    icon: '💬',
  },
  {
    title: 'Email',
    detail: 'info@chansaenterprises.com',
    description: 'Send formal enquiries, service requests, quotations, and business communication.',
    action: 'Send Email',
    link: 'mailto:info@chansaenterprises.com',
    icon: '✉️',
  },
  {
    title: 'Website',
    detail: 'chansaenterprises.com',
    description: 'Visit our official website for services, electronics catalogue, and business information.',
    action: 'Visit Website',
    link: 'https://chansaenterprises.com',
    icon: '🌐',
  },
]

function Contact() {
  return (
    <>
      <section className="bg-slate-950 px-6 py-20 text-white">
        <div className="mx-auto max-w-7xl">
          <p className="text-sm font-semibold uppercase tracking-[0.25em] text-cyan-400">
            Contact Chansa Enterprises
          </p>

          <h1 className="mt-4 max-w-4xl text-4xl font-black leading-tight md:text-6xl">
            Let us help you with your next tech solution.
          </h1>

          <p className="mt-6 max-w-3xl text-lg leading-8 text-slate-300">
            Contact us for web development, hosting, business email, graphics, networking,
            software support, electronics, and general IT assistance.
          </p>

          <div className="mt-8 flex flex-col gap-4 sm:flex-row">
            <a
              href="https://wa.me/260967644528"
              className="rounded-full bg-cyan-400 px-7 py-3 text-center font-semibold text-slate-950 hover:bg-cyan-300"
            >
              Chat on WhatsApp
            </a>

            <a
              href="mailto:info@chansaenterprises.com"
              className="rounded-full border border-white/20 px-7 py-3 text-center font-semibold text-white hover:bg-white/10"
            >
              Send Email
            </a>
          </div>
        </div>
      </section>

      <section className="bg-white px-6 py-20 text-slate-950">
        <div className="mx-auto max-w-7xl">
          <div className="grid gap-6 md:grid-cols-3">
            {contactOptions.map((option) => (
              <div
                key={option.title}
                className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm transition hover:-translate-y-1 hover:shadow-xl"
              >
                <div className="mb-5 flex h-14 w-14 items-center justify-center rounded-2xl bg-cyan-100 text-2xl">
                  {option.icon}
                </div>

                <h2 className="text-xl font-bold">{option.title}</h2>

                <p className="mt-2 font-semibold text-cyan-700">{option.detail}</p>

                <p className="mt-4 text-sm leading-7 text-slate-600">
                  {option.description}
                </p>

                <a
                  href={option.link}
                  className="mt-6 inline-block text-sm font-semibold text-cyan-700"
                >
                  {option.action} →
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-slate-100 px-6 py-20 text-slate-950">
        <div className="mx-auto grid max-w-7xl gap-8 md:grid-cols-2">
  <div className="rounded-3xl bg-slate-950 p-8 text-white shadow-xl">
    <p className="text-sm font-semibold uppercase tracking-[0.25em] text-cyan-300">
      Enquiry Guide
    </p>

    <h2 className="mt-4 text-3xl font-bold">
      Tell us what you need
    </h2>

    <p className="mt-4 leading-7 text-slate-300">
      Use the enquiry form to prepare your message, then continue on WhatsApp.
      This makes it easier for Chansa Enterprises to understand your request and respond quickly.
    </p>

    <div className="mt-8 grid gap-4">
      {[
        'For websites: mention the type of website and number of pages.',
        'For hosting/email: mention your domain name and number of email accounts needed.',
        'For electronics: mention the model, storage, condition, and budget.',
        'For support: describe the issue clearly and attach screenshots where possible.',
      ].map((item) => (
        <div key={item} className="flex gap-4 rounded-2xl border border-white/10 bg-white/5 p-5">
          <span className="mt-1 flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-cyan-400 text-sm font-bold text-slate-950">
            ✓
          </span>
          <p className="text-sm leading-7 text-slate-300">{item}</p>
        </div>
      ))}
    </div>
  </div>

  <EnquiryForm />
</div>
      </section>

      <section className="bg-white px-6 py-20 text-slate-950">
        <div className="mx-auto max-w-7xl rounded-3xl bg-slate-950 px-6 py-12 text-center text-white md:px-12">
          <p className="text-sm font-semibold uppercase tracking-[0.25em] text-cyan-300">
            Ready to start?
          </p>

          <h2 className="mx-auto mt-4 max-w-3xl text-3xl font-bold md:text-4xl">
            Send us a message and we will respond with the next steps.
          </h2>

          <p className="mx-auto mt-4 max-w-2xl text-slate-300">
            Chansa Enterprises is ready to assist with digital services, electronics,
            and technical support.
          </p>

          <a
            href="https://wa.me/260967644528?text=Hello%20Chansa%20Enterprises,%20I%20would%20like%20to%20make%20an%20enquiry."
            className="mt-8 inline-block rounded-full bg-cyan-400 px-8 py-3 font-semibold text-slate-950 hover:bg-cyan-300"
          >
            Start WhatsApp Enquiry
          </a>
        </div>
      </section>
    </>
  )
}

export default Contact