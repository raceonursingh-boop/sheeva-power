export default function Navbar() {
  return (
    <header className="fixed top-0 left-0 z-50 w-full border-b border-white/10 bg-black/60 backdrop-blur-xl">
      <div className="mx-auto flex h-20 max-w-7xl items-center justify-between px-6 lg:px-8">
        {/* Logo */}
        <a
          href="#"
          className="text-2xl font-black uppercase tracking-[0.3em] text-white"
        >
          SHEEVA<span className="text-red-600">POWER</span>
        </a>

        {/* Desktop Navigation */}
        <nav className="hidden items-center gap-8 md:flex">
          <a href="#" className="text-gray-300 transition hover:text-red-500">
            Home
          </a>
          <a href="#" className="text-gray-300 transition hover:text-red-500">
            Shop
          </a>
          <a href="#" className="text-gray-300 transition hover:text-red-500">
            Collections
          </a>
          <a href="#" className="text-gray-300 transition hover:text-red-500">
            About
          </a>
          <a href="#" className="text-gray-300 transition hover:text-red-500">
            Contact
          </a>
        </nav>

        {/* Cart Button */}
        <button className="rounded-full border border-red-600 px-5 py-2 text-white transition hover:bg-red-600">
          Cart
        </button>
      </div>
    </header>
  );
}