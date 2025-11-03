import logoPlant from "@/assets/wisteria-logo.png";
import { Heart } from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gradient-to-br from-wisteria-taupe/10 to-wisteria-cream/20 py-12 border-t border-wisteria-lavender/20">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          {/* Logo and Tagline */}
          <div className="text-center mb-8">
            <img 
              src={logoPlant} 
              alt="Wisteria Deco-Home" 
              className="w-48 h-auto mx-auto mb-4 opacity-90"
            />
            <p className="text-muted-foreground italic">
              Decoración artesanal con amor
            </p>
          </div>

          {/* Divider */}
          <div className="w-full h-px bg-wisteria-lavender/30 mb-8"></div>

          {/* Bottom Section */}
          <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-muted-foreground">
            <p>
              © {currentYear} Wisteria Deco-Home. Todos los derechos reservados.
            </p>
            <p className="flex items-center gap-2">
              Hecho con <Heart className="w-4 h-4 text-wisteria-lavender fill-wisteria-lavender" /> por
              <a
              href="https://github.com/razzolinik"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Perfil de GitHub (se abre en nueva pestaña)"
              className="ml-2 inline-flex items-center px-3 py-1 rounded-md bg-wisteria-lavender/10 hover:bg-wisteria-lavender/20 text-wisteria-lavender transition-colors"
              >
              razzolinik.
              </a>
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
