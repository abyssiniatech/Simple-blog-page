// import { getPosts } from "@/lib/posts";
import { getPosts } from "@/app/lib/posts";
import Image from "next/image";
import { notFound } from "next/navigation";

export default async function PostPage({ params }) {
  const post = await getPosts(params.slug);
  if (!post) return notFound();

  return (
    <article className="bg-white p-6 rounded shadow">
      <h1 className="text-3xl font-bold mb-2">{post.title}</h1>
      <Image src={post.image} alt={post.title} width={800} height={500} className="rounded mb-4" />
      <p>{post.excerpt}</p>
    </article>
  );
}
