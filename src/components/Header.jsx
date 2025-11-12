import React, { useState } from "react";
import logo from "../assets/logo.jpg";
import { Menu, X, ShoppingCart, User, Heart } from "lucide-react";
import { Link } from "react-router-dom";

function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className=" bg-white text-black shadow-md ">
      <div className="flex justify-between items-center max-w-7xl mx-auto">
       
        
        <div className="flex items-center gap-3">
          <div className="w-12 h-12 rounded-full bg-white flex items-center justify-center overflow-hidden">
            <img src={logo} alt="Logo Ju Eletrônicos" className="object-contain w-10 h-10" />
          </div>
       
          <h1 className="text-[16px] font-semibold tracking-wide leading-tight">
            Ju Eletrônicos
          </h1>
        </div>

        
        <nav className="hidden md:flex gap-6 text-sm font-medium">
          <a href="#home" className="hover:text-orange-500 transition-colors">
            Home
          </a>
          <a href="#modelos" className="hover:text-orange-500 transition-colors">
            Modelos
          </a>
          <a href="#contato" className="hover:text-orange-500 transition-colors">
            Contato
          </a>
          <a href="#sobre" className="hover:text-orange-500 transition-colors">
            Sobre Nós
          </a>
        </nav>

       
        <div className="hidden md:flex gap-4">
          <Heart className="cursor-pointer hover:text-orange-500 transition" />
          <ShoppingCart className="cursor-pointer hover:text-orange-500 transition" />
          <User className="cursor-pointer hover:text-orange-500 transition" />
        </div>

      
        <button
          className="md:hidden text-black hover:text-orange-500 transition"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          {menuOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      
      <div
        className={`fixed top-0 right-0 h-full w-2/3 bg-white text-black shadow-lg transform ${
          menuOpen ? "translate-x-0" : "translate-x-full"
        } transition-transform duration-300 ease-in-out md:hidden z-40`}
      >
        <div className="flex flex-col p-6 space-y-6">
          <a href="#home" onClick={() => setMenuOpen(false)} className="hover:text-orange-500 transition">
            Home
          </a>
          <a href="#modelos" onClick={() => setMenuOpen(false)} className="hover:text-orange-500 transition">
            Modelos
          </a>
          <a href="#contato" onClick={() => setMenuOpen(false)} className="hover:text-orange-500 transition">
            Contato
          </a>
          <a href="#sobre" onClick={() => setMenuOpen(false)} className="hover:text-orange-500 transition">
            Sobre Nós
          </a>

          <div className="flex gap-6 pt-4 border-t border-gray-300">
            <Heart className="hover:text-orange-500 transition" />
            <ShoppingCart className="hover:text-orange-500 transition" />
            <User className="hover:text-orange-500 transition" />
          </div>
        </div>
      </div>

     
      {menuOpen && (
        <div
          className="fixed inset-0 bg-black/50 backdrop-blur-sm md:hidden z-30"
          onClick={() => setMenuOpen(false)}
        ></div>
      )}
    </header>
  );
}

export default Header;
