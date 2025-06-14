
import { Camera, Facebook, Instagram, Twitter } from 'lucide-react';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="bg-secondary text-secondary-foreground">
      <div className="container py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="flex flex-col gap-4 md:col-span-1">
            <Link to="/" className="flex items-center gap-2">
              <Camera className="h-6 w-6" />
              <span className="font-bold text-lg">AudioVisual</span>
            </Link>
            <p className="text-sm text-muted-foreground">
              Sua fonte completa para equipamentos de áudio, vídeo e fotografia.
            </p>
          </div>
          <div>
            <h3 className="font-semibold mb-4">Navegação</h3>
            <ul className="space-y-2">
              <li><Link to="/products" className="text-sm hover:underline">Produtos</Link></li>
              <li><Link to="/about" className="text-sm hover:underline">Sobre Nós</Link></li>
              <li><Link to="/contact" className="text-sm hover:underline">Contato</Link></li>
              <li><Link to="/faq" className="text-sm hover:underline">FAQ</Link></li>
            </ul>
          </div>
          <div>
            <h3 className="font-semibold mb-4">Suporte</h3>
            <ul className="space-y-2">
              <li><Link to="/shipping" className="text-sm hover:underline">Envio e Retorno</Link></li>
              <li><Link to="/privacy" className="text-sm hover:underline">Política de Privacidade</Link></li>
              <li><Link to="/terms" className="text-sm hover:underline">Termos de Serviço</Link></li>
            </ul>
          </div>
          <div>
            <h3 className="font-semibold mb-4">Siga-nos</h3>
            <div className="flex items-center gap-4">
              <a href="#" aria-label="Facebook" className="text-muted-foreground hover:text-foreground"><Facebook /></a>
              <a href="#" aria-label="Instagram" className="text-muted-foreground hover:text-foreground"><Instagram /></a>
              <a href="#" aria-label="Twitter" className="text-muted-foreground hover:text-foreground"><Twitter /></a>
            </div>
          </div>
        </div>
        <div className="mt-8 border-t border-border pt-8 text-center text-sm text-muted-foreground">
          <p>&copy; {new Date().getFullYear()} AudioVisual. Todos os direitos reservados.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
