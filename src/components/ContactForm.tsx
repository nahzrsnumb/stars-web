"use client";

import React, { useState } from 'react';
import { ArrowRight } from 'lucide-react';

export default function ContactForm() {
  const [isSubmitting, setIsSubmitting] = useState(false);

  // Esta función es el "cerebro" que luego conectaremos a Odoo o Manychat
  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Aquí irá la lógica del Webhook en el futuro. 
    // Por ahora, simulamos una carga de 2 segundos.
    setTimeout(() => {
      alert("Demande envoyée avec succès ! Nous vous contacterons bientôt.");
      setIsSubmitting(false);
    }, 2000);
  };

  return (
    <div className="bg-white p-8 md:p-12 shadow-2xl border border-slate-100 max-w-2xl mx-auto mt-12 relative z-10">
      <h3 className="text-2xl font-serif text-slate-900 mb-2">Demander un Devis</h3>
      <p className="text-slate-500 font-light mb-8 text-sm">Recevez une proposition sur mesure en moins de 24h.</p>
      
      <form onSubmit={handleSubmit} className="space-y-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <label className="block text-xs font-bold tracking-widest text-slate-500 mb-2">NOM COMPLET</label>
            <input 
              type="text" 
              required
              className="w-full border-b border-slate-300 py-2 bg-transparent focus:outline-none focus:border-amber-600 transition-colors text-slate-900"
              placeholder="Jean Dupont"
            />
          </div>
          <div>
            <label className="block text-xs font-bold tracking-widest text-slate-500 mb-2">TÉLÉPHONE</label>
            <input 
              type="tel" 
              required
              className="w-full border-b border-slate-300 py-2 bg-transparent focus:outline-none focus:border-amber-600 transition-colors text-slate-900"
              placeholder="+41 70 000 00 00"
            />
          </div>
        </div>

        <div>
          <label className="block text-xs font-bold tracking-widest text-slate-500 mb-2">EMAIL</label>
          <input 
            type="email" 
            required
            className="w-full border-b border-slate-300 py-2 bg-transparent focus:outline-none focus:border-amber-600 transition-colors text-slate-900"
            placeholder="jean@exemple.ch"
          />
        </div>

        <div>
          <label className="block text-xs font-bold tracking-widest text-slate-500 mb-2">SERVICE SOUHAITÉ</label>
          <select className="w-full border-b border-slate-300 py-2 bg-transparent focus:outline-none focus:border-amber-600 transition-colors text-slate-500">
            <option>Entretien de Chalet de Luxe</option>
            <option>Housekeeping Hôtelier</option>
            <option>Conciergerie & Gestion</option>
            <option>Nettoyage Fin de Chantier</option>
          </select>
        </div>

        <button 
          type="submit" 
          disabled={isSubmitting}
          className="w-full py-4 bg-slate-900 text-white text-sm font-bold tracking-widest hover:bg-amber-600 transition-all flex items-center justify-center disabled:opacity-50"
        >
          {isSubmitting ? 'ENVOI EN COURS...' : 'ENVOYER LA DEMANDE'} <ArrowRight className="w-4 h-4 ml-2" />
        </button>
      </form>
    </div>
  );
}