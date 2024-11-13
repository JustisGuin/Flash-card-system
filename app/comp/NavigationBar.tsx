
import Link from "next/link";
import {routes} from "./routes"

export default function NavigationBar() {
  const title = "Repetition";
  const titlePath = "/";

  return (
    <nav className="bg-gradient-to-r from-blue-500 to-purple-600 flex flex-col items-center p-4 shadow-lg">
      <Link href={titlePath} className="text-2xl text-white font-bold text-center mb-4 drop-shadow-lg hover:underline">
        {title}
      </Link>
      <div className="flex space-x-4 justify-center">
        {routes.map((route) => (
          <Link key={route.name} href={route.path} className="text-white text-lg bg-gray-800 p-2 rounded-lg transition duration-300 ease-in-out transform hover:bg-gray-700 hover:scale-100">
            {route.name}
          </Link>
        ))}
      </div>
    </nav>
  );
} 