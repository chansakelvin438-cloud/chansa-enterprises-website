import { useMemo, useState } from "react";

const questions = [
  {
    id: "domain",
    text: "Do you have a professional domain name?",
    service: "Domain setup",
  },
  {
    id: "website",
    text: "Do you have a business website?",
    service: "Website development",
  },
  {
    id: "email",
    text: "Do you have a professional business email?",
    service: "Business email setup",
  },
  {
    id: "ssl",
    text: "Does your website have SSL/HTTPS security?",
    service: "SSL/HTTPS setup",
  },
  {
    id: "whatsapp",
    text: "Does your website have a WhatsApp enquiry button?",
    service: "WhatsApp enquiry setup",
  },
  {
    id: "seo",
    text: "Is your website ready for Google Search?",
    service: "Basic SEO and Google Search readiness",
  },
  {
    id: "social",
    text: "Do you have active social media pages for your business?",
    service: "Social media business setup",
  },
  {
    id: "catalogue",
    text: "Do you have a digital catalogue for your products or services?",
    service: "Digital catalogue design",
  },
];

export default function WebsiteReadinessChecker() {
  const [businessName, setBusinessName] = useState("");
  const [answers, setAnswers] = useState({});

  const completedCount = useMemo(() => {
    return Object.values(answers).filter(Boolean).length;
  }, [answers]);

  const score = Math.round((completedCount / questions.length) * 100);

  const missingServices = questions
    .filter((question) => !answers[question.id])
    .map((question) => question.service);

  const readinessStatus = useMemo(() => {
    if (score >= 85) return "Excellent — your business is almost fully ready online.";
    if (score >= 60) return "Good — your business has a strong start but needs improvement.";
    if (score >= 35) return "Average — your business needs important digital upgrades.";
    return "Low — your business needs urgent online setup.";
  }, [score]);

  const whatsappMessage = `
Hello Chansa Enterprises,

I just checked my business online readiness.

Business name: ${businessName || "Not provided"}
Readiness score: ${score}%
Status: ${readinessStatus}

I need help with:
${missingServices.length ? missingServices.map((item) => `- ${item}`).join("\n") : "- General improvement and professional review"}

Please advise me on the next step.
`;

  const whatsappLink = `https://wa.me/260967644528?text=${encodeURIComponent(
    whatsappMessage
  )}`;

  function handleAnswer(id) {
    setAnswers((prev) => ({
      ...prev,
      [id]: !prev[id],
    }));
  }

  return (
    <section className="bg-slate-950 py-16 px-4 text-white">
      <div className="mx-auto max-w-5xl rounded-3xl border border-slate-800 bg-slate-900 p-6 shadow-2xl md:p-10">
        <div className="mb-8 text-center">
          <p className="mb-3 text-sm font-semibold uppercase tracking-widest text-blue-400">
            Free Business Tool
          </p>
          <h2 className="text-3xl font-bold md:text-4xl">
            Check How Ready Your Business Is Online
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-slate-300">
            Answer a few simple questions and get your free digital readiness
            score. Chansa Enterprises can help you improve your online presence
            professionally.
          </p>
        </div>

        <div className="mb-6">
          <label className="mb-2 block text-sm font-medium text-slate-300">
            Business name
          </label>
          <input
            type="text"
            value={businessName}
            onChange={(event) => setBusinessName(event.target.value)}
            placeholder="Enter your business name"
            className="w-full rounded-xl border border-slate-700 bg-slate-950 px-4 py-3 text-white outline-none transition focus:border-blue-500"
          />
        </div>

        <div className="grid gap-4 md:grid-cols-2">
          {questions.map((question) => (
            <button
              key={question.id}
              onClick={() => handleAnswer(question.id)}
              className={`rounded-2xl border p-4 text-left transition ${
                answers[question.id]
                  ? "border-green-500 bg-green-500/10"
                  : "border-slate-700 bg-slate-950 hover:border-blue-500"
              }`}
            >
              <div className="flex items-start gap-3">
                <span
                  className={`mt-1 flex h-6 w-6 shrink-0 items-center justify-center rounded-full border ${
                    answers[question.id]
                      ? "border-green-500 bg-green-500 text-slate-950"
                      : "border-slate-500"
                  }`}
                >
                  {answers[question.id] ? "✓" : ""}
                </span>
                <span className="text-sm text-slate-200 md:text-base">
                  {question.text}
                </span>
              </div>
            </button>
          ))}
        </div>

        <div className="mt-8 rounded-3xl bg-slate-950 p-6">
          <div className="flex flex-col gap-6 md:flex-row md:items-center md:justify-between">
            <div>
              <p className="text-sm uppercase tracking-widest text-slate-400">
                Your Score
              </p>
              <h3 className="mt-2 text-5xl font-bold text-blue-400">
                {score}%
              </h3>
              <p className="mt-3 max-w-xl text-slate-300">{readinessStatus}</p>
            </div>

            <div className="w-full md:max-w-sm">
              <div className="h-4 overflow-hidden rounded-full bg-slate-800">
                <div
                  className="h-full rounded-full bg-blue-500 transition-all"
                  style={{ width: `${score}%` }}
                ></div>
              </div>
            </div>
          </div>

          {missingServices.length > 0 && (
            <div className="mt-6">
              <p className="mb-3 font-semibold text-slate-200">
                Recommended improvements:
              </p>
              <div className="flex flex-wrap gap-2">
                {missingServices.map((service) => (
                  <span
                    key={service}
                    className="rounded-full bg-slate-800 px-4 py-2 text-sm text-slate-300"
                  >
                    {service}
                  </span>
                ))}
              </div>
            </div>
          )}

          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <a
              href={whatsappLink}
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-xl bg-green-500 px-6 py-3 text-center font-semibold text-slate-950 transition hover:bg-green-400"
            >
              Send Result to WhatsApp
            </a>

            <button
              onClick={() => {
                navigator.clipboard.writeText(whatsappMessage);
                alert("Result copied. You can now share it.");
              }}
              className="rounded-xl border border-slate-700 px-6 py-3 font-semibold text-white transition hover:border-blue-500"
            >
              Copy Result
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}