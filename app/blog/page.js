
// import { getPosts } from "../../lib/posts";
// import { getPosts } from "@/lib/posts"; // when lib/posts.js is at project root
import { getPosts } from "@/lib/posts"; // when lib/posts.js is at project root
import Link from "next/link";
export default async function BlogPage() {
  const posts = await getPosts();
  return (
    <div>
      <h1 className="text-3xl font-bold mb-4">Blog</h1>
      <ul className="space-y-4">
        {posts.map((post) => (
          <li key={post.slug} className="bg-white p-4 rounded shadow">
            <h2 className="text-xl font-semibold">{post.title}</h2>
            <p>{post.excerpt}</p>
            <Link href={`/blog/${post.slug}`} className="text-blue-600 hover:underline">Read more</Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
