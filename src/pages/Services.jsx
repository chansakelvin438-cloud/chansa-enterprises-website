const services = [
  {
    title: 'Web Development',
    description:
      'Professional websites for businesses, portfolios, shops, institutions, and personal brands. We build clean, mobile-friendly websites that help customers understand and contact your business.',
    features: ['Business websites', 'Portfolio sites', 'Landing pages', 'Mobile-friendly design'],
  },
  {
    title: 'Web Hosting',
    description:
      'Reliable hosting setup and website deployment support for businesses that need their websites online and accessible.',
    features: ['Hosting setup', 'Website deployment', 'SSL support', 'Domain connection'],
  },
  {
    title: 'Business Email',
    description:
      'Professional email setup using your own domain, such as info@yourbusiness.com, to make your business look more credible.',
    features: ['Custom email setup', 'Email configuration', 'Phone setup', 'Laptop setup'],
  },
  {
    title: 'Graphic Design',
    description:
      'Clean and professional designs for adverts, posters, catalogues, business branding, and social media promotions.',
    features: ['Posters', 'Catalogues', 'Business adverts', 'Social media graphics'],
  },
  {
    title: 'Network Setup',
    description:
      'Network installation, configuration, and troubleshooting for homes, offices, shops, and small businesses.',
    features: ['Wi-Fi setup', 'Router configuration', 'Basic LAN setup', 'Troubleshooting'],
  },
  {
    title: 'Software Troubleshooting',
    description:
      'Support for common software problems, device errors, system issues, app installation, and basic configuration.',
    features: ['Software issues', 'System errors', 'App installation', 'Device setup'],
  },
  {
    title: 'Phone & Laptop Support',
    description:
      'Technical support for phones and laptops, including setup, troubleshooting, software assistance, and general device guidance.',
    features: ['Phone setup', 'Laptop setup', 'System support', 'Basic diagnostics'],
  },
  {
    title: 'Game & Software Development',
    description:
      'Custom software concepts, small business tools, prototypes, and game development projects for learning, branding, or business use.',
    features: ['Software prototypes', 'Business tools', 'Game projects', 'Custom development'],
  },
  {
    title: 'Business IT Support',
    description:
      'General IT support for businesses that need practical technology help without hiring a full internal IT department.',
    features: ['Technical support', 'Digital setup', 'Business systems', 'Ongoing assistance'],
  },
]

function Services() {
  return (
    <>
      <section className="bg-slate-950 px-6 py-20 text-white">
        <div className="mx-auto max-w-7xl">
          <p className="text-sm font-semibold uppercase tracking-[0.25em] text-cyan-400">
            Services
          </p>

          <h1 className="mt-4 max-w-4xl text-4xl font-black leading-tight md:text-6xl">
            Digital, technical and business support services.
          </h1>

          <p className="mt-6 max-w-3xl text-lg leading-8 text-slate-300">
            Chansa Enterprises helps individuals, entrepreneurs, and businesses access
            reliable technology solutions, from websites and hosting to electronics support
            and business IT assistance.
          </p>

          <div className="mt-8 flex flex-col gap-4 sm:flex-row">
            <a
              href="https://wa.me/260967644528"
              className="rounded-full bg-cyan-400 px-7 py-3 text-center font-semibold text-slate-950 hover:bg-cyan-300"
            >
              Request a Service
            </a>

            <a
              href="/contact"
              className="rounded-full border border-white/20 px-7 py-3 text-center font-semibold text-white hover:bg-white/10"
            >
              Contact Us
            </a>
          </div>
        </div>
      </section>

      <section className="bg-white px-6 py-20 text-slate-950">
        <div className="mx-auto max-w-7xl">
          <div className="grid gap-6 md:grid-cols-3">
            {services.map((service, index) => (
              <div
                key={service.title}
                className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm transition hover:-translate-y-1 hover:shadow-xl"
              >
                <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-2xl bg-cyan-100 text-lg font-bold text-cyan-700">
                  {String(index + 1).padStart(2, '0')}
                </div>

                <h2 className="text-xl font-bold">{service.title}</h2>

                <p className="mt-4 text-sm leading-7 text-slate-600">
                  {service.description}
                </p>

                <div className="mt-6 space-y-3">
                  {service.features.map((feature) => (
                    <div key={feature} className="flex items-center gap-3 text-sm text-slate-700">
                      <span className="flex h-5 w-5 items-center justify-center rounded-full bg-cyan-100 text-xs font-bold text-cyan-700">
                        ✓
                      </span>
                      <span>{feature}</span>
                    </div>
                  ))}
                </div>

                <a
                  href="https://wa.me/260967644528"
                  className="mt-6 inline-block text-sm font-semibold text-cyan-700"
                >
                  Ask about this service →
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-slate-100 px-6 py-20 text-slate-950">
        <div className="mx-auto max-w-7xl rounded-3xl bg-slate-950 p-8 text-white md:p-12">
          <div className="grid gap-8 md:grid-cols-2 md:items-center">
            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.25em] text-cyan-300">
                Service Packages
              </p>

              <h2 className="mt-4 text-3xl font-bold md:text-4xl">
                Need a complete business setup?
              </h2>

              <p className="mt-4 leading-7 text-slate-300">
                We can combine domain registration, hosting, business email, website
                development, graphics, and support into one complete package.
              </p>
            </div>

            <div className="rounded-2xl border border-white/10 bg-white/5 p-6">
              <h3 className="text-xl font-bold text-cyan-300">Recommended Starter Package</h3>

              <ul className="mt-5 space-y-3 text-sm text-slate-300">
                <li>✓ Domain setup</li>
                <li>✓ Business website</li>
                <li>✓ WhatsApp contact button</li>
                <li>✓ Business email setup</li>
                <li>✓ Basic search engine readiness</li>
                <li>✓ Mobile-friendly design</li>
              </ul>

              <a
                href="https://wa.me/260967644528"
                className="mt-6 inline-block rounded-full bg-cyan-400 px-6 py-3 font-semibold text-slate-950 hover:bg-cyan-300"
              >
                Request Package Quote
              </a>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default Services