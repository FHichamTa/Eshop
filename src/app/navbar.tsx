import Link from "next/link";

const Navbar = () => {
  return (
    <nav className="border-b shadow-md py-4">
      <div className="max-w-7xl mx-auto px-4 flex justify-between">
        <Link href="/">Home</Link>
        <div>
          <span>Mon panier</span>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
