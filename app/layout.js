
import "./globals.css";
import NavBar from "@/app/components/NavBar"

export const metadata = {
  title: "Simple Blog",
  description: "Next.js 15 + Tailwind CSS Blog Example",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="bg-gray-100 text-gray-900">
        <NavBar />
        <main className="max-w-5xl mx-auto p-4">{children}</main>
      </body>
    </html>
  );
}
