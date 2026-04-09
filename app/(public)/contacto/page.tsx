import ContactForm from "@/components/forms/ContactForm";
import { MessageCircle, Mail, MapPin, Calendar } from "lucide-react";

export const metadata = {
  title: "Contacto - Cauralis",
  description: "Contáctanos para iniciar tu proyecto digital con Cauralis.",
};

export default function ContactoPage() {
  return (
    <div className="pt-32 pb-24">
      <div className="max-w-7xl mx-auto px-6 lg:px-10">
        <div className="flex flex-col lg:flex-row gap-16">
          {/* Info side */}
          <div className="lg:w-1/3 space-y-12">
            <div>
              <h1 className="text-4xl lg:text-5xl font-bold text-slate-100 mb-6">
                Construyamos el <span className="hero-gradient-text">Futuro</span>
              </h1>
              <p className="text-slate-400 leading-relaxed">
                Estamos listos para transformar tus ideas en productos digitales
                excepcionales. Envíanos un mensaje o búscanos en nuestros canales directos.
              </p>
            </div>

            <div className="space-y-8">
              <div className="flex items-start gap-4 group">
                <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-background-dark transition-all">
                  <Mail size={24} />
                </div>
                <div>
                  <div className="text-slate-100 font-bold">Email</div>
                  <div className="text-slate-400 text-sm">zpaul3981@gmail.com</div>
                </div>
              </div>

              <div className="flex items-start gap-4 group">
                <div className="w-12 h-12 rounded-xl bg-lima/10 flex items-center justify-center text-lima group-hover:bg-lima group-hover:text-background-dark transition-all">
                  <MessageCircle size={24} />
                </div>
                <div>
                  <div className="text-slate-100 font-bold">WhatsApp</div>
                  <a 
                    href="https://wa.me/593990099265" 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className="text-slate-400 text-sm hover:text-lima transition-colors"
                  >
                    +593 99 009 9265
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-4 group">
                <div className="w-12 h-12 rounded-xl bg-secondary/10 flex items-center justify-center text-secondary group-hover:bg-secondary group-hover:text-background-dark transition-all">
                  <Calendar size={24} />
                </div>
                <div>
                  <div className="text-slate-100 font-bold">Agenda una Cita</div>
                  <div className="text-slate-400 text-sm cursor-pointer hover:text-secondary transition-colors">Ver disponibilidad</div>
                </div>
              </div>
            </div>
          </div>

          {/* Form side */}
          <div className="lg:w-2/3">
            <ContactForm />
          </div>
        </div>
      </div>
    </div>
  );
}
