import { Newspaper, Cat } from 'lucide-react'

export default function Blog() {
  const blogPosts = [
    { title: "Optimizing Game Purr-formance", date: "2023-05-15", excerpt: "In this post, we dive into various techniques for optimizing game performance, ensuring your feline characters move with grace and agility..." },
    { title: "Creating Realistic Cat AI Behaviors", date: "2023-04-22", excerpt: "Learn how to implement more realistic AI behaviors in your games using advanced 'cat-nitive' algorithms..." },
    { title: "The Future of Whisker Rendering in Games", date: "2023-03-10", excerpt: "Exploring the potential of advanced fur and whisker rendering technology and its impact on future game development..." },
  ]

  return (
    <section id="blog" className="mb-12">
      <h2 className="text-2xl font-bold mb-4 text-amber-800 flex items-center">
        <Newspaper className="w-6 h-6 mr-2" /> Catlog (Blog)
      </h2>
      <div className="space-y-6">
        {blogPosts.map((post, index) => (
          <article key={index} className="bg-amber-100 p-6 rounded shadow">
            <h3 className="text-xl font-semibold mb-2 text-amber-800 flex items-center">
              <Cat className="w-5 h-5 mr-2" /> {post.title}
            </h3>
            <p className="text-amber-600 text-sm mb-2">{post.date}</p>
            <p className="text-amber-900">{post.excerpt}</p>
            <a href="#" className="text-amber-700 hover:underline mt-2 inline-block flex items-center">
              Read meow <Cat className="w-4 h-4 ml-1" />
            </a>
          </article>
        ))}
      </div>
    </section>
  )
}

