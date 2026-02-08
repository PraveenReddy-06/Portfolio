
const NavLinks =[
  { href: "#About", label: 'About' },
  { href: "#Skills", label: 'Skills' },
  { href: "#Projects", label: 'Projects' },
  { href: "#Contact", label: 'Contact' }
]

const Navbar = () => {
  return (
    <header className="fixed top-4 left-0 right-0 bg-transparent z-50">
      <nav className="flex justify-between items-center max-w-6xl mx-auto px-5 py-2 backdrop-blur-xl bg-black/40 border border-white/10 rounded-full">


        <a href="#" className="font-bold hover:text-primary tracking-tight">Praveen Maramreddy<span className="text-white text-2xl">.</span></a>

        <div className="hidden md:flex gap-6 backdrop-blur-md bg-transparent rounded-full text-primary px-3 py-1 ">
            { NavLinks.map( (link) => (<a key={link.href} href={link.href} className="hover:text-white  hover:bg-surface hover:scale-105 rounded-full px-3 py-1 transition">{link.label}</a>)) }
        </div>

      </nav>
    </header>
  );
};

export default Navbar;