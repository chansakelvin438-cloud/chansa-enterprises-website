import SEO from '../components/SEO'

function About() {
  return (
    <>
       <SEO
  title="About Chansa Enterprises | Technology Services in Zambia"
  description="Learn about Chansa Enterprises, a technology-focused business providing digital services, electronics, and IT support for businesses and individuals."
  url="https://chansaenterprises.com/about"
/>

      <section className="bg-slate-950 px-6 py-20 text-white">
        <div className="mx-auto max-w-7xl">
          <p className="text-sm font-semibold uppercase tracking-[0.25em] text-cyan-400">
            About Chansa Enterprises
          </p>

          <h1 className="mt-4 max-w-4xl text-4xl font-black leading-tight md:text-6xl">
            A technology brand built to support businesses and individuals.
          </h1>

          <p className="mt-6 max-w-3xl text-lg leading-8 text-slate-300">
            Chansa Enterprises provides digital services, electronics, and practical IT
            support for customers who need reliable technology solutions in one place.
          </p>
        </div>
      </section>

      <section className="bg-white px-6 py-20 text-slate-950">
        <div className="mx-auto grid max-w-7xl gap-12 md:grid-cols-2 md:items-start">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.25em] text-cyan-700">
              Who We Are
            </p>

            <h2 className="mt-3 text-3xl font-bold md:text-4xl">
              Digital services, devices, and support for modern customers.
            </h2>
          </div>

          <div className="space-y-5 text-lg leading-8 text-slate-600">
            <p>
              Chansa Enterprises is a technology-focused business offering website
              development, hosting support, business email setup, graphic design,
              networking assistance, software troubleshooting, electronics, and
              general IT support.
            </p>

            <p>
              The business is built around practical technology solutions for small
              businesses, entrepreneurs, professionals, students, and individual
              customers who need reliable digital support.
            </p>

            <p>
              Our goal is to make technology easier to access, understand, and use,
              while maintaining a professional standard in communication, design,
              service delivery, and customer support.
            </p>
          </div>
        </div>
      </section>

      <section className="bg-slate-100 px-6 py-20 text-slate-950">
        <div className="mx-auto max-w-7xl">
          <div className="grid gap-6 md:grid-cols-3">
            <div className="rounded-3xl bg-white p-6 shadow-sm">
              <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-2xl bg-cyan-100 text-xl">
                🎯
              </div>
              <h3 className="text-xl font-bold">Our Mission</h3>
              <p className="mt-4 text-sm leading-7 text-slate-600">
                To provide affordable, reliable, and professional technology solutions
                that help individuals and businesses operate more efficiently.
              </p>
            </div>

            <div className="rounded-3xl bg-white p-6 shadow-sm">
              <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-2xl bg-cyan-100 text-xl">
                👁️
              </div>
              <h3 className="text-xl font-bold">Our Vision</h3>
              <p className="mt-4 text-sm leading-7 text-slate-600">
                To become a trusted technology partner for digital services, electronics,
                and business IT support across Zambia and beyond.
              </p>
            </div>

            <div className="rounded-3xl bg-white p-6 shadow-sm">
              <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-2xl bg-cyan-100 text-xl">
                🤝
              </div>
              <h3 className="text-xl font-bold">Our Promise</h3>
              <p className="mt-4 text-sm leading-7 text-slate-600">
                To serve customers with clear communication, practical advice,
                dependable support, and solutions that match their needs.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-white px-6 py-20 text-slate-950">
        <div className="mx-auto grid max-w-7xl gap-10 md:grid-cols-2 md:items-center">
          <div className="rounded-3xl bg-slate-950 p-8 text-white shadow-xl">
            <p className="text-sm font-semibold uppercase tracking-[0.25em] text-cyan-300">
              What We Support
            </p>

            <h2 className="mt-4 text-3xl font-bold">
              One brand for digital, device, and business technology needs.
            </h2>

            <p className="mt-4 leading-7 text-slate-300">
              Instead of separating websites, hosting, email, graphics, device support,
              and electronics, Chansa Enterprises brings these services together under
              one professional brand.
            </p>
          </div>

          <div className="grid gap-4">
            {[
              'Business websites and online presence',
              'Domain, hosting, and professional email setup',
              'Electronics sourcing and product guidance',
              'Software, phone, and laptop troubleshooting',
              'Graphic design for adverts, catalogues, and branding',
              'Networking and business IT support',
            ].map((item) => (
              <div
                key={item}
                className="flex items-center gap-4 rounded-2xl border border-slate-200 p-5 shadow-sm"
              >
                <span className="flex h-8 w-8 items-center justify-center rounded-full bg-cyan-100 text-sm font-bold text-cyan-700">
                  ✓
                </span>
                <p className="font-medium text-slate-700">{item}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-slate-100 px-6 py-20 text-slate-950">
        <div className="mx-auto max-w-7xl rounded-3xl bg-slate-950 px-6 py-12 text-center text-white md:px-12">
          <p className="text-sm font-semibold uppercase tracking-[0.25em] text-cyan-300">
            Work With Us
          </p>

          <h2 className="mx-auto mt-4 max-w-3xl text-3xl font-bold md:text-4xl">
            Need a technology partner for your next digital or device solution?
          </h2>

          <p className="mx-auto mt-4 max-w-2xl text-slate-300">
            Contact Chansa Enterprises for websites, hosting, business email,
            electronics, software support, and IT assistance.
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

export default About