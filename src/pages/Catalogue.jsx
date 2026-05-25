import iphoneImg from '../assets/products/iphone.jpg'
import samsungImg from '../assets/products/samsung.jpg'
import pixelImg from '../assets/products/pixel.jpg'
import hpImg from '../assets/products/hp-laptop.jpg'
import dellImg from '../assets/products/dell-laptop.jpg'
import macbookImg from '../assets/products/macbook.jpg'
import appleWatchImg from '../assets/products/apple-watch.jpg'
import samsungWatchImg from '../assets/products/samsung-watch.jpg'
import airpodsImg from '../assets/products/airpods.jpg'
import samsungbudsImg from '../assets/products/samsungbuds.jpg'
import chargersImg from '../assets/products/chargers.jpg'
import casesImg from '../assets/products/cases.jpg'
import supportImg from '../assets/products/device-setup-support.jpg'

const productGroups = [
  {
    group: 'Phones',
    description:
      'Smartphones for personal use, business communication, content creation, and daily productivity.',
    products: [
      {
        name: 'iPhones',
        details: 'iPhone XR and newer, including Pro and Pro Max models depending on availability.',
        examples: ['iPhone XR and newer', 'iPhone 11–15 series', 'Pro / Pro Max models'],
        icon: '📱',
        image: iphoneImg,
      },
      {
        name: 'Samsung Phones',
        details: 'Samsung Galaxy A series, S series, Ultra models, and other Android options.',
        examples: ['Galaxy A series', 'Galaxy S series', 'Ultra models'],
        icon: '📲',
        image: samsungImg,
      },
      {
        name: 'Google Pixel Phones',
        details: 'Pixel phones for clean Android performance, strong camera quality, and software reliability.',
        examples: ['Pixel 6 series', 'Pixel 7 series', 'Pixel 8 series and newer'],
        icon: '📷',
        image: pixelImg,
      },
    ],
  },
  {
    group: 'Laptops',
    description:
      'Laptops for students, office users, business work, programming, design, and general productivity.',
    products: [
      {
        name: 'HP Laptops',
        details: 'HP laptops for school, office, business, and everyday work.',
        examples: ['Core i5 options', 'Core i7 options', 'Business laptops'],
        icon: '💻',
        image: hpImg,
      },
      {
        name: 'Dell Laptops',
        details: 'Dell laptops suitable for work, study, business, programming, and general use.',
        examples: ['Core i5 laptops', 'Core i7 laptops', 'Office laptops'],
        icon: '🖥️',
        image: dellImg,
      },
      {
        name: 'MacBooks',
        details: 'MacBook Air and MacBook Pro models for premium work, study, design, and business use.',
        examples: ['MacBook Air', 'MacBook Pro', 'Intel and Apple Silicon models'],
        icon: '🍎',
        image: macbookImg,
      },
    ],
  },
  {
    group: 'Wearables & Audio',
    description:
      'Smart watches, earbuds, and audio accessories for communication, fitness, and daily convenience.',
    products: [
      {
        name: 'Apple Watch',
        details: 'Apple Watch models for fitness, notifications, calls, and iPhone users.',
        examples: ['Apple Watch Series', 'Apple Watch SE', 'Apple Watch Ultra'],
        icon: '⌚',
        image: appleWatchImg,
      },
      {
        name: 'Samsung Watch',
        details: 'Samsung Galaxy Watch models for Android users, health tracking, and smart features.',
        examples: ['Galaxy Watch 4 and newer', 'Classic models', 'LTE options where available'],
        icon: '⌚',
        image: samsungWatchImg,
      },
      {
       name: 'AirPods',
       details: 'Apple wireless earbuds for calls, music, meetings, and everyday use.',
       examples: ['AirPods', 'AirPods Pro', 'AirPods Pro 2'],
       icon: '🎧',
       image: airpodsImg,
      },
        {
        name: 'Samsung Buds',
        details: 'Samsung wireless earbuds for calls, music, meetings, and Android users.',
        examples: ['Galaxy Buds 2', 'Galaxy Buds Pro', 'Galaxy Buds FE'],
        icon: '🎧',
        image: samsungbudsImg,
        },
    ],
  },
  {
    group: 'Accessories & Support',
    description:
      'Selected accessories and after-sale support to help customers set up and use their devices properly.',
    products: [
      {
        name: 'Chargers & Cables',
        details: 'Selected phone and laptop charging accessories depending on availability.',
        examples: ['Phone chargers', 'USB cables', 'Laptop chargers'],
        icon: '🔌',
        image: chargersImg,
      },
      {
        name: 'Cases & Protection',
        details: 'Basic protection accessories for phones and selected devices.',
        examples: ['Phone cases', 'Screen protectors', 'Device protection'],
        icon: '🛡️',
        image: casesImg,
      },
      {
        name: 'Device Setup Support',
        details: 'Assistance with basic setup, software support, email setup, and device guidance.',
        examples: ['Phone setup', 'Email setup', 'Software assistance'],
        icon: '🛠️',
        image: supportImg,
      },
    ],
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
            Phones, laptops, wearables, audio and accessories.
          </h1>

          <p className="mt-6 max-w-3xl text-lg leading-8 text-slate-300">
            Browse product categories offered by Chansa Enterprises. Availability,
            specifications, condition, and prices may change, so customers can contact us
            directly on WhatsApp for current options and quotations.
          </p>

          <div className="mt-8 flex flex-col gap-4 sm:flex-row">
            <a
              href="https://wa.me/260967644528?text=Hello%20Chansa%20Enterprises,%20I%20would%20like%20to%20ask%20about%20available%20electronics%20and%20prices."
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

      {productGroups.map((group, index) => (
        <section
          key={group.group}
          className={`px-6 py-20 text-slate-950 ${
            index % 2 === 0 ? 'bg-slate-100' : 'bg-white'
          }`}
        >
          <div className="mx-auto max-w-7xl">
            <div className="max-w-3xl">
              <p className="text-sm font-semibold uppercase tracking-[0.25em] text-cyan-700">
                {group.group}
              </p>

              <h2 className="mt-4 text-3xl font-bold md:text-5xl">
                {group.group} available on request.
              </h2>

              <p className="mt-4 text-slate-600">{group.description}</p>
            </div>

            <div className="mt-10 grid gap-6 md:grid-cols-3">
              {group.products.map((product) => (
                <div
                  key={product.name}
                  className="flex flex-col rounded-3xl bg-white p-6 shadow-sm transition hover:-translate-y-1 hover:shadow-xl"
                >
            <div className="mb-5 overflow-hidden rounded-2xl bg-slate-100">
                    <img
                        src={product.image}
                        alt={product.name}
                        className="h-48 w-full object-cover transition duration-300 hover:scale-105"
                    />
                    </div>

                    <div className="mb-4 flex items-center gap-3">
                    <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-cyan-100 text-xl">
                        {product.icon}
                    </div>

                    <h3 className="text-xl font-bold">{product.name}</h3>
                    </div>

                  <p className="mt-4 text-sm leading-7 text-slate-600">
                    {product.details}
                  </p>

                  <div className="mt-5 space-y-2">
                    {product.examples.map((item) => (
                      <div key={item} className="flex items-center gap-3 text-sm text-slate-700">
                        <span className="h-2 w-2 rounded-full bg-cyan-500"></span>
                        <span>{item}</span>
                      </div>
                    ))}
                  </div>

                  <a
                    href={`https://wa.me/260967644528?text=Hello%20Chansa%20Enterprises,%20I%20am%20interested%20in%20${encodeURIComponent(
                      product.name,
                    )}.%20Please%20send%20me%20available%20options%20and%20prices.`}
                    className="mt-8 inline-block rounded-full bg-slate-950 px-6 py-3 text-center text-sm font-semibold text-white hover:bg-slate-800"
                  >
                    Request prices
                  </a>
                </div>
              ))}
            </div>
          </div>
        </section>
      ))}

      <section className="bg-slate-950 px-6 py-20 text-white">
        <div className="mx-auto grid max-w-7xl gap-8 md:grid-cols-3">
          <div className="rounded-3xl border border-white/10 bg-white/5 p-6">
            <h3 className="text-xl font-bold text-cyan-300">How ordering works</h3>
            <p className="mt-4 text-sm leading-7 text-slate-300">
              Customers request a product category or model, then Chansa Enterprises
              confirms available options, specifications, condition, and current price.
            </p>
          </div>

          <div className="rounded-3xl border border-white/10 bg-white/5 p-6">
            <h3 className="text-xl font-bold text-cyan-300">Prices on request</h3>
            <p className="mt-4 text-sm leading-7 text-slate-300">
              Electronics prices change frequently. Quoting on request helps customers
              receive accurate and current prices before ordering.
            </p>
          </div>

          <div className="rounded-3xl border border-white/10 bg-white/5 p-6">
            <h3 className="text-xl font-bold text-cyan-300">Support available</h3>
            <p className="mt-4 text-sm leading-7 text-slate-300">
              We can help customers with basic device setup, email setup, software
              support, and general technical guidance after purchase.
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
            Contact Chansa Enterprises for phones, laptops, watches, earbuds,
            accessories, and device support.
          </p>

          <a
            href="https://wa.me/260967644528?text=Hello%20Chansa%20Enterprises,%20I%20am%20looking%20for%20a%20device.%20Please%20help%20me%20confirm%20availability%20and%20price."
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