
export default function NavBar() {
  return ( <>
    <nav className="bg-teal-500 text-white p-4 flex justify-around items-center">
      <h1 className="text-xl font-bold text-blue-500">Simple Blog</h1>
      <ul className="flex space-x-4 mt-2 ">
        <li><a href="/" className="px-4 py-2 rounded-lg text-gray-700 hover:bg-gray-200 hover:text-gray-900 transition-colors duration-200"
>Home</a></li>
        <li><a href="/about" className="px-4 py-2 rounded-lg text-gray-700 hover:bg-gray-200 hover:text-gray-900 transition-colors duration-200"
>About</a></li>
        <li><a href="/posts" className="px-4 py-2 rounded-lg text-gray-700 hover:bg-gray-200 hover:text-gray-900 transition-colors duration-200"
>Posts</a></li>
      </ul>
    </nav>

    </>
  );
}
