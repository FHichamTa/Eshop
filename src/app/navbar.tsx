import Link from "next/link";
import { ShoppingCart } from "lucide-react";
import { FaSearch } from "react-icons/fa";

const Navbar = () => {
  return (
    <nav className="border-b shadow-md py-4">
      <div className="max-w-7xl mx-auto px-4 flex justify-between items-center">
        <Link href="/">Home</Link>
        <div className="flex items-center">
          <Link href="/commande">
            <div className="flex items-center">
              <ShoppingCart className="mr-5" />
            </div>
          </Link>
          <Link href="/search">
            <div className="flex items-center">
              <FaSearch className="mr-5" />
            </div>
            </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
