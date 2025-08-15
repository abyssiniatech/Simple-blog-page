const posts = [
  {
    slug: "sunny-beach",
    title: "Sunny Beach Escape",
    date: "2025-08-01",
    excerpt: "Relax under the sun with crystal-clear water.",
    image: "/images/beach.jpg",
  },
  {
    slug: "mountain-hike",
    title: "Mountain Hike Adventure",
    date: "2025-07-22",
    excerpt: "Breathtaking views and fresh mountain air.",
    image: "/images/mountain.jpg",
  },
  {
    slug: "city-nights",
    title: "City Nights Food Tour",
    date: "2025-06-10",
    excerpt: "Street food and neon lights at night.",
    image: "/images/city.jpg",
  },
];

export async function getPosts() {
  return posts;
}

export async function getPost(slug) {
  return posts.find((p) => p.slug === slug) || null;
}
