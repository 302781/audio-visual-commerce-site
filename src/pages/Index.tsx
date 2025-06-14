
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

// Dados de exemplo para produtos
const featuredProducts = [
  { id: 1, name: "Câmera DSLR Pro", price: "R$ 4.999,00", image: "https://images.unsplash.com/photo-1512790182412-b19e6d62bc39?q=80&w=2000&auto=format&fit=crop" },
  { id: 2, name: "Microfone de Estúdio", price: "R$ 899,00", image: "https://images.unsplash.com/photo-1590650529123-00e5a840c4e1?q=80&w=2070&auto=format&fit=crop" },
  { id: 3, name: "Drone 4K com Câmera", price: "R$ 7.499,00", image: "https://images.unsplash.com/photo-1507582020474-9a334a76194a?q=80&w=2071&auto=format&fit=crop" },
  { id: 4, name: "Lente 50mm f/1.8", price: "R$ 1.299,00", image: "https://images.unsplash.com/photo-1505238017935-968641a134a4?q=80&w=2070&auto=format&fit=crop" },
];

const Index = () => {
  return (
    <div className="flex flex-col min-h-screen bg-background">
      <Header />
      <main className="flex-grow">
        <Hero />
        
        <section className="py-12 md:py-24 lg:py-32">
          <div className="container">
            <h2 className="text-3xl font-bold tracking-tighter text-center sm:text-4xl md:text-5xl">Produtos em Destaque</h2>
            <p className="max-w-[700px] mx-auto mt-4 text-center text-muted-foreground md:text-xl">
              Confira nossa seleção de produtos mais vendidos e recomendados por especialistas.
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 mt-12">
              {featuredProducts.map((product) => (
                <Card key={product.id} className="overflow-hidden">
                  <CardHeader className="p-0">
                    <img src={product.image} alt={product.name} className="w-full h-48 object-cover aspect-video" />
                  </CardHeader>
                  <CardContent className="p-4">
                    <h3 className="font-semibold text-lg">{product.name}</h3>
                    <p className="text-primary font-bold mt-2">{product.price}</p>
                    <Button asChild className="mt-4 w-full">
                      <Link to={`/products/${product.id}`}>Ver Detalhes</Link>
                    </Button>
                  </CardContent>
                </Card>
              ))}
            </div>
            <div className="text-center mt-12">
              <Button asChild size="lg" variant="outline">
                <Link to="/products">
                  Ver todos os produtos
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </Button>
            </div>
          </div>
        </section>

        <section className="py-12 md:py-24 lg:py-32 bg-secondary">
          <div className="container text-center">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl">Precisa de Ajuda?</h2>
            <p className="max-w-[600px] mx-auto mt-4 text-muted-foreground md:text-xl">
              Nossa equipe de especialistas está pronta para ajudar você a encontrar o equipamento perfeito para suas necessidades.
            </p>
            <div className="mt-8">
              <Button asChild size="lg">
                <Link to="/contact">
                  Fale Conosco
                </Link>
              </Button>
            </div>
          </div>
        </section>
      </main>
      <Footer />
      <WhatsAppButton />
    </div>
  );
};

export default Index;
