import { Button } from "@/components/ui/button";
import logoImage from "@/assets/wisteria-logo.png";

const Hero = () => {
  const scrollToProducts = () => {
    const element = document.getElementById('productos');
    element?.scrollIntoView({ behavior: 'smooth' });
  };

  const scrollToContact = () => {
    const element = document.getElementById('contacto');
    element?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-background via-wisteria-cream to-background">
      {/* Decorative elements */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute top-20 left-10 w-32 h-32 rounded-full bg-wisteria-lavender blur-3xl"></div>
        <div className="absolute bottom-20 right-10 w-40 h-40 rounded-full bg-accent blur-3xl"></div>
      </div>

      <div className="container mx-auto px-4 py-20 relative z-10">
        <div className="max-w-4xl mx-auto text-center animate-fade-in">
          {/* Logo */}
          <div className="mb-8 flex justify-center">
            <img 
              src={logoImage} 
              alt="Wisteria - Hecho con amor" 
              className="w-64 md:w-80 lg:w-96 h-auto drop-shadow-lg hover:scale-105 transition-transform duration-300"
            />
          </div>

          {/* Tagline */}
          <p className="text-lg md:text-xl text-muted-foreground mb-8 font-light tracking-wide animate-slide-up">
            Decoración artesanal hecha con amor
          </p>

          {/* Description */}
          <p className="text-base md:text-lg text-foreground/80 mb-12 max-w-2xl mx-auto leading-relaxed animate-slide-up">
            Cada pieza es única, creada a mano con dedicación y cariño. 
            Transforma tu hogar con decoraciones que cuentan una historia.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center animate-slide-up">
            <Button 
              onClick={scrollToProducts}
              size="lg"
              className="bg-wisteria-taupe hover:bg-wisteria-taupe/90 text-wisteria-cream font-medium transition-all duration-300 shadow-md hover:shadow-lg"
            >
              Ver Productos
            </Button>
            <Button 
              onClick={scrollToContact}
              variant="outline"
              size="lg"
              className="border-2 border-wisteria-lavender text-wisteria-taupe hover:bg-wisteria-lavender/10 font-medium transition-all duration-300"
            >
              Contactar
            </Button>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-wisteria-taupe rounded-full flex justify-center">
          <div className="w-1 h-3 bg-wisteria-taupe rounded-full mt-2"></div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
