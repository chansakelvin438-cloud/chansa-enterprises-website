import { Link, useParams } from "react-router-dom";
import SEO from "../components/SEO";
import JsonLd from "../components/JsonLd";
import { blogPosts } from "../data/blogPosts";

export default function BlogArticle() {
  const { slug } = useParams();
  const post = blogPosts.find((item) => item.slug === slug);
  const articleSchema = post
  ? {
      "@context": "https://schema.org",
      "@type": "Article",
      headline: post.title,
      description: post.description,
      image: `https://chansaenterprises.com${post.image}`,
      datePublished: post.date,
      dateModified: post.date,
      author: {
        "@type": "Organization",
        name: "Chansa Enterprises",
        url: "https://chansaenterprises.com",
      },
      publisher: {
        "@type": "Organization",
        name: "Chansa Enterprises",
        logo: {
          "@type": "ImageObject",
          url: "https://chansaenterprises.com/favicon.png",
        },
      },
      mainEntityOfPage: {
        "@type": "WebPage",
        "@id": `https://chansaenterprises.com/blog/${post.slug}`,
      },
    }
  : null;

  if (!post) {
    return (
      <section className="bg-slate-950 px-4 py-24 text-white">
        <div className="mx-auto max-w-4xl">
          <h1 className="text-4xl font-bold">Article not found</h1>
          <Link
            to="/blog"
            className="mt-6 inline-block rounded-full bg-cyan-400 px-6 py-3 font-semibold text-slate-950"
          >
            Back to Blog
          </Link>
        </div>
      </section>
    );
  }

  function createWhatsAppLink() {
    const message = `
Hello Chansa Enterprises,

I read this article on your website:

${post.title}

I need help with my website, hosting, business email, electronics, or digital setup.
`;

    return `https://wa.me/260967644528?text=${encodeURIComponent(message)}`;
  }

  return (
    <>
      <SEO
        title={`${post.title} | Chansa Enterprises`}
        description={post.description}
        url={`https://chansaenterprises.com/blog/${post.slug}`}
      />
      {articleSchema && <JsonLd data={articleSchema} />}

      <section className="bg-slate-950 px-4 py-16 text-white md:py-24">
        <div className="mx-auto max-w-4xl">
          <Link to="/blog" className="text-cyan-400 hover:text-cyan-300">
            ← Back to Blog
          </Link>

          <p className="mt-8 text-sm font-semibold uppercase tracking-widest text-cyan-400">
            {post.category}
          </p>

          <h1 className="mt-4 text-4xl font-black leading-tight md:text-6xl">
            {post.title}
          </h1>

          <p className="mt-6 text-slate-300">
            {post.date} • {post.readTime}
          </p>

          <p className="mt-6 text-lg leading-8 text-slate-300">
            {post.description}
          </p>
          <div className="mt-10 overflow-hidden rounded-3xl border border-slate-800 bg-slate-900">
  <img
    src={post.image}
    alt={post.imageAlt}
    className="h-full w-full object-cover"
  />
</div>
        </div>
      </section>

      <article className="bg-white px-4 py-16">
        <div className="mx-auto max-w-3xl">
          <div className="space-y-6 text-lg leading-8 text-slate-700">
            {post.content.map((block, index) => {
              if (block.type === "heading") {
                return (
                  <h2
                    key={index}
                    className="pt-6 text-3xl font-bold text-slate-950"
                  >
                    {block.text}
                  </h2>
                );
              }

              if (block.type === "list") {
                return (
                  <ul key={index} className="space-y-3">
                    {block.items.map((item) => (
                      <li key={item} className="flex gap-3">
                        <span className="mt-1 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-cyan-400 text-sm font-bold text-slate-950">
                          ✓
                        </span>
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                );
              }

              return <p key={index}>{block.text}</p>;
            })}
          </div>

          <div className="mt-12 rounded-3xl bg-slate-950 p-6 text-white md:p-8">
            <h2 className="text-2xl font-bold">
              Need help from Chansa Enterprises?
            </h2>

            <p className="mt-3 text-slate-300">
              Contact us for website development, domain setup, hosting,
              business email, digital catalogues, electronics, and IT support.
            </p>

            <a
              href={createWhatsAppLink()}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-6 inline-block rounded-full bg-green-500 px-7 py-3 font-semibold text-slate-950 transition hover:bg-green-400"
            >
              Contact on WhatsApp
            </a>
          </div>
        </div>
      </article>
    </>
  );
}