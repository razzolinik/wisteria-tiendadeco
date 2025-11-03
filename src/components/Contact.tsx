import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Instagram, MessageCircle, Mail } from "lucide-react";

const Contact = () => {
  return (
    <section id="contacto" className="py-20 bg-gradient-to-b from-wisteria-cream/30 to-background">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          {/* Header */}
          <div className="text-center mb-16">
            <h2 className="font-display text-4xl md:text-5xl font-bold text-foreground mb-4">
              Hablemos
            </h2>
            <div className="w-24 h-1 bg-wisteria-lavender mx-auto rounded-full mb-6"></div>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              ¿Tenés una idea en mente? ¿Querés conocer más sobre nuestros productos? 
              Contactame y creemos algo hermoso juntos.
            </p>
          </div>

          {/* Contact Cards */}
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
            <Card className="group hover:shadow-lg transition-all duration-300 border-wisteria-lavender/30 bg-card">
              <CardContent className="p-6 text-center">
                <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-wisteria-lavender/20 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                  <Instagram className="w-8 h-8 text-wisteria-taupe" />
                </div>
                <h3 className="font-display text-xl font-semibold text-foreground mb-2">Instagram</h3>
                <p className="text-muted-foreground text-sm mb-4">Seguinos y mirá nuestras creaciones</p>
                <Button 
                  variant="outline" 
                  className="border-wisteria-lavender text-wisteria-taupe hover:bg-wisteria-lavender/10"
                  onClick={() => window.open('https://instagram.com/wisteriatienda.deco', '_blank')}
                >
                  @wisteriatienda.deco
                </Button>
              </CardContent>
            </Card>

            <Card className="group hover:shadow-lg transition-all duration-300 border-wisteria-lavender/30 bg-card">
              <CardContent className="p-6 text-center">
                <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-accent/20 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                  <MessageCircle className="w-8 h-8 text-wisteria-taupe" />
                </div>
                <h3 className="font-display text-xl font-semibold text-foreground mb-2">WhatsApp</h3>
                <p className="text-muted-foreground text-sm mb-4">Escribime directamente</p>
                <Button 
                  variant="outline"
                  className="border-wisteria-lavender text-wisteria-taupe hover:bg-wisteria-lavender/10"
                  onClick={() => window.open('https://wa.me/5493855175057', '_blank')}
                >
                  Enviar mensaje
                </Button>
              </CardContent>
            </Card>

            <Card className="group hover:shadow-lg transition-all duration-300 border-wisteria-lavender/30 bg-card sm:col-span-2 lg:col-span-1">
              <CardContent className="p-6 text-center">
                <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-wisteria-lavender/20 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                  <Mail className="w-8 h-8 text-wisteria-taupe" />
                </div>
                <h3 className="font-display text-xl font-semibold text-foreground mb-2">Email</h3>
                <p className="text-muted-foreground text-sm mb-4">Consultas y pedidos</p>
                <Button 
                  variant="outline"
                  className="border-wisteria-lavender text-wisteria-taupe hover:bg-wisteria-lavender/10"
                  onClick={() => window.location.href = 'mailto:carolapmartinez@gmail.com'}
                >
                  carolapmartinez@gmail.com
                </Button>
              </CardContent>
            </Card>
          </div>

          {/* Call to Action */}
          <Card className="border-2 border-wisteria-lavender bg-gradient-to-br from-wisteria-cream/50 to-card shadow-lg">
            <CardContent className="p-8 md:p-12 text-center">
              <h3 className="font-display text-3xl font-bold text-foreground mb-4">
                ¿Lista para decorar tu espacio?
              </h3>
              <p className="text-lg text-muted-foreground mb-6 max-w-xl mx-auto">
                Cada pieza es única y especial. Trabajemos juntas para crear algo que ames.
              </p>
              <Button 
                size="lg"
                className="bg-wisteria-taupe hover:bg-wisteria-taupe/90 text-wisteria-cream font-medium shadow-md hover:shadow-lg transition-all duration-300"
                onClick={() => window.open('https://wa.me/5493855175057', '_blank')}
              >
                Empezar mi pedido
              </Button>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default Contact;
