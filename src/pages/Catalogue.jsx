const productCategories = [
  {
    title: 'iPhones',
    description:
      'iPhones from older reliable models to newer premium models, depending on availability.',
    examples: ['iPhone XR and newer', 'iPhone 11–15 series', 'Pro and Pro Max models'],
    icon: '📱',
  },
  {
    title: 'Samsung Phones',
    description:
      'Samsung Galaxy A series, S series, Ultra models, and other available Android devices.',
    examples: ['Galaxy A series', 'Galaxy S series', 'Ultra models'],
    icon: '📲',
  },
  {
    title: 'Google Pixel Phones',
    description:
      'Google Pixel phones for customers who want clean Android performance and strong camera quality.',
    examples: ['Pixel 6 series', 'Pixel 7 series', 'Pixel 8 series and newer'],
    icon: '📷',
  },
  {
    title: 'HP Laptops',
    description:
      'HP laptops for students, office users, businesses, and general productivity needs.',
    examples: ['Core i5 laptops', 'Core i7 laptops', 'Business laptops'],
    icon: '💻',
  },
  {
    title: 'Dell Laptops',
    description:
      'Dell laptops suitable for school, work, business, programming, and daily use.',
    examples: ['Core i5 options', 'Core i7 options', 'Office laptops'],
    icon: '🖥️',
  },
  {
    title: 'MacBooks',
    description:
      'MacBook devices for users who need premium performance for work, study, design, and business.',
    examples: ['MacBook Pro', 'MacBook Air', 'Intel and Apple Silicon models'],
    icon: '🍎',
  },
  {
    title: 'Smart Watches',
    description:
      'Smart watches for fitness tracking, notifications, calls, and daily convenience.',
    examples: ['Apple Watch', 'Samsung Watch', 'Other smart watches'],
    icon: '⌚',
  },
  {
    title: 'Earbuds & Accessories',
    description:
      'Wireless earbuds, AirPods, Samsung Buds, chargers, cases, and selected accessories.',
    examples: ['AirPods', 'Samsung Buds', 'Chargers and cases'],
    icon: '🎧',
  },
]

function Catalogue() {
  return (
    <>
      <section className="bg-slate-950 px-6 py-20 text-white">
        <div className="mx-auto max-w-7xl">
          <p className="text-sm font-semibold uppercase tracking-[0.25em] text-cyan-400">
            Electronics Catalogue
          </p>

          <h1 className="mt-4 max-w-4xl text-4xl font-black leading-tight md:text-6xl">
            Phones, laptops, smart watches and accessories.
          </h1>

          <p className="mt-6 max-w-3xl text-lg leading-8 text-slate-300">
            Browse our main product categories. Availability and prices may change, so customers
            can contact Chansa Enterprises directly on WhatsApp for current stock and quotations.
          </p>

          <div className="mt-8 flex flex-col gap-4 sm:flex-row">
            <a
              href="https://wa.me/260967644528"
              className="rounded-full bg-cyan-400 px-7 py-3 text-center font-semibold text-slate-950 hover:bg-cyan-300"
            >
              Ask for Current Stock
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

      <section className="bg-slate-100 px-6 py-20 text-slate-950">
        <div className="mx-auto max-w-7xl">
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            {productCategories.map((category) => (
              <div
                key={category.title}
                className="rounded-3xl bg-white p-6 shadow-sm transition hover:-translate-y-1 hover:shadow-xl"
              >
                <div className="mb-5 flex h-14 w-14 items-center justify-center rounded-2xl bg-cyan-100 text-2xl">
                  {category.icon}
                </div>

                <h2 className="text-xl font-bold">{category.title}</h2>

                <p className="mt-4 text-sm leading-7 text-slate-600">
                  {category.description}
                </p>

                <div className="mt-5 space-y-2">
                  {category.examples.map((item) => (
                    <div key={item} className="flex items-center gap-3 text-sm text-slate-700">
                      <span className="h-2 w-2 rounded-full bg-cyan-500"></span>
                      <span>{item}</span>
                    </div>
                  ))}
                </div>

                <a
                  href={`https://wa.me/260967644528?text=Hello%20Chansa%20Enterprises,%20I%20am%20interested%20in%20${encodeURIComponent(
                    category.title,
                  )}.%20Please%20send%20me%20available%20options%20and%20prices.`}
                  className="mt-6 inline-block text-sm font-semibold text-cyan-700"
                >
                  Request prices →
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-white px-6 py-20 text-slate-950">
        <div className="mx-auto grid max-w-7xl gap-8 md:grid-cols-3">
          <div className="rounded-3xl border border-slate-200 p-6 shadow-sm">
            <h3 className="text-xl font-bold">How ordering works</h3>
            <p className="mt-4 text-sm leading-7 text-slate-600">
              Customers request a product category, then Chansa Enterprises confirms available
              models, specifications, condition, and price.
            </p>
          </div>

          <div className="rounded-3xl border border-slate-200 p-6 shadow-sm">
            <h3 className="text-xl font-bold">Prices on request</h3>
            <p className="mt-4 text-sm leading-7 text-slate-600">
              Electronics prices change frequently. Showing prices on request helps avoid outdated
              listings and allows customers to receive current quotations.
            </p>
          </div>

          <div className="rounded-3xl border border-slate-200 p-6 shadow-sm">
            <h3 className="text-xl font-bold">Business support</h3>
            <p className="mt-4 text-sm leading-7 text-slate-600">
              We can support customers with device setup, software assistance, email setup, and
              general technical guidance after purchase.
            </p>
          </div>
        </div>
      </section>

      <section className="bg-slate-100 px-6 py-20 text-slate-950">
        <div className="mx-auto max-w-7xl rounded-3xl bg-slate-950 px-6 py-12 text-center text-white md:px-12">
          <p className="text-sm font-semibold uppercase tracking-[0.25em] text-cyan-300">
            Need a device?
          </p>

          <h2 className="mx-auto mt-4 max-w-3xl text-3xl font-bold md:text-4xl">
            Send us the model you want and we will confirm availability.
          </h2>

          <p className="mx-auto mt-4 max-w-2xl text-slate-300">
            Contact Chansa Enterprises for phones, laptops, watches, earbuds, and selected
            accessories.
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

export default Catalogue