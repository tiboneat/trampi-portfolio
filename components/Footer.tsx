'use client'

import { Mail, Phone, MapPin, Linkedin, Instagram } from 'lucide-react'

const Footer = () => {
  const currentYear = new Date().getFullYear()

  return (
    <footer id="contact" className="bg-cinema-gray border-t border-cinema-anthracite">
      <div className="container-custom px-6 md:px-12 py-16">
        <div className="grid md:grid-cols-3 gap-12 mb-12">
          {/* Contact */}
          <div>
            <h3 className="text-xl font-bold mb-6 text-cinema-gold">Contact</h3>
            <div className="space-y-4">
              <a
                href="mailto:fabien.trampont@gmail.com"
                className="flex items-center gap-3 text-white/80 hover:text-cinema-gold transition-colors"
              >
                <Mail size={20} />
                <span>fabien.trampont@gmail.com</span>
              </a>
              <a
                href="tel:0621152533"
                className="flex items-center gap-3 text-white/80 hover:text-cinema-gold transition-colors"
              >
                <Phone size={20} />
                <span>06 21 15 25 33</span>
              </a>
              <div className="flex items-start gap-3 text-white/80">
                <MapPin size={20} className="flex-shrink-0 mt-1" />
                <span>11 Boulevard de Clichy<br />75009 Paris</span>
              </div>
            </div>
          </div>

          {/* Navigation */}
          <div>
            <h3 className="text-xl font-bold mb-6 text-cinema-gold">Navigation</h3>
            <nav className="space-y-3">
              {['À propos', 'Projets', 'Parcours', 'Formation'].map((item) => (
                <a
                  key={item}
                  href={`#${item.toLowerCase().replace(' ', '-').replace('à', 'a')}`}
                  className="block text-white/80 hover:text-cinema-gold transition-colors"
                >
                  {item}
                </a>
              ))}
            </nav>
          </div>

          {/* À propos */}
          <div>
            <h3 className="text-xl font-bold mb-6 text-cinema-gold">Fabien Trampont</h3>
            <p className="text-white/80 mb-6">
              Directeur de post-production spécialisé dans les films d'auteur 
              et séries à haute valeur artistique.
            </p>
            {/* <div className="flex gap-4">
              <a
                href="#"
                className="w-10 h-10 rounded-full bg-cinema-anthracite flex items-center justify-center hover:bg-cinema-gold hover:text-cinema-black transition-all"
              >
                <Linkedin size={20} />
              </a>
              <a
                href="#"
                className="w-10 h-10 rounded-full bg-cinema-anthracite flex items-center justify-center hover:bg-cinema-gold hover:text-cinema-black transition-all"
              >
                <Instagram size={20} />
              </a>
            </div> */}
          </div>
        </div>

        {/* Copyright */}
        <div className="pt-8 border-t border-cinema-anthracite text-center text-white/60 text-sm">
          <p>© {currentYear} Fabien Trampont. Tous droits réservés.</p>
          <p className="mt-2">Directeur de Post-Production</p>
        </div>
      </div>
    </footer>
  )
}

export default Footer

