import { Card, CardContent } from "@/components/ui/card";
import centerpiece from "@/assets/centerpiece.png";
import candles from "@/assets/candles.jpg";
import rawPieces from "@/assets/raw-pieces.png";
import traysBowls from "@/assets/trays-bowls.png";

const products = [
  {
    title: "Centros de Mesa y Souvenirs",
    description: "Piezas únicas de yeso y cemento para dar elegancia a tu mesa con la decoración necesaria",
    image: centerpiece
  },
  {
    title: "Velas Aromáticas",
    description: "Aromas naturales en contenedores de vidrio o cemento, pintadas a mano",
    image: candles
  },
  {
    title: "Bandejas, Cuencos, y más en sets",
    description: "Decoración funcional pintada a mano con amor",
    image: traysBowls
  },
  {
    title: "Piezas en Crudo",
    description: "Material base para tu propia creatividad, sin pintar o barnizar, listas para personalizar",
    image: rawPieces
  }
];

const Products = () => {
  return (
    <section id="productos" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          {/* Header */}
          <div className="text-center mb-16">
            <h2 className="font-display text-4xl md:text-5xl font-bold text-foreground mb-4">
              Nuestros Productos
            </h2>
            <div className="w-24 h-1 bg-wisteria-lavender mx-auto rounded-full mb-6"></div>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Cada pieza es única y está hecha con dedicación. Explora nuestras creaciones artesanales.
            </p>
          </div>

          {/* Products Grid */}
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
            {products.map((product, index) => (
              <Card 
                key={index}
                className="group overflow-hidden border-none shadow-md hover:shadow-xl transition-all duration-300 bg-card"
              >
                <CardContent className="p-0">
                  <div className="relative overflow-hidden aspect-square">
                    <img 
                      src={product.image} 
                      alt={product.title}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-foreground/70 via-foreground/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  </div>
                  <div className="p-6">
                    <h3 className="font-display text-2xl font-semibold text-foreground mb-2">
                      {product.title}
                    </h3>
                    <p className="text-muted-foreground leading-relaxed">
                      {product.description}
                    </p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Sales Types */}
          <div className="grid md:grid-cols-2 gap-8">
            <Card className="border-2 border-wisteria-lavender/30 bg-gradient-to-br from-card to-wisteria-cream/20 shadow-md hover:shadow-lg transition-all duration-300">
              <CardContent className="p-8">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-full bg-wisteria-lavender/20 flex items-center justify-center flex-shrink-0">
                    <span className="text-2xl">✨</span>
                  </div>
                  <div>
                    <h3 className="font-display text-2xl font-semibold text-foreground mb-3">
                      Venta por Menor
                    </h3>
                    <p className="text-muted-foreground leading-relaxed mb-2">
                      Piezas <span className="font-semibold text-foreground">pintadas y personalizadas a mano</span>. 
                    </p>
                    <p className="text-muted-foreground leading-relaxed">
                      Trabajamos juntos para crear algo único que refleje tu estilo y personalidad.
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="border-2 border-wisteria-lavender/30 bg-gradient-to-br from-card to-wisteria-cream/20 shadow-md hover:shadow-lg transition-all duration-300">
              <CardContent className="p-8">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-full bg-accent/20 flex items-center justify-center flex-shrink-0">
                    <span className="text-2xl">🎨</span>
                  </div>
                  <div>
                    <h3 className="font-display text-2xl font-semibold text-foreground mb-3">
                      Venta por Mayor
                    </h3>
                    <p className="text-muted-foreground leading-relaxed mb-2">
                      <span className="font-semibold text-foreground">Piezas en crudo</span> listas 
                      para que des rienda suelta a tu imaginación.
                    </p>
                    <p className="text-muted-foreground leading-relaxed">
                      Perfectas para artistas, decoradores o quienes buscan un proyecto creativo.
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Products;
