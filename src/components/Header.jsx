import logo from "../assets/logo.jpg";

function Header() {
  return (
    <header className="flex justify-between items-center px-8 py-4 bg-gray-600 text-light shadow-md">
      {/* Logo + Nome */}
      <div className="flex items-center gap-3">
        <img
          src={logo}
          alt="Logo Ju Eletrônicos"
          className="w-15 h-15  rounded-full bg-white "
        />
        <h1 className="text-xl font-semibold tracking-wide">
          Ju Eletrônicos
        </h1>
      </div>

      {/* Navegação */}
      <nav className="flex gap-6 text-sm font-medium">
        <a href="#" className="hover:text-primary transition-colors">
          Home
        </a>
        <a href="#" className="hover:text-primary transition-colors">
          Modelos
        </a>
        <a href="#" className="hover:text-primary transition-colors">
          Contato
        </a>
        <a href="#" className="hover:text-primary transition-colors">
          Sobre Nós
        </a>
      </nav>
    </header>
  );
}

export default Header;
