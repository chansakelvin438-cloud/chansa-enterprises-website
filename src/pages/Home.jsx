function Home() {
  return (
    <>
      <section className="relative overflow-hidden bg-slate-950 px-6 py-16 text-white md:py-24">
        <div className="absolute left-1/2 top-20 h-72 w-72 -translate-x-1/2 rounded-full bg-cyan-400/20 blur-3xl"></div>
        <div className="absolute right-10 top-40 h-60 w-60 rounded-full bg-blue-500/20 blur-3xl"></div>

        <div className="relative mx-auto grid max-w-7xl gap-12 md:grid-cols-2 md:items-center">
          <div>
            <div className="mb-6 inline-flex rounded-full border border-cyan-400/30 bg-cyan-400/10 px-4 py-2 text-xs font-semibold uppercase tracking-[0.25em] text-cyan-300">
              Web • Hosting • Electronics • IT Support
            </div>

            <h1 className="text-4xl font-black leading-tight tracking-tight md:text-6xl">
              Professional Tech Solutions for Modern Businesses.
            </h1>

            <p className="mt-6 max-w-xl text-base leading-7 text-slate-300 md:text-lg md:leading-8">
              Chansa Enterprises provides web development, hosting, business email,
              graphic design, networking support, software troubleshooting, electronics,
              and IT services for individuals and businesses.
            </p>

            <div className="mt-8 flex flex-col gap-4 sm:flex-row">
              <a
                href="https://wa.me/260967644528"
                className="rounded-full bg-cyan-400 px-7 py-3 text-center font-semibold text-slate-950 shadow-lg shadow-cyan-400/20 hover:bg-cyan-300"
              >
                Request a Quote
              </a>

              <a
                href="/catalogue"
                className="rounded-full border border-white/20 px-7 py-3 text-center font-semibold text-white hover:bg-white/10"
              >
                View Products
              </a>
            </div>

            <div className="mt-10 grid gap-4 text-sm text-slate-300 sm:grid-cols-3">
              <div className="rounded-2xl border border-white/10 bg-white/5 p-4">
                <p className="text-2xl font-bold text-white">01</p>
                <p className="mt-1">Digital services</p>
              </div>

              <div className="rounded-2xl border border-white/10 bg-white/5 p-4">
                <p className="text-2xl font-bold text-white">02</p>
                <p className="mt-1">Electronics supply</p>
              </div>

              <div className="rounded-2xl border border-white/10 bg-white/5 p-4">
                <p className="text-2xl font-bold text-white">03</p>
                <p className="mt-1">IT support</p>
              </div>
            </div>
          </div>

          <div className="rounded-3xl border border-white/10 bg-white/5 p-6 shadow-2xl backdrop-blur md:p-8">
            <div className="rounded-2xl bg-slate-900/80 p-6">
              <p className="text-sm font-semibold uppercase tracking-[0.25em] text-cyan-300">
                Business Solutions
              </p>

              <h2 className="mt-4 text-2xl font-bold">
                Build, connect, support and grow your digital presence.
              </h2>

              <div className="mt-6 grid gap-4">
                {[
                  ['Websites & Portfolios', 'Modern websites for businesses, shops, brands, and professionals.'],
                  ['Domains, Hosting & Email', 'Domain setup, web hosting, SSL, and business email configuration.'],
                  ['Electronics & Device Support', 'Phones, laptops, accessories, troubleshooting, and software support.'],
                ].map(([title, text]) => (
                  <div key={title} className="rounded-2xl border border-white/10 bg-white/5 p-5">
                    <h3 className="font-semibold text-cyan-300">{title}</h3>
                    <p className="mt-2 text-sm leading-6 text-slate-400">{text}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-white px-6 py-20 text-slate-950">
        <div className="mx-auto max-w-7xl">
          <div className="max-w-2xl">
            <p className="text-sm font-semibold uppercase tracking-[0.25em] text-cyan-700">
              Why Choose Us
            </p>

            <h2 className="mt-3 text-3xl font-bold md:text-4xl">
              Practical, professional and customer-focused.
            </h2>

            <p className="mt-4 text-slate-600">
              Chansa Enterprises combines digital services, device support, and electronics
              supply into one reliable technology partner.
            </p>
          </div>

          <div className="mt-10 grid gap-6 md:grid-cols-3">
            {[
              ['Affordable Digital Solutions', 'Websites, business email, graphics, and hosting support for growing businesses.'],
              ['Fast WhatsApp Support', 'Customers can quickly request quotes, product details, and technical assistance.'],
              ['Business & Individual Support', 'Solutions for companies, entrepreneurs, students, and personal device users.'],
            ].map(([title, text]) => (
              <div key={title} className="rounded-2xl border border-slate-200 p-6 shadow-sm transition hover:-translate-y-1 hover:shadow-lg">
                <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-xl bg-cyan-100 text-xl">
                  ✓
                </div>
                <h3 className="font-bold">{title}</h3>
                <p className="mt-3 text-sm leading-6 text-slate-600">{text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-slate-100 px-6 py-20 text-slate-950">
        <div className="mx-auto max-w-7xl rounded-3xl bg-slate-950 px-6 py-12 text-center text-white md:px-12">
          <p className="text-sm font-semibold uppercase tracking-[0.25em] text-cyan-300">
            Get Started
          </p>

          <h2 className="mx-auto mt-4 max-w-3xl text-3xl font-bold md:text-4xl">
            Need a website, business email, device, or technical support?
          </h2>

          <p className="mx-auto mt-4 max-w-2xl text-slate-300">
            Contact Chansa Enterprises today and get a solution that fits your business,
            budget, and technical needs.
          </p>

          <a
            href="https://wa.me/260967644528"
            className="mt-8 inline-block rounded-full bg-cyan-400 px-8 py-3 font-semibold text-slate-950 hover:bg-cyan-300"
          >
            Chat on WhatsApp
          </a>
        </div>
      </section>
    </>
  )
}

export default Home