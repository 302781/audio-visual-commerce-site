
import { MessageCircle } from 'lucide-react';

const WhatsAppButton = () => {
  const phoneNumber = "5511999999999"; // Substitua pelo seu número
  const message = "Olá! Gostaria de mais informações sobre seus produtos.";
  const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;

  return (
    <a
      href={whatsappUrl}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-5 right-5 z-50 bg-green-500 text-white p-4 rounded-full shadow-lg flex items-center justify-center hover:bg-green-600 transition-colors"
      aria-label="Fale conosco pelo WhatsApp"
    >
      <MessageCircle className="h-6 w-6" />
    </a>
  );
};

export default WhatsAppButton;
