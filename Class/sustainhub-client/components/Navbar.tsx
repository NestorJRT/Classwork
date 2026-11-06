import Link from "next/link";

const Navbar = () => {
  return (
    <nav className="bg-gray-800 p-4 nabvar navbar-expand-lg nabvar-dark">
        <div className="container">
                <p> Home </p>
            <div className="flex items-center gap-6">
                <Link href="/dashboard" className="hover:underline">
                    Dashboard
                </Link>
                <Link href="/about" className="hover:underline">
                    About
                </Link>
            </div>
        </div>
    </nav>
  );
}

export default Navbar;
