const deals = [
  {
    id: 1,
    name: "iPhone 13 Pro",
    category: "Phone",
    condition: "UK Used / Excellent Condition",
    price: "Contact for price",
    image: "/products/iphone-13-pro.jpg",
  },
  {
    id: 2,
    name: "Samsung Galaxy S22 Ultra",
    category: "Phone",
    condition: "Clean Display / Strong Battery",
    price: "Contact for price",
    image: "/products/samsung-s22-ultra.jpg",
  },
  {
    id: 3,
    name: "HP Core i5 Laptop",
    category: "Laptop",
    condition: "8GB RAM / SSD / Business Ready",
    price: "Contact for price",
    image: "/products/hp-core-i5.jpg",
  },
  {
    id: 4,
    name: "Apple Watch Series 7",
    category: "Smart Watch",
    condition: "Clean / Original / Tested",
    price: "Contact for price",
    image: "/products/apple-watch-series-7.jpg",
  },
];

export default function FeaturedDeals() {
  function createWhatsAppLink(product) {
    const message = `
Hello Chansa Enterprises,

I am interested in this product:

Product: ${product.name}
Category: ${product.category}
Condition: ${product.condition}
Price: ${product.price}

Please confirm availability, price, and delivery/payment details.
`;

    return `https://wa.me/260967644528?text=${encodeURIComponent(message)}`;
  }

  return (
    <section className="bg-white px-4 py-16">
      <div className="mx-auto max-w-6xl">
        <div className="mb-10 flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
          <div>
            <p className="mb-3 text-sm font-semibold uppercase tracking-widest text-cyan-600">
              Featured Deals
            </p>
            <h2 className="text-3xl font-bold text-slate-950 md:text-4xl">
              Deal of the Week
            </h2>
            <p className="mt-4 max-w-2xl text-slate-600">
              Browse selected phones, laptops, smart watches, and accessories.
              Contact Chansa Enterprises on WhatsApp to confirm availability and
              latest prices.
            </p>
          </div>

          <a
            href="https://wa.me/260967644528?text=Hello%20Chansa%20Enterprises%2C%20please%20send%20me%20your%20latest%20electronics%20catalogue."
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-full bg-slate-950 px-6 py-3 text-center font-semibold text-white transition hover:bg-cyan-600"
          >
            Request Full Catalogue
          </a>
        </div>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {deals.map((product) => (
            <div
              key={product.id}
              className="overflow-hidden rounded-3xl border border-slate-200 bg-white shadow-lg transition hover:-translate-y-1 hover:shadow-xl"
            >
              <div className="relative h-56 bg-slate-100">
                <img
                  src={product.image}
                  alt={product.name}
                  className="h-full w-full object-cover"
                  onError={(event) => {
                    event.currentTarget.style.display = "none";
                  }}
                />

                <div className="absolute left-4 top-4 rounded-full bg-cyan-500 px-3 py-1 text-xs font-bold uppercase tracking-wide text-slate-950">
                  {product.category}
                </div>
              </div>

              <div className="p-5">
                <h3 className="text-xl font-bold text-slate-950">
                  {product.name}
                </h3>

                <p className="mt-2 text-sm text-slate-600">
                  {product.condition}
                </p>

                <p className="mt-4 text-lg font-black text-slate-950">
                  {product.price}
                </p>

                <a
                  href={createWhatsAppLink(product)}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-5 block rounded-xl bg-green-500 px-5 py-3 text-center font-semibold text-slate-950 transition hover:bg-green-400"
                >
                  Order on WhatsApp
                </a>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-10 rounded-3xl bg-slate-950 p-6 text-center text-white md:p-8">
          <h3 className="text-2xl font-bold">
            Looking for a specific phone, laptop, or accessory?
          </h3>
          <p className="mx-auto mt-3 max-w-2xl text-slate-300">
            Send us the model you want and we will help you check availability,
            condition, and price.
          </p>

          <a
            href="https://wa.me/260967644528?text=Hello%20Chansa%20Enterprises%2C%20I%20am%20looking%20for%20a%20specific%20phone%2C%20laptop%2C%20or%20accessory."
            target="_blank"
            rel="noopener noreferrer"
            className="mt-6 inline-block rounded-full bg-cyan-400 px-8 py-3 font-semibold text-slate-950 transition hover:bg-cyan-300"
          >
            Ask for a Product
          </a>
        </div>
      </div>
    </section>
  );
}