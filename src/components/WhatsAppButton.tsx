import { FaWhatsapp } from 'react-icons/fa';

export const WhatsAppButton = () => {
  const phoneNumber = '+56912345678';
  const message = 'Hola Solveria, necesito información';
  
  return (
    <a
      href={`https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 bg-green-500 text-white p-4 rounded-full shadow-lg hover:bg-green-600 transition-all z-50"
    >
      <FaWhatsapp size={28} />
    </a>
  );
};