const Navbar = () => {
  return (
    <nav className="flex justify-between items-center px-6 py-4 bg-gray-900 text-white shadow-md">
      <h1 className="text-2xl font-bold">Pritam</h1>
      <div className="space-x-4">
        <a href="#home" className="hover:text-cyan-400">Home</a>
        <a href="#about" className="hover:text-cyan-400">About</a>
        <a href="#projects" className="hover:text-cyan-400">Projects</a>
        <a href="#contact" className="hover:text-cyan-400">Contact</a>
      </div>
    </nav>
  );
};

export default Navbar;
