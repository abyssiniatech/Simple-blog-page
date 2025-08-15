
import Footer from "./components/Footer";
import Image from "next/image";
import Link from "next/link";
// import { getPosts } from "./lib/posts";
// import { getPosts } from "@/lib/posts";
import {  getPosts} from "./lib/posts"

export default async function HomePage() {
  const posts = await getPosts();

  return (
    <div className="min-h-screen flex flex-col">
      {/* Page Heading */}
      <header className="py-10 bg-gray-100 dark:bg-gray-900">
        <h1 className="text-4xl sm:text-5xl font-bold text-center text-gray-900 dark:text-white">
          Welcome to My Blog
        </h1>
        <p className="mt-4 text-center text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
          Discover the latest posts, travel stories, and tips from around the world.
        </p>
      </header>

      {/* Posts Grid */}
      <main className="flex-1 px-4 py-10 max-w-6xl mx-auto">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
          {posts.map((post) => (
            <div
              key={post.slug}
              className="bg-white dark:bg-gray-800 rounded-2xl shadow-lg overflow-hidden flex flex-col transition-transform transform hover:-translate-y-1 hover:shadow-2xl"
            >
              {/* FIXED IMAGE */}
              <div className="relative h-48 w-full">
                <Image
                  src={post.image.startsWith("/") ? post.image : `/${post.image}`}
                  alt={post.title}
                  fill
                  className="object-cover w-full h-full"
                  priority
                />
              </div>

              <div className="p-4 flex flex-col flex-1">
                <h2 className="text-xl font-semibold mt-2 text-gray-900 dark:text-white">
                  {post.title}
                </h2>
                <p className="text-gray-600 dark:text-gray-300 flex-1 mt-1">{post.excerpt}</p>
                <Link
                  href={`/blog/${post.slug}`}
                  className="mt-4 inline-block rounded-lg px-4 py-2 text-sm font-medium text-white bg-blue-600 hover:bg-blue-700 transition-colors duration-200 text-center"
                >
                  Read more
                </Link>
              </div>
            </div>
          ))}
        </div>
      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
}
