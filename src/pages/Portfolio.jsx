import SEO from '../components/SEO'

const projects = [
  {
    title: 'Chansa Enterprises Website',
    category: 'Web Development',
    description:
      'A modern business website built for Chansa Enterprises to showcase services, electronics, contact details, and business identity.',
    features: ['React website', 'Mobile-friendly layout', 'Vercel deployment', 'Custom domain setup'],
  },
  {
    title: 'Chansa Enterprises Business Email',
    category: 'Business Email Setup',
    description:
      'Professional email setup using the chansaenterprises.com domain for formal customer communication.',
    features: ['info@chansaenterprises.com', 'DNS email setup', 'Webmail access', 'Professional branding'],
  },
  {
    title: 'Electronics Catalogue Structure',
    category: 'Product Catalogue',
    description:
      'A structured catalogue page for phones, laptops, smart watches, earbuds, accessories, and device support enquiries.',
    features: ['Product categories', 'WhatsApp enquiry buttons', 'Mobile-ready layout', 'Prices on request'],
  },
  {
    title: 'Chansa Enterprises Branding',
    category: 'Brand Identity',
    description:
      'Logo, visual identity, website colours, and digital presence setup for Chansa Enterprises as a technology-focused brand.',
    features: ['Logo integration', 'Brand colours', 'Digital presentation', 'Professional layout'],
  },
  {
    title: 'Zed Runner Game Project',
    category: 'Game Development',
    description:
      'A 2D endless runner game project developed using C++ and SFML, featuring player movement, obstacles, coins, scoring, and game states.',
    features: ['C++ project', 'SFML graphics', 'Game mechanics', 'Score system'],
  },
  {
    title: 'Website SEO Setup',
    category: 'SEO & Search Setup',
    description:
      'Basic SEO foundation added to the website, including metadata, sitemap, robots file, and Google Search Console verification.',
    features: ['SEO metadata', 'Sitemap XML', 'Robots.txt', 'Google Search Console'],
  },
]

function Portfolio() {
  return (
    <>
       <SEO
  title="Portfolio & Projects | Chansa Enterprises"
  description="View Chansa Enterprises projects in web development, business email setup, catalogue design, branding, SEO setup, and software development."
  url="https://chansaenterprises.com/portfolio"
/>

      <section className="bg-slate-950 px-6 py-20 text-white">
        <div className="mx-auto max-w-7xl">
          <p className="text-sm font-semibold uppercase tracking-[0.25em] text-cyan-400">
            Portfolio
          </p>

          <h1 className="mt-4 max-w-4xl text-4xl font-black leading-tight md:text-6xl">
            Projects, digital work and business technology solutions.
          </h1>

          <p className="mt-6 max-w-3xl text-lg leading-8 text-slate-300">
            Explore selected projects and solutions connected to Chansa Enterprises,
            including web development, business email setup, catalogue structure,
            branding, SEO setup, and software development work.
          </p>

          <div className="mt-8 flex flex-col gap-4 sm:flex-row">
            <a
              href="https://wa.me/260967644528?text=Hello%20Chansa%20Enterprises,%20I%20would%20like%20to%20ask%20about%20your%20portfolio%20and%20services."
              className="rounded-full bg-cyan-400 px-7 py-3 text-center font-semibold text-slate-950 hover:bg-cyan-300"
            >
              Discuss a Project
            </a>

            <a
              href="/services"
              className="rounded-full border border-white/20 px-7 py-3 text-center font-semibold text-white hover:bg-white/10"
            >
              View Services
            </a>
          </div>
        </div>
      </section>

      <section className="bg-white px-6 py-20 text-slate-950">
        <div className="mx-auto max-w-7xl">
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {projects.map((project) => (
              <div
                key={project.title}
                className="flex flex-col rounded-3xl border border-slate-200 bg-white p-6 shadow-sm transition hover:-translate-y-1 hover:shadow-xl"
              >
                <p className="text-sm font-semibold uppercase tracking-[0.2em] text-cyan-700">
                  {project.category}
                </p>

                <h2 className="mt-3 text-2xl font-bold">{project.title}</h2>

                <p className="mt-4 text-sm leading-7 text-slate-600">
                  {project.description}
                </p>

                <div className="mt-6 space-y-3">
                  {project.features.map((feature) => (
                    <div key={feature} className="flex items-center gap-3 text-sm text-slate-700">
                      <span className="flex h-5 w-5 items-center justify-center rounded-full bg-cyan-100 text-xs font-bold text-cyan-700">
                        ✓
                      </span>
                      <span>{feature}</span>
                    </div>
                  ))}
                </div>
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
            Need a website, catalogue, email setup, branding, or technical support?
          </h2>

          <p className="mx-auto mt-4 max-w-2xl text-slate-300">
            Chansa Enterprises can help you create a professional online presence
            and practical technology setup for your business.
          </p>

          <a
            href="https://wa.me/260967644528?text=Hello%20Chansa%20Enterprises,%20I%20would%20like%20to%20start%20a%20project."
            className="mt-8 inline-block rounded-full bg-cyan-400 px-8 py-3 font-semibold text-slate-950 hover:bg-cyan-300"
          >
            Start a Project
          </a>
        </div>
      </section>
    </>
  )
}

export default Portfolio