import { Link } from "react-router-dom";
import SEO from "../components/SEO";
import { blogPosts } from "../data/blogPosts";

export default function Blog() {
  return (
    <>
      <SEO
        title="Blog & Tech Articles | Chansa Enterprises"
        description="Read helpful articles about websites, hosting, business email, electronics, phones, laptops, and digital business setup in Zambia."
        url="https://chansaenterprises.com/blog"
      />

      <section className="bg-slate-950 px-4 py-16 text-white md:py-24">
        <div className="mx-auto max-w-6xl">
          <p className="mb-4 text-sm font-semibold uppercase tracking-widest text-cyan-400">
            Chansa Enterprises Blog
          </p>

          <h1 className="max-w-4xl text-4xl font-black leading-tight md:text-6xl">
            Tech, Website & Business Articles
          </h1>

          <p className="mt-6 max-w-3xl text-lg leading-8 text-slate-300">
            Learn about website development, domain setup, hosting, business
            email, electronics, phones, laptops, and digital tools for modern
            businesses.
          </p>
        </div>
      </section>

      <section className="bg-slate-100 px-4 py-16">
        <div className="mx-auto grid max-w-6xl gap-6 md:grid-cols-2 lg:grid-cols-3">
          {blogPosts.map((post) => (
           <article
  key={post.slug}
  className="overflow-hidden rounded-3xl border border-slate-200 bg-white shadow-lg transition hover:-translate-y-1 hover:shadow-xl"
>
  <div className="h-56 bg-slate-200">
    <img
      src={post.image}
      alt={post.imageAlt}
      className="h-full w-full object-cover"
    />
  </div>

  <div className="p-6">
    <div className="mb-4 inline-flex rounded-full bg-cyan-100 px-3 py-1 text-xs font-bold uppercase tracking-wide text-cyan-700">
      {post.category}
    </div>

    <h2 className="text-2xl font-bold text-slate-950">
      {post.title}
    </h2>

    <p className="mt-3 text-sm text-slate-500">
      {post.date} • {post.readTime}
    </p>

    <p className="mt-4 text-slate-600">{post.description}</p>

    <Link
      to={`/blog/${post.slug}`}
      className="mt-6 inline-block rounded-full bg-slate-950 px-6 py-3 font-semibold text-white transition hover:bg-cyan-600"
    >
      Read Article
    </Link>
  </div>
</article>
          ))}
        </div>
      </section>
    </>
  );
}