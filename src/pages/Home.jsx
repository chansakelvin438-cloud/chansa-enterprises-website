import SEO from '../components/SEO';
import WebsiteReadinessChecker from "../components/WebsiteReadinessChecker";
import WebsitePackageCalculator from '../components/WebsitePackageCalculator';
import FeaturedDeals from '../components/FeaturedDeals';

function Home() {
  return (
    <>

       <SEO
            title="Chansa Enterprises | Smart Tech Solutions"
            description="Chansa Enterprises provides web development, hosting, business email, electronics, graphic design, networking, software support, and IT solutions."
            url="https://chansaenterprises.com"
            />
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
      <WebsiteReadinessChecker /> 
      <WebsitePackageCalculator />
      <FeaturedDeals />
       <section className="bg-white px-6 py-20 text-slate-950">
  <div className="mx-auto max-w-7xl">
    <div className="max-w-3xl">
      <p className="text-sm font-semibold uppercase tracking-[0.25em] text-cyan-700">
        Featured Services
      </p>

      <h2 className="mt-4 text-3xl font-bold md:text-5xl">
        Technology services built for businesses and individuals.
      </h2>

      <p className="mt-4 text-slate-600">
        Chansa Enterprises brings together digital services, electronics, hosting,
        email setup, and technical support under one professional brand.
      </p>
    </div>

    <div className="mt-10 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
      {[
        {
          title: 'Web Development',
          text: 'Professional websites for businesses, brands, portfolios, shops, and organisations.',
          link: '/services',
          icon: '🌐',
        },
        {
          title: 'Business Email',
          text: 'Professional email setup using your domain, such as info@yourbusiness.com.',
          link: '/services',
          icon: '✉️',
        },
        {
          title: 'Domains & Hosting',
          text: 'Domain connection, hosting setup, SSL support, and website deployment assistance.',
          link: '/services',
          icon: '🚀',
        },
        {
          title: 'Electronics Catalogue',
          text: 'Phones, laptops, smart watches, earbuds, accessories, and device support.',
          link: '/catalogue',
          icon: '📱',
        },
        {
          title: 'IT Support',
          text: 'Software troubleshooting, phone and laptop support, networking, and technical guidance.',
          link: '/services',
          icon: '🛠️',
        },
        {
          title: 'Graphic Design',
          text: 'Posters, catalogues, adverts, business branding, and social media graphics.',
          link: '/services',
          icon: '🎨',
        },
      ].map((service) => (
        <div
          key={service.title}
          className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm transition hover:-translate-y-1 hover:shadow-xl"
        >
          <div className="mb-5 flex h-14 w-14 items-center justify-center rounded-2xl bg-cyan-100 text-2xl">
            {service.icon}
          </div>

          <h3 className="text-xl font-bold">{service.title}</h3>

          <p className="mt-4 text-sm leading-7 text-slate-600">
            {service.text}
          </p>

          <a
            href={service.link}
            className="mt-6 inline-block text-sm font-semibold text-cyan-700"
          >
            Learn more →
          </a>
        </div>
      ))}
    </div>
  </div>
</section>
       <section className="bg-slate-100 px-6 py-20 text-slate-950">
  <div className="mx-auto max-w-7xl">
    <div className="max-w-3xl">
      <p className="text-sm font-semibold uppercase tracking-[0.25em] text-cyan-700">
        How It Works
      </p>

      <h2 className="mt-4 text-3xl font-bold md:text-5xl">
        Simple steps to get started with Chansa Enterprises.
      </h2>

      <p className="mt-4 text-slate-600">
        Whether you need a website, business email, electronics, graphic design,
        hosting, or technical support, the process is simple and customer-focused.
      </p>
    </div>

    <div className="mt-10 grid gap-6 md:grid-cols-2 lg:grid-cols-4">
      {[
        {
          step: '01',
          title: 'Choose What You Need',
          text: 'Select a service, package, product category, or technical support option.',
        },
        {
          step: '02',
          title: 'Send an Enquiry',
          text: 'Contact us through WhatsApp, email, or the enquiry form with your request.',
        },
        {
          step: '03',
          title: 'Get a Quote',
          text: 'We review your request and provide guidance, options, pricing, and next steps.',
        },
        {
          step: '04',
          title: 'Receive Support',
          text: 'We help with delivery, setup, configuration, troubleshooting, or project completion.',
        },
      ].map((item) => (
        <div
          key={item.step}
          className="rounded-3xl bg-white p-6 shadow-sm transition hover:-translate-y-1 hover:shadow-xl"
        >
          <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-2xl bg-cyan-100 text-sm font-black text-cyan-700">
            {item.step}
          </div>

          <h3 className="text-xl font-bold">{item.title}</h3>

          <p className="mt-4 text-sm leading-7 text-slate-600">
            {item.text}
          </p>
        </div>
      ))}
    </div>

    <div className="mt-10 rounded-3xl bg-slate-950 p-8 text-white md:p-10">
      <div className="grid gap-6 md:grid-cols-2 md:items-center">
        <div>
          <p className="text-sm font-semibold uppercase tracking-[0.25em] text-cyan-300">
            Quick Start
          </p>

          <h3 className="mt-3 text-2xl font-bold md:text-3xl">
            Ready to start? Send your request on WhatsApp.
          </h3>

          <p className="mt-4 text-sm leading-7 text-slate-300">
            Tell us what you need, your budget range if available, and your preferred timeline.
            We will respond with the next steps.
          </p>
        </div>

        <div className="flex md:justify-end">
          <a
            href="https://wa.me/260967644528?text=Hello%20Chansa%20Enterprises,%20I%20would%20like%20to%20start%20an%20enquiry."
            className="rounded-full bg-cyan-400 px-8 py-3 font-semibold text-slate-950 hover:bg-cyan-300"
          >
            Start an Enquiry
          </a>
        </div>
      </div>
    </div>
  </div>
</section>

      <section className="bg-white px-6 py-20 text-slate-950">
  <div className="mx-auto max-w-7xl">
    <div className="grid gap-10 md:grid-cols-2 md:items-center">
      <div>
        <p className="text-sm font-semibold uppercase tracking-[0.25em] text-cyan-700">
          Why Choose Us
        </p>

        <h2 className="mt-4 text-3xl font-bold md:text-5xl">
          Practical technology support with a professional approach.
        </h2>

        <p className="mt-5 text-slate-600">
          Chansa Enterprises focuses on helping individuals, small businesses,
          professionals, and organisations access reliable digital services,
          electronics, and technical support.
        </p>

        <div className="mt-8 flex flex-col gap-4 sm:flex-row">
          <a
            href="/services"
            className="rounded-full bg-slate-950 px-7 py-3 text-center font-semibold text-white hover:bg-slate-800"
          >
            View Services
          </a>

          <a
            href="https://wa.me/260967644528?text=Hello%20Chansa%20Enterprises,%20I%20would%20like%20to%20ask%20about%20your%20services."
            className="rounded-full border border-slate-300 px-7 py-3 text-center font-semibold text-slate-950 hover:bg-slate-100"
          >
            Ask on WhatsApp
          </a>
        </div>
      </div>

      <div className="grid gap-4">
        {[
          {
            title: 'Clear Communication',
            text: 'We explain services, pricing, requirements, and next steps in a simple and professional way.',
          },
          {
            title: 'Business-Focused Solutions',
            text: 'Our services are designed to support real business needs such as websites, email, catalogues, and IT setup.',
          },
          {
            title: 'Digital and Device Support',
            text: 'Customers can get help with both online services and practical device-related support.',
          },
          {
            title: 'Flexible Service Packages',
            text: 'Solutions can be adjusted depending on the customer’s budget, scope, and technical requirements.',
          },
        ].map((item) => (
          <div
            key={item.title}
            className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm"
          >
            <div className="flex gap-4">
              <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-cyan-100 text-sm font-bold text-cyan-700">
                ✓
              </span>

              <div>
                <h3 className="font-bold text-slate-950">{item.title}</h3>
                <p className="mt-2 text-sm leading-7 text-slate-600">{item.text}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  </div>
</section>

      <section className="bg-slate-100 px-6 py-20 text-slate-950">
  <div className="mx-auto max-w-7xl">
    <div className="max-w-3xl">
      <p className="text-sm font-semibold uppercase tracking-[0.25em] text-cyan-700">
        Frequently Asked Questions
      </p>

      <h2 className="mt-4 text-3xl font-bold md:text-5xl">
        Common questions before getting started.
      </h2>

      <p className="mt-4 text-slate-600">
        These answers help customers understand how Chansa Enterprises handles
        websites, hosting, business email, electronics, and technical support.
      </p>
    </div>

    <div className="mt-10 grid gap-5 md:grid-cols-2">
      {[
        {
          question: 'Do you build websites for small businesses?',
          answer:
            'Yes. Chansa Enterprises builds mobile-friendly websites for small businesses, portfolios, service providers, organisations, and personal brands.',
        },
        {
          question: 'Can you help me buy and connect a domain?',
          answer:
            'Yes. We can guide customers through domain registration, DNS setup, hosting connection, SSL setup, and website deployment.',
        },
        {
          question: 'Do you set up professional business emails?',
          answer:
            'Yes. We can help set up domain-based emails such as info@yourbusiness.com and guide customers on webmail, phone, and laptop access.',
        },
        {
          question: 'Are electronics prices fixed?',
          answer:
            'No. Electronics prices change depending on availability, model, storage, condition, and supplier pricing. Customers should request current prices on WhatsApp.',
        },
        {
          question: 'Do you offer phone and laptop support?',
          answer:
            'Yes. We offer basic support for phone setup, laptop setup, email configuration, software installation, updates, and troubleshooting guidance.',
        },
        {
          question: 'How do customers request a quotation?',
          answer:
            'Customers can use the WhatsApp button, enquiry form, email, or contact page. The more details provided, the easier it is to give an accurate quotation.',
        },
      ].map((item) => (
        <div
          key={item.question}
          className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm"
        >
          <h3 className="text-lg font-bold">{item.question}</h3>

          <p className="mt-3 text-sm leading-7 text-slate-600">
            {item.answer}
          </p>
        </div>
      ))}
    </div>

    <div className="mt-10 rounded-3xl bg-slate-950 p-8 text-white md:p-10">
      <div className="grid gap-6 md:grid-cols-2 md:items-center">
        <div>
          <p className="text-sm font-semibold uppercase tracking-[0.25em] text-cyan-300">
            Still Have Questions?
          </p>

          <h3 className="mt-3 text-2xl font-bold md:text-3xl">
            Contact Chansa Enterprises directly.
          </h3>

          <p className="mt-4 text-sm leading-7 text-slate-300">
            Send your question on WhatsApp and we will respond with guidance,
            available options, or a quotation.
          </p>
        </div>

        <div className="flex md:justify-end">
          <a
            href="https://wa.me/260967644528?text=Hello%20Chansa%20Enterprises,%20I%20have%20a%20question%20about%20your%20services."
            className="rounded-full bg-cyan-400 px-8 py-3 font-semibold text-slate-950 hover:bg-cyan-300"
          >
            Ask a Question
          </a>
        </div>
      </div>
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