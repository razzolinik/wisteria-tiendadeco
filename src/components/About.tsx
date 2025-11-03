import heroDecor from "@/assets/hero-decor.jpg";
import handmadeProcess from "@/assets/handmade-process.png";

const About = () => {
  return (
    <section className="py-20 bg-gradient-to-b from-background to-wisteria-cream/30">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          {/* Header */}
          <div className="text-center mb-16">
            <h2 className="font-display text-4xl md:text-5xl font-bold text-foreground mb-4">
              Sobre Wisteria
            </h2>
            <div className="w-24 h-1 bg-wisteria-lavender mx-auto rounded-full"></div>
          </div>

          {/* Content Grid */}
          <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
            <div className="space-y-6 animate-slide-up">
              <h3 className="font-display text-3xl font-semibold text-foreground">
                Hecho a mano con amor
              </h3>
              <p className="text-lg text-muted-foreground leading-relaxed">
                Soy <span className="font-semibold text-foreground">Carola</span>, y cada pieza que creo 
                nace de mi pasión por transformar materiales simples en objetos únicos que dan calidez a tu hogar.
              </p>
              <p className="text-lg text-muted-foreground leading-relaxed">
                Trabajo con yeso, cemento y otros materiales nobles para crear bandejas, cuencos, 
                floreros, macetas y centros de mesa. También elaboro velas aromáticas que llenan 
                cada espacio de paz y armonía.
              </p>
              <p className="text-lg text-muted-foreground leading-relaxed">
                Wisteria es mi pequeño emprendimiento donde cada pieza es tratada con dedicación 
                y cuidado, porque creo que los detalles hacen la diferencia.
              </p>
            </div>
            <div className="relative">
              <img 
                src={heroDecor} 
                alt="Decoraciones artesanales Wisteria" 
                className="rounded-2xl shadow-xl w-full h-auto object-cover"
              />
              <div className="absolute -bottom-6 -left-6 w-32 h-32 bg-wisteria-lavender/30 rounded-full blur-2xl -z-10"></div>
            </div>
          </div>

          {/* Process Section */}
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="order-2 md:order-1 relative">
              <img 
                src={handmadeProcess} 
                alt="Proceso artesanal de pintado" 
                className="rounded-2xl shadow-xl w-full h-auto object-cover"
              />
              <div className="absolute -top-6 -right-6 w-32 h-32 bg-accent/30 rounded-full blur-2xl -z-10"></div>
            </div>
            <div className="space-y-6 order-1 md:order-2 animate-slide-up">
              <h3 className="font-display text-3xl font-semibold text-foreground">
                Personalización y creatividad
              </h3>
              <p className="text-lg text-muted-foreground leading-relaxed">
                Cada pieza puede ser <span className="font-semibold text-foreground">pintada y personalizada 
                a mano</span> según tus gustos. Trabajo en colaboración contigo para crear algo verdaderamente especial.
              </p>
              <p className="text-lg text-muted-foreground leading-relaxed">
                También ofrezco <span className="font-semibold text-foreground">piezas en crudo por mayor</span>, 
                perfectas para quienes quieren explotar su propia imaginación y crear sus propias obras de arte.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
