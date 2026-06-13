import React from 'react';
import { Menu, ChevronRight, Star, CheckCircle, MapPin, Phone, Mail, ArrowRight } from 'lucide-react';
import ContactForm from '../components/ContactForm';

export default function StarsNettoyageLanding() {
  return (
    <div className="min-h-screen bg-slate-50 font-sans text-slate-900">
      
      {/* 1. Navbar (Sticky & Glassmorphism) */}
      <nav className="fixed w-full z-50 bg-white/80 backdrop-blur-md border-b border-slate-100 transition-all duration-300">
        <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
          <div className="text-2xl font-serif tracking-widest text-slate-900">STARS<span className="text-amber-600">.</span></div>
          <div className="hidden md:flex space-x-8 text-sm font-medium tracking-wide">
            <a href="#services" className="hover:text-amber-600 transition-colors">Services</a>
            <a href="#about" className="hover:text-amber-600 transition-colors">Propriétés</a>
            <a href="#process" className="hover:text-amber-600 transition-colors">Notre Approche</a>
          </div>
          <div className="flex items-center space-x-6">
            <div className="text-xs font-semibold tracking-widest text-slate-500">FR | EN</div>
            <button className="hidden md:block px-6 py-2.5 bg-slate-900 text-white text-sm font-medium hover:bg-slate-800 transition-all">
              Demander un devis
            </button>
            <Menu className="md:hidden w-6 h-6 text-slate-900" />
          </div>
        </div>
      </nav>

      {/* 2. Hero Section */}
      <section className="relative h-screen flex items-center justify-center bg-slate-900 overflow-hidden">
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?q=80&w=2070')] bg-cover bg-center opacity-40"></div>
        <div className="relative z-10 text-center px-6 max-w-4xl mx-auto mt-20">
          <h1 className="text-5xl md:text-7xl font-serif text-white mb-6 leading-tight">
            L'excellence du propre, <br/><span className="text-amber-500 font-light italic">signature suisse.</span>
          </h1>
          <p className="text-lg md:text-xl text-slate-300 mb-10 font-light tracking-wide max-w-2xl mx-auto">
            Gestion et entretien haut de gamme pour chalets et hôtels de luxe en Suisse romande.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <button className="w-full sm:w-auto px-8 py-4 bg-amber-600 text-white text-sm font-bold tracking-widest hover:bg-amber-700 transition-all">
              DEMANDER UN DEVIS
            </button>
            <button className="w-full sm:w-auto px-8 py-4 bg-transparent border border-white text-white text-sm font-bold tracking-widest hover:bg-white hover:text-slate-900 transition-all">
              DÉCOUVRIR NOS SERVICES
            </button>
          </div>
        </div>
      </section>

      {/* 3. Trust Bar */}
      <section className="bg-white py-12 border-b border-slate-100">
        <div className="max-w-7xl mx-auto px-6 flex flex-wrap justify-center gap-12 md:gap-24 opacity-60 grayscale">
          <div className="text-xl font-serif font-bold tracking-wider">HÔTEL VALAIS</div>
          <div className="text-xl font-serif font-bold tracking-wider">CHALET ALPINE</div>
          <div className="text-xl font-serif font-bold tracking-wider">SUISSE RESORT</div>
        </div>
      </section>

      {/* 4. Services */}
      <section id="services" className="py-24 bg-slate-50">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-serif text-slate-900 mb-4">Nos Services Premium</h2>
            <div className="w-12 h-0.5 bg-amber-600 mx-auto"></div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { title: "Chalets de Luxe", desc: "Entretien méticuleux adapté aux matériaux nobles et surfaces délicates." },
              { title: "Housekeeping", desc: "Standard hôtelier 5 étoiles pour garantir une expérience client parfaite." },
              { title: "Conciergerie", desc: "Gestion complète de vos propriétés, check-in, check-out et intendance." }
            ].map((service, idx) => (
              <div key={idx} className="bg-white p-10 border border-slate-100 hover:shadow-xl transition-shadow duration-300 group">
                <Star className="w-8 h-8 text-amber-600 mb-6 group-hover:scale-110 transition-transform" strokeWidth={1.5} />
                <h3 className="text-xl font-serif mb-3">{service.title}</h3>
                <p className="text-slate-500 font-light leading-relaxed mb-6">{service.desc}</p>
                <a href="#" className="inline-flex items-center text-sm font-semibold tracking-wider text-slate-900 group-hover:text-amber-600 transition-colors">
                  SAVOIR PLUS <ChevronRight className="w-4 h-4 ml-1" />
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 5. Pourquoi Nous */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
          <div>
            <img src="https://images.unsplash.com/photo-1584622650111-993a426fbf0a?q=80&w=2070" alt="Detail cleaning" className="w-full h-auto object-cover rounded-sm shadow-2xl" />
          </div>
          <div>
            <h2 className="text-3xl md:text-4xl font-serif text-slate-900 mb-8">La Différence Stars Nettoyage</h2>
            <div className="space-y-6">
              {[
                "Personnel de confiance, strictement sélectionné.",
                "Produits éco-premium respectueux de l'environnement.",
                "Disponibilité 24/7 pour les urgences hôtelières.",
                "Attention maniaque aux micro-détails."
              ].map((item, idx) => (
                <div key={idx} className="flex items-start">
                  <CheckCircle className="w-6 h-6 text-amber-600 mr-4 flex-shrink-0" strokeWidth={1.5} />
                  <p className="text-slate-600 font-light text-lg">{item}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* 7. Proceso de Trabajo */}
      <section id="process" className="py-24 bg-slate-900 text-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-serif mb-4">Notre Méthodologie</h2>
            <div className="w-12 h-0.5 bg-amber-600 mx-auto"></div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 text-center divide-y md:divide-y-0 md:divide-x divide-slate-800">
            {[
              { step: "01", title: "Contact", desc: "Analyse initiale de vos besoins." },
              { step: "02", title: "Visite", desc: "Évaluation sur site et devis précis." },
              { step: "03", title: "Exécution", desc: "Intervention selon nos standards." },
              { step: "04", title: "Contrôle", desc: "Suivi rigoureux de la qualité." }
            ].map((p, idx) => (
              <div key={idx} className="pt-8 md:pt-0 md:px-8">
                <div className="text-amber-500/50 font-serif text-5xl mb-4">{p.step}</div>
                <h4 className="text-lg font-bold tracking-wider mb-2">{p.title}</h4>
                <p className="text-slate-400 font-light">{p.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 10. Final CTA con el Componente Importado */}
      <section className="py-24 bg-amber-600 text-center relative">
        <div className="max-w-3xl mx-auto px-6 relative z-10">
          <h2 className="text-4xl font-serif text-white mb-6">Prêt à élever le standard de votre propriété ?</h2>
        </div>
        
        <div className="relative z-20 -mb-32">
          <ContactForm />
        </div>
      </section>

      {/* 11. Footer */}
      <footer className="bg-slate-950 text-slate-400 pt-48 pb-16 border-t border-slate-900">
        <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-4 gap-12">
          <div>
            <div className="text-2xl font-serif tracking-widest text-white mb-6">STARS<span className="text-amber-600">.</span></div>
            <p className="font-light text-sm">L'excellence du propre en Suisse. Services dédiés aux professionnels et particuliers exigeants.</p>
          </div>
          <div>
            <h4 className="text-white font-bold tracking-wider mb-6">SERVICES</h4>
            <ul className="space-y-3 text-sm font-light">
              <li><a href="#" className="hover:text-amber-500 transition-colors">Chalets de luxe</a></li>
              <li><a href="#" className="hover:text-amber-500 transition-colors">Hôtellerie</a></li>
              <li><a href="#" className="hover:text-amber-500 transition-colors">Fin de chantier</a></li>
            </ul>
          </div>
          <div>
            <h4 className="text-white font-bold tracking-wider mb-6">CONTACT</h4>
            <ul className="space-y-3 text-sm font-light">
              <li className="flex items-center"><Phone className="w-4 h-4 mr-3" /> +41 00 000 00 00</li>
              <li className="flex items-center"><Mail className="w-4 h-4 mr-3" /> contact@starsnettoyage.ch</li>
              <li className="flex items-center"><MapPin className="w-4 h-4 mr-3" /> Veysonnaz, Valais, Suisse</li>
            </ul>
          </div>
          <div>
            <h4 className="text-white font-bold tracking-wider mb-6">LÉGAL</h4>
            <ul className="space-y-3 text-sm font-light">
              <li><a href="#" className="hover:text-amber-500 transition-colors">Mentions légales</a></li>
              <li><a href="#" className="hover:text-amber-500 transition-colors">Politique de confidentialité</a></li>
            </ul>
          </div>
        </div>
        <div className="max-w-7xl mx-auto px-6 mt-16 pt-8 border-t border-slate-800 text-xs font-light text-center md:text-left flex flex-col md:flex-row justify-between">
          <p>© 2026 Stars Nettoyage. Tous droits réservés.</p>
          <p className="mt-2 md:mt-0">Design & Code par Impulso Eficiente</p>
        </div>
      </footer>
    </div>
  );
}