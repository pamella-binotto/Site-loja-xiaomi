import { MessageCircle } from "lucide-react";

function WhatsAppButton() {
  return (
    <a
      href="https://wa.me/5548999007742?text=Olá!%20Quero%20saber%20mais%20sobre%20os%20produtos%20da%20Ju%20Eletrônicos."
      target="_blank"
      rel="noreferrer"
      className="
        fixed bottom-5 right-5 
        bg-green-500 text-white 
        w-14 h-14 rounded-full 
        flex items-center justify-center 
        shadow-lg shadow-black/30
        hover:bg-green-600 active:scale-95 
        transition-all duration-300
        z-50
      "
    >
       <MessageCircle size={28} strokeWidth={2.5} />
    </a>
  );
}

export default WhatsAppButton;
