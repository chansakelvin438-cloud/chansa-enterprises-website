import { useMemo, useState } from "react";

const websiteTypes = [
  {
    id: "starter",
    name: "Starter Website",
    description: "Simple 1-page website for a small business or personal brand.",
    price: 1500,
  },
  {
    id: "company",
    name: "Company Profile Website",
    description: "Professional 3-page website for company information and contacts.",
    price: 2500,
  },
  {
    id: "business",
    name: "Business Website",
    description: "Standard 5-page website for services, about, contact, and enquiries.",
    price: 3500,
  },
  {
    id: "catalogue",
    name: "Catalogue Website",
    description: "Website for displaying products, prices, and WhatsApp enquiries.",
    price: 4500,
  },
  {
    id: "advanced",
    name: "Advanced Website",
    description: "Custom website with more pages, advanced design, and extra features.",
    price: 6500,
  },
];

const addOns = [
  {
    id: "domainHosting",
    name: "Domain and Hosting Setup",
    price: 700,
  },
  {
    id: "businessEmail",
    name: "Business Email Setup",
    price: 500,
  },
  {
    id: "ssl",
    name: "SSL/HTTPS Security Setup",
    price: 300,
  },
  {
    id: "seo",
    name: "Basic SEO Setup",
    price: 400,
  },
  {
    id: "googleSearch",
    name: "Google Search Readiness",
    price: 300,
  },
  {
    id: "whatsappButton",
    name: "WhatsApp Enquiry Button",
    price: 250,
  },
  {
    id: "logo",
    name: "Basic Logo Design",
    price: 350,
  },
  {
    id: "catalogueDesign",
    name: "Digital Catalogue Design",
    price: 600,
  },
];

export default function WebsitePackageCalculator() {
  const [businessName, setBusinessName] = useState("");
  const [selectedType, setSelectedType] = useState(websiteTypes[0]);
  const [selectedAddOns, setSelectedAddOns] = useState({});

  const selectedAddOnItems = useMemo(() => {
    return addOns.filter((item) => selectedAddOns[item.id]);
  }, [selectedAddOns]);

  const addOnsTotal = selectedAddOnItems.reduce(
    (total, item) => total + item.price,
    0
  );

  const total = selectedType.price + addOnsTotal;

  const whatsappMessage = `
Hello Chansa Enterprises,

I used the Website Package Calculator.

Business name: ${businessName || "Not provided"}

Selected website package:
${selectedType.name} - K${selectedType.price}

Selected extra services:
${
  selectedAddOnItems.length
    ? selectedAddOnItems.map((item) => `- ${item.name}: K${item.price}`).join("\n")
    : "- No extra services selected"
}

Estimated total: K${total}

Please confirm the final quotation and advise me on the next step.
`;

  const whatsappLink = `https://wa.me/260967644528?text=${encodeURIComponent(
    whatsappMessage
  )}`;

  function handleAddOnChange(id) {
    setSelectedAddOns((prev) => ({
      ...prev,
      [id]: !prev[id],
    }));
  }

  return (
    <section className="bg-slate-100 px-4 py-16">
      <div className="mx-auto max-w-6xl">
        <div className="mb-10 text-center">
          <p className="mb-3 text-sm font-semibold uppercase tracking-widest text-cyan-600">
            Website Cost Estimator
          </p>
          <h2 className="text-3xl font-bold text-slate-950 md:text-4xl">
            Estimate Your Website Package
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-slate-600">
            Select the type of website you need and add extra services such as
            domain setup, business email, SSL, SEO, and catalogue design.
          </p>
        </div>

        <div className="grid gap-8 lg:grid-cols-3">
          <div className="lg:col-span-2">
            <div className="mb-6 rounded-3xl bg-white p-6 shadow-lg">
              <label className="mb-2 block text-sm font-medium text-slate-700">
                Business name
              </label>
              <input
                type="text"
                value={businessName}
                onChange={(event) => setBusinessName(event.target.value)}
                placeholder="Enter your business name"
                className="w-full rounded-xl border border-slate-300 px-4 py-3 outline-none transition focus:border-cyan-500"
              />
            </div>

            <div className="rounded-3xl bg-white p-6 shadow-lg">
              <h3 className="mb-5 text-xl font-bold text-slate-950">
                Choose Website Type
              </h3>

              <div className="grid gap-4 md:grid-cols-2">
                {websiteTypes.map((type) => (
                  <button
                    key={type.id}
                    onClick={() => setSelectedType(type)}
                    className={`rounded-2xl border p-5 text-left transition ${
                      selectedType.id === type.id
                        ? "border-cyan-500 bg-cyan-50"
                        : "border-slate-200 hover:border-cyan-400"
                    }`}
                  >
                    <div className="flex items-start justify-between gap-4">
                      <div>
                        <h4 className="font-bold text-slate-950">
                          {type.name}
                        </h4>
                        <p className="mt-2 text-sm text-slate-600">
                          {type.description}
                        </p>
                      </div>
                      <span className="shrink-0 rounded-full bg-slate-950 px-3 py-1 text-sm font-semibold text-white">
                        K{type.price}
                      </span>
                    </div>
                  </button>
                ))}
              </div>
            </div>

            <div className="mt-6 rounded-3xl bg-white p-6 shadow-lg">
              <h3 className="mb-5 text-xl font-bold text-slate-950">
                Add Extra Services
              </h3>

              <div className="grid gap-4 md:grid-cols-2">
                {addOns.map((item) => (
                  <button
                    key={item.id}
                    onClick={() => handleAddOnChange(item.id)}
                    className={`rounded-2xl border p-4 text-left transition ${
                      selectedAddOns[item.id]
                        ? "border-green-500 bg-green-50"
                        : "border-slate-200 hover:border-cyan-400"
                    }`}
                  >
                    <div className="flex items-center justify-between gap-4">
                      <div className="flex items-center gap-3">
                        <span
                          className={`flex h-6 w-6 items-center justify-center rounded-full border ${
                            selectedAddOns[item.id]
                              ? "border-green-500 bg-green-500 text-white"
                              : "border-slate-400"
                          }`}
                        >
                          {selectedAddOns[item.id] ? "✓" : ""}
                        </span>
                        <span className="font-medium text-slate-800">
                          {item.name}
                        </span>
                      </div>
                      <span className="font-bold text-slate-950">
                        K{item.price}
                      </span>
                    </div>
                  </button>
                ))}
              </div>
            </div>
          </div>

          <div className="rounded-3xl bg-slate-950 p-6 text-white shadow-xl lg:sticky lg:top-6 lg:h-fit">
            <p className="text-sm uppercase tracking-widest text-cyan-400">
              Estimated Total
            </p>

            <h3 className="mt-3 text-5xl font-black">K{total}</h3>

            <p className="mt-4 text-sm text-slate-300">
              This is an estimated quotation. The final price may change
              depending on number of pages, design requirements, content,
              hosting needs, and project scope.
            </p>

            <div className="mt-6 border-t border-slate-800 pt-6">
              <div className="mb-4 flex justify-between gap-4">
                <span className="text-slate-300">{selectedType.name}</span>
                <span className="font-semibold">K{selectedType.price}</span>
              </div>

              {selectedAddOnItems.map((item) => (
                <div
                  key={item.id}
                  className="mb-3 flex justify-between gap-4 text-sm"
                >
                  <span className="text-slate-400">{item.name}</span>
                  <span>K{item.price}</span>
                </div>
              ))}
            </div>

            <a
              href={whatsappLink}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-8 block rounded-xl bg-green-500 px-6 py-3 text-center font-semibold text-slate-950 transition hover:bg-green-400"
            >
              Send Estimate to WhatsApp
            </a>

            <button
              onClick={() => {
                navigator.clipboard.writeText(whatsappMessage);
                alert("Estimate copied. You can now share it.");
              }}
              className="mt-3 w-full rounded-xl border border-slate-700 px-6 py-3 font-semibold text-white transition hover:border-cyan-400"
            >
              Copy Estimate
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}