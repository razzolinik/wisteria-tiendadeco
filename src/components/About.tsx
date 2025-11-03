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
                ¡Hola! soy <span className="font-semibold text-foreground">Carola</span>, la que está detrás de cada pieza de Wisteria.</p>
              <p className="text-lg text-muted-foreground leading-relaxed">
                Esto nació de mi amor por transformar cosas simples en objetos bellos que le den ese toque especial, de paz y armonía, a tu casa.
                ¿Con qué trabajo? Con mis manos y con yeso y cemento, ¡sí! Los convierto en bandejas, cuencos, macetas y velas riquísimas.
                Pongo el 100% de dedicación en cada detalle, porque creo que ahí está la diferencia.
              </p>
              <p className="text-lg text-muted-foreground leading-relaxed">
                Además, mi fe es el motor de todo. Cada pieza la creo con esa inspiración y con el corazón, como dice mi versículo favorito: 
                <span className="font-semibold text-foreground">"Todo lo que hagan, háganlo de corazón, como para el Señor." (Colosenses 3:23).</span>
              </p>
              <p className="text-lg text-muted-foreground leading-relaxed">
                Gracias por apoyar mi emprendimiento y por dejarme llevar un poquito de mi arte y mi fe a tu hogar.
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
