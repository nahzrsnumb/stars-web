import React from 'react';
import { Menu, ChevronRight, Star, CheckCircle, MapPin, Phone, Mail, Clock, ShieldCheck, Sparkles } from 'lucide-react';
import ContactForm from '../components/ContactForm';
import { client } from '../sanity/lib/client';

export default async function StarsNettoyageLanding() {
  // 1. LA CONSULTA (GROQ): Buscamos los casos de éxito/referencias
  const properties = await client.fetch(`*[_type == "property"]{
    _id,
    name,
    description,
    price,
    "imageUrl": mainImage.asset->url
  }`);

  return (
    <div className="min-h-screen bg-slate-50 font-sans text-slate-900">
      
      {/* 1. Navbar */}
      <nav className="fixed w-full z-50 bg-white/80 backdrop-blur-md border-b border-slate-100 transition-all duration-300">
        <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
          <div className="text-2xl font-serif tracking-widest text-slate-900">STARS<span className="text-amber-600">.</span></div>
          <div className="hidden md:flex space-x-8 text-sm font-medium tracking-wide">
            <a href="#about-us" className="hover:text-amber-600 transition-colors">Qui sommes-nous</a>
            <a href="#services" className="hover:text-amber-600 transition-colors">Services</a>
            <a href="#references" className="hover:text-amber-600 transition-colors">Références</a>
          </div>
          <div className="flex items-center space-x-6">
            <a href="tel:+41798245911" className="hidden md:flex items-center text-sm font-medium hover:text-amber-600 transition-colors">
              <Phone className="w-4 h-4 mr-2" />
              +41 79 824 59 11
            </a>
            <button className="hidden md:block px-6 py-2.5 bg-slate-900 text-white text-sm font-medium hover:bg-slate-800 transition-all">
              Demander un devis
            </button>
            <Menu className="md:hidden w-6 h-6 text-slate-900" />
          </div>
        </div>
      </nav>

      {/* 2. Hero Section */}
      <section className="relative h-screen flex items-center justify-center bg-slate-900 overflow-hidden">
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1584622650111-993a426fbf0a?q=80&w=2070')] bg-cover bg-center opacity-30"></div>
        <div className="relative z-10 text-center px-6 max-w-4xl mx-auto mt-20">
          <h1 className="text-5xl md:text-7xl font-serif text-white mb-6 leading-tight">
            L'excellence et l'efficacité <br/><span className="text-amber-500 font-light italic">au cœur de notre métier.</span>
          </h1>
          <p className="text-lg md:text-xl text-slate-300 mb-10 font-light tracking-wide max-w-2xl mx-auto">
            Spécialisés dans le nettoyage professionnel et la conciergerie sur mesure. Nous accompagnons les entreprises et les particuliers exigeants à la recherche d'un service fiable, discret et impeccable.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <a href="#contact" className="w-full sm:w-auto px-8 py-4 bg-amber-600 text-white text-sm font-bold tracking-widest hover:bg-amber-700 transition-all text-center">
              DEMANDER UN DEVIS
            </a>
            <a href="#services" className="w-full sm:w-auto px-8 py-4 bg-transparent border border-white text-white text-sm font-bold tracking-widest hover:bg-white hover:text-slate-900 transition-all text-center">
              DÉCOUVRIR NOS SERVICES
            </a>
          </div>
        </div>
      </section>

      {/* 3. Qui Sommes-Nous */}
      <section id="about-us" className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
          <div>
            <h2 className="text-3xl md:text-4xl font-serif text-slate-900 mb-6">Qui sommes-nous ?</h2>
            <div className="w-12 h-0.5 bg-amber-600 mb-8"></div>
            <p className="text-slate-600 font-light text-lg leading-relaxed mb-6">
              <strong>Stars Nettoyages</strong> est une entreprise de services de nettoyage basée à Veysonnaz, Valais. Depuis sa création en 2021 par Rebeca González, elle s'est imposée comme une référence en matière de propreté professionnelle et de services sur mesure.
            </p>
            <p className="text-slate-600 font-light text-lg leading-relaxed mb-6">
              Nos étoiles incarnent l'alliance entre le savoir-faire professionnel et la modernité. Animés par la passion de l'excellence, nous nous engageons à offrir des prestations haut de gamme, alliant efficacité, discrétion et qualité irréprochable.
            </p>
            <div className="inline-flex items-center text-sm font-bold tracking-widest text-amber-600 uppercase">
              <MapPin className="w-4 h-4 mr-2" /> Zone principale: Valais
            </div>
          </div>
          <div className="grid grid-cols-2 gap-4">
            <img src="https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?q=80&w=1000" alt="Chalet de luxe" className="w-full h-64 object-cover rounded-sm shadow-lg mt-8" />
            <img src="https://images.unsplash.com/photo-1581578731548-c64695cc6952?q=80&w=1000" alt="Nettoyage professionnel" className="w-full h-64 object-cover rounded-sm shadow-lg" />
          </div>
        </div>
      </section>

      {/* 4. Services Oficiales */}
      <section id="services" className="py-24 bg-slate-50">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-serif text-slate-900 mb-4">Nos Services Spécialisés</h2>
            <div className="w-12 h-0.5 bg-amber-600 mx-auto"></div>
            <p className="mt-6 text-slate-500 font-light max-w-2xl mx-auto">Une gamme de services professionnels adaptés à vos exigences spécifiques. Résidentiel, commercial ou fin de chantier, nous vous offrons une propreté absolue.</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Service 1 */}
            <div className="bg-white p-10 border border-slate-100 hover:shadow-xl transition-shadow duration-300">
              <Sparkles className="w-8 h-8 text-amber-600 mb-6" strokeWidth={1.5} />
              <h3 className="text-xl font-serif mb-3">Nettoyage fin de chantier</h3>
              <p className="text-slate-500 font-light leading-relaxed mb-6">Nous garantissons que votre espace est impeccable et prêt à l'emploi. Intervention rapide, élimination des résidus de travaux et espace accueillant.</p>
              <div className="flex flex-col space-y-2 text-xs font-semibold text-slate-400 tracking-wider">
                <span className="flex items-center"><CheckCircle className="w-3 h-3 mr-2 text-amber-500" /> Élimination des résidus</span>
                <span className="flex items-center"><MapPin className="w-3 h-3 mr-2 text-slate-400" /> Valais et Vaud</span>
              </div>
            </div>

            {/* Service 2 */}
            <div className="bg-white p-10 border border-slate-100 hover:shadow-xl transition-shadow duration-300">
              <ShieldCheck className="w-8 h-8 text-amber-600 mb-6" strokeWidth={1.5} />
              <h3 className="text-xl font-serif mb-3">Nettoyage de fin de bail</h3>
              <p className="text-slate-500 font-light leading-relaxed mb-6">Remise de logement en toute tranquillité. Un nettoyage complet, rapide et fiable avec garantie de propreté pour l'état des lieux.</p>
              <div className="flex flex-col space-y-2 text-xs font-semibold text-slate-400 tracking-wider">
                <span className="flex items-center"><CheckCircle className="w-3 h-3 mr-2 text-amber-500" /> Nettoyage garanti</span>
                <span className="flex items-center"><MapPin className="w-3 h-3 mr-2 text-slate-400" /> Valais et Vaud</span>
              </div>
            </div>

            {/* Service 3 */}
            <div className="bg-white p-10 border border-slate-100 hover:shadow-xl transition-shadow duration-300">
              <Clock className="w-8 h-8 text-amber-600 mb-6" strokeWidth={1.5} />
              <h3 className="text-xl font-serif mb-3">Bureaux et Conciergerie sur mesure</h3>
              <p className="text-slate-500 font-light leading-relaxed mb-6">Espaces propres, sains et impeccables pour vos immeubles, bureaux et écoles. Une approche flexible et totalement sur mesure.</p>
              <div className="flex flex-col space-y-2 text-xs font-semibold text-slate-400 tracking-wider">
                <span className="flex items-center"><CheckCircle className="w-3 h-3 mr-2 text-amber-500" /> Flexibilité totale</span>
                <span className="flex items-center"><MapPin className="w-3 h-3 mr-2 text-slate-400" /> Valais</span>
              </div>
            </div>

            {/* Service 4 */}
            <div className="bg-white p-10 border border-slate-100 hover:shadow-xl transition-shadow duration-300">
              <Star className="w-8 h-8 text-amber-600 mb-6" strokeWidth={1.5} />
              <h3 className="text-xl font-serif mb-3">Chalets, Vacances & Airbnb</h3>
              <p className="text-slate-500 font-light leading-relaxed mb-6">Nettoyage et blanchisserie au départ des clients. Nous assurons une maison accueillante pour un séjour agréable. Forfaits personnalisés.</p>
              <div className="flex flex-col space-y-2 text-xs font-semibold text-slate-400 tracking-wider">
                <span className="flex items-center"><CheckCircle className="w-3 h-3 mr-2 text-amber-500" /> Forfaits Nettoyage et Blanchisserie</span>
                <span className="flex items-center"><MapPin className="w-3 h-3 mr-2 text-slate-400" /> Veysonnaz, Les Collons, Les Masses, Hérémence, Nendaz, Crans-Montana</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 5. SECCIÓN DINÁMICA: PORTAFOLIO DE LIMPIEZA (Sanity) */}
      <section id="references" className="py-24 bg-white border-t border-slate-100">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-serif text-slate-900 mb-4">Nos Références d'Exception</h2>
            <div className="w-12 h-0.5 bg-amber-600 mx-auto"></div>
            <p className="mt-6 text-slate-500 font-light max-w-2xl mx-auto">Découvrez quelques-uns des chantiers et chalets de luxe qui nous font confiance pour un entretien d'une propreté absolue.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {properties.map((prop: any) => (
              <div key={prop._id} className="bg-slate-50 border border-slate-100 overflow-hidden hover:shadow-xl transition-all duration-300 group flex flex-col">
                {prop.imageUrl ? (
                  <div className="h-64 overflow-hidden relative">
                    <img src={prop.imageUrl} alt={prop.name} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" />
                    {prop.price && (
                      <div className="absolute bottom-4 right-4 bg-amber-600/90 backdrop-blur-sm text-white text-xs font-bold px-4 py-2 tracking-widest uppercase">
                        {prop.price}
                      </div>
                    )}
                  </div>
                ) : (
                  <div className="h-64 bg-slate-200 flex items-center justify-center">
                    <span className="text-slate-400 text-sm tracking-widest font-bold">STARS.</span>
                  </div>
                )}
                <div className="p-8 flex-1 flex flex-col">
                  <h3 className="text-xl font-serif mb-3 text-slate-900">{prop.name}</h3>
                  <p className="text-slate-500 font-light text-sm line-clamp-3 mb-6 flex-1">{prop.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 6. Final CTA */}
      <section id="contact" className="py-24 bg-amber-600 text-center relative">
        <div className="max-w-3xl mx-auto px-6 relative z-10">
          <h2 className="text-4xl font-serif text-white mb-6">Prêt à garantir un environnement impeccable ?</h2>
          <p className="text-amber-100 mb-8">Chaque intervention est réalisée avec rigueur, respect des délais et souci du détail.</p>
        </div>
        
        <div className="relative z-20 -mb-32">
          <ContactForm />
        </div>
      </section>

      {/* 7. Footer */}
      <footer className="bg-slate-950 text-slate-400 pt-48 pb-16 border-t border-slate-900">
        <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-4 gap-12">
          <div>
            <div className="text-2xl font-serif tracking-widest text-white mb-6">STARS<span className="text-amber-600">.</span></div>
            <p className="font-light text-sm leading-relaxed">Créée en 2021, Stars Nettoyages est votre partenaire de confiance pour la propreté professionnelle et les services sur mesure en Valais.</p>
          </div>
          <div>
            <h4 className="text-white font-bold tracking-wider mb-6">SERVICES</h4>
            <ul className="space-y-3 text-sm font-light">
              <li><a href="#services" className="hover:text-amber-500 transition-colors">Fin de chantier</a></li>
              <li><a href="#services" className="hover:text-amber-500 transition-colors">Fin de bail</a></li>
              <li><a href="#services" className="hover:text-amber-500 transition-colors">Conciergerie</a></li>
              <li><a href="#services" className="hover:text-amber-500 transition-colors">Chalets & Airbnb</a></li>
            </ul>
          </div>
          <div>
            <h4 className="text-white font-bold tracking-wider mb-6">CONTACT</h4>
            <ul className="space-y-3 text-sm font-light">
              <li className="flex items-center"><Phone className="w-4 h-4 mr-3 text-amber-500" /> +41 79 824 59 11</li>
              <li className="flex items-center"><Mail className="w-4 h-4 mr-3 text-amber-500" /> contact@starsnettoyage.ch</li>
              <li className="flex items-center"><MapPin className="w-4 h-4 mr-3 text-amber-500" /> Veysonnaz, Valais, Suisse</li>
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
          <p>© 2026 Stars Nettoyages. Tous droits réservés.</p>
          <p className="mt-2 md:mt-0">Design & Code par Impulso Eficiente</p>
        </div>
      </footer>
    </div>
  );
}