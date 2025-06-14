
import { Button } from '@/components/ui/button';
import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const Hero = () => {
  return (
    <section className="relative h-[60vh] w-full">
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: "url('https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?q=80&w=2070&auto=format&fit=crop')" }}
      >
        <div className="absolute inset-0 bg-black/50" />
      </div>
      <div className="relative z-10 flex h-full flex-col items-center justify-center text-center text-white px-4">
        <h1 className="text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl">
          Equipamentos para sua Criatividade
        </h1>
        <p className="mt-4 max-w-2xl text-lg sm:text-xl">
          Encontre as melhores câmeras, lentes e equipamentos de áudio e vídeo para seus projetos.
        </p>
        <div className="mt-8">
          <Button asChild size="lg">
            <Link to="/products">
              Ver Produtos <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Hero;
