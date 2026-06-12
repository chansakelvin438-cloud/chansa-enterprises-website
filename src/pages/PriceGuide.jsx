import SEO from "../components/SEO";

const products = [
  {
    id: 1,
    name: "iPhone 11",
    category: "iPhone",
    storage: "64GB / 128GB",
    condition: "UK Used / Clean",
    price: "Contact for latest price",
    bestFor: "Students, social media, photography",
  },
  {
    id: 2,
    name: "iPhone 12 Pro",
    category: "iPhone",
    storage: "128GB / 256GB",
    condition: "UK Used / Excellent",
    price: "Contact for latest price",
    bestFor: "Content creators and business users",
  },
  {
    id: 3,
    name: "Samsung Galaxy S21 Ultra",
    category: "Samsung",
    storage: "128GB / 256GB",
    condition: "Clean display / Strong battery",
    price: "Contact for latest price",
    bestFor: "Photography, videos, and performance",
  },
  {
    id: 4,
    name: "Samsung Galaxy A15",
    category: "Samsung",
    storage: "128GB",
    condition: "New / Used options",
    price: "Contact for latest price",
    bestFor: "Budget users and everyday use",
  },
  {
    id: 5,
    name: "Google Pixel 7 Pro",
    category: "Google Pixel",
    storage: "128GB / 256GB",
    condition: "UK Used / Clean",
    price: "Contact for latest price",
    bestFor: "Camera quality and Android experience",
  },
  {
    id: 6,
    name: "HP Core i5 Laptop",
    category: "Laptop",
    storage: "8GB RAM / SSD",
    condition: "Business ready",
    price: "Contact for latest price",
    bestFor: "Students, office work, and business",
  },
  {
    id: 7,
    name: "Dell Core i5 Laptop",
    category: "Laptop",
    storage: "8GB RAM / SSD",
    condition: "Clean / Tested",
    price: "Contact for latest price",
    bestFor: "School, work, and online business",
  },
  {
    id: 8,
    name: "MacBook Air",
    category: "Laptop",
    storage: "128GB / 256GB SSD",
    condition: "Used / Clean",
    price: "Contact for latest price",
    bestFor: "Design, business, and productivity",
  },
];

const buyingTips = [
  "Check battery health before buying a used iPhone.",
  "Test Face ID, fingerprint, camera, speaker, microphone, and charging port.",
  "Confirm storage capacity before paying.",
  "For laptops, check RAM, SSD, keyboard, battery, charger, and screen condition.",
  "Avoid phones with unknown iCloud, Google lock, or network lock issues.",
  "Always confirm availability and condition before making payment.",
];

export default function PriceGuide() {
  function createWhatsAppLink(product) {
    const message = `
Hello Chansa Enterprises,

I saw this item on your Phone & Laptop Price Guide:

Product: ${product.name}
Category: ${product.category}
Storage/Specs: ${product.storage}
Condition: ${product.condition}
Price: ${product.price}

Please confirm the latest price and availability.
`;

    return `https://wa.me/260967644528?text=${encodeURIComponent(message)}`;
  }

  return (
    <>
      <SEO
        title="Phone and Laptop Price Guide in Zambia | Chansa Enterprises"
        description="Check phone, laptop, iPhone, Samsung, Google Pixel, MacBook, and accessories price guide in Zambia. Contact Chansa Enterprises for latest availability."
        url="https://chansaenterprises.com/price-guide"
      />

      <section className="bg-slate-950 px-4 py-16 text-white md:py-24">
        <div className="mx-auto max-w-6xl">
          <p className="mb-4 text-sm font-semibold uppercase tracking-widest text-cyan-400">
            Zambia Electronics Guide
          </p>

          <h1 className="max-w-4xl text-4xl font-black leading-tight md:text-6xl">
            Phone & Laptop Price Guide
          </h1>

          <p className="mt-6 max-w-3xl text-lg leading-8 text-slate-300">
            Browse popular phones, laptops, smart devices, and accessories.
            Prices change depending on condition, storage, availability, and
            market demand. Contact Chansa Enterprises on WhatsApp for the latest
            confirmed price.
          </p>

          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <a
              href="https://wa.me/260967644528?text=Hello%20Chansa%20Enterprises%2C%20please%20send%20me%20your%20latest%20phone%20and%20laptop%20price%20list."
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-full bg-cyan-400 px-7 py-3 text-center font-semibold text-slate-950 transition hover:bg-cyan-300"
            >
              Request Latest Price List
            </a>

            <a
              href="https://wa.me/260967644528?text=Hello%20Chansa%20Enterprises%2C%20I%20need%20help%20choosing%20a%20phone%20or%20laptop."
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-full border border-slate-700 px-7 py-3 text-center font-semibold text-white transition hover:border-cyan-400"
            >
              Help Me Choose
            </a>
          </div>
        </div>
      </section>

      <section className="bg-slate-100 px-4 py-16">
        <div className="mx-auto max-w-6xl">
          <div className="mb-10 text-center">
            <p className="mb-3 text-sm font-semibold uppercase tracking-widest text-cyan-600">
              Popular Products
            </p>
            <h2 className="text-3xl font-bold text-slate-950 md:text-4xl">
              Phones, Laptops & Smart Devices
            </h2>
            <p className="mx-auto mt-4 max-w-2xl text-slate-600">
              These are common products customers ask for. Use this guide to
              choose the right device, then contact us for the latest price.
            </p>
          </div>

          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            {products.map((product) => (
              <div
                key={product.id}
                className="rounded-3xl border border-slate-200 bg-white p-5 shadow-lg transition hover:-translate-y-1 hover:shadow-xl"
              >
                <div className="mb-4 inline-flex rounded-full bg-cyan-100 px-3 py-1 text-xs font-bold uppercase tracking-wide text-cyan-700">
                  {product.category}
                </div>

                <h3 className="text-xl font-bold text-slate-950">
                  {product.name}
                </h3>

                <div className="mt-4 space-y-2 text-sm text-slate-600">
                  <p>
                    <span className="font-semibold text-slate-950">
                      Storage/Specs:
                    </span>{" "}
                    {product.storage}
                  </p>

                  <p>
                    <span className="font-semibold text-slate-950">
                      Condition:
                    </span>{" "}
                    {product.condition}
                  </p>

                  <p>
                    <span className="font-semibold text-slate-950">
                      Best for:
                    </span>{" "}
                    {product.bestFor}
                  </p>
                </div>

                <p className="mt-5 text-lg font-black text-slate-950">
                  {product.price}
                </p>

                <a
                  href={createWhatsAppLink(product)}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-5 block rounded-xl bg-green-500 px-5 py-3 text-center font-semibold text-slate-950 transition hover:bg-green-400"
                >
                  Check Price on WhatsApp
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-white px-4 py-16">
        <div className="mx-auto grid max-w-6xl gap-8 lg:grid-cols-2">
          <div className="rounded-3xl bg-slate-950 p-6 text-white md:p-8">
            <p className="mb-3 text-sm font-semibold uppercase tracking-widest text-cyan-400">
              Buying Advice
            </p>

            <h2 className="text-3xl font-bold">
              What to Check Before Buying a Used Phone or Laptop
            </h2>

            <div className="mt-6 space-y-4">
              {buyingTips.map((tip) => (
                <div key={tip} className="flex gap-3">
                  <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-cyan-400 text-sm font-bold text-slate-950">
                    ✓
                  </span>
                  <p className="text-slate-300">{tip}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="rounded-3xl border border-slate-200 bg-slate-50 p-6 md:p-8">
            <p className="mb-3 text-sm font-semibold uppercase tracking-widest text-cyan-600">
              Need a Recommendation?
            </p>

            <h2 className="text-3xl font-bold text-slate-950">
              Tell Us Your Budget
            </h2>

            <p className="mt-4 text-slate-600">
              Send us your budget and what you need the device for. We can help
              you choose a suitable phone, laptop, watch, or accessory.
            </p>

            <div className="mt-6 rounded-2xl bg-white p-5 shadow">
              <p className="font-semibold text-slate-950">
                Example WhatsApp message:
              </p>
              <p className="mt-3 text-sm leading-7 text-slate-600">
                Hello Chansa Enterprises, I have a budget of K____. I need a
                phone/laptop for school, business, work, photography, or content
                creation. Please recommend the best option.
              </p>
            </div>

            <a
              href="https://wa.me/260967644528?text=Hello%20Chansa%20Enterprises%2C%20I%20have%20a%20budget%20of%20K____.%20I%20need%20help%20choosing%20a%20phone%20or%20laptop."
              target="_blank"
              rel="noopener noreferrer"
              className="mt-6 inline-block rounded-full bg-slate-950 px-7 py-3 font-semibold text-white transition hover:bg-cyan-600"
            >
              Send My Budget
            </a>
          </div>
        </div>
      </section>
    </>
  );
}