import logo from "../assets/logo.jpg";
import { useState } from "react";
import { Menu, X, ShoppingCart, User, Heart } from "lucide-react";
import { Link } from "react-router-dom";

function Header() {

  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="flex justify-between items-center px-8 py-4 bg-light text-black shadow-md">

      <div className="flex items-center gap-3">
        <div className="w-12 h-12 rounded-full bg-white flex items-center justify-center overflow-hidden">
          <img src={logo} alt="Logo Ju Eletrônicos" className="object-contain w-10 h-10" />
        </div>

        <h1 className="text-[16px] font-semibold tracking-wide">
          Ju Eletrônicos - Especializa Xiaomi
        </h1>
      </div>


      <nav className="flex gap-6 text-sm font-medium">
        <a href="#home" className="hover:text-primary transition-colors">
          Home
        </a>
        <a href="#modelos" className="hover:text-primary transition-colors">
          Modelos
        </a>
        <a href="#contato" className="hover:text-primary transition-colors">
          Contato
        </a>
        <a href="#sobre" className="hover:text-primary transition-colors">
          Sobre Nós
        </a>
      </nav>
    

    </header>
  );
}

export default Header;
