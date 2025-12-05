'use client'

import { Mail, Phone, MapPin, Linkedin } from 'lucide-react'

const Footer = () => {
  const currentYear = new Date().getFullYear()

  return (
    <footer id="contact" className="bg-cinema-black border-t border-white/10">
      <div className="max-w-7xl mx-auto px-6 md:px-12 py-16">
        <div className="grid md:grid-cols-3 gap-12 mb-12">
          {/* Contact */}
          <div>
            <h3 className="text-lg font-light mb-6 text-cinema-gold tracking-wider">Contact</h3>
            <div className="space-y-4">
              <a
                href="mailto:fabien.trampont@gmail.com"
                className="flex items-center gap-3 text-white/70 hover:text-cinema-gold transition-colors text-sm"
              >
                <Mail size={18} />
                <span>fabien.trampont@gmail.com</span>
              </a>
              <a
                href="tel:0621152533"
                className="flex items-center gap-3 text-white/70 hover:text-cinema-gold transition-colors text-sm"
              >
                <Phone size={18} />
                <span>06 21 15 25 33</span>
              </a>
              <div className="flex items-center gap-3 text-white/70 text-sm">
                <MapPin size={18} />
                <span>Paris</span>
              </div>
            </div>
          </div>

          {/* Navigation */}
          <div>
            <h3 className="text-lg font-light mb-6 text-cinema-gold tracking-wider">Navigation</h3>
            <nav className="space-y-3">
              <a
                href="#projects"
                className="block text-white/70 hover:text-cinema-gold transition-colors text-sm"
              >
                Portfolio
              </a>
              <a
                href="#about"
                className="block text-white/70 hover:text-cinema-gold transition-colors text-sm"
              >
                Qui je suis / Ma vision
              </a>
              <a
                href="#contact"
                className="block text-white/70 hover:text-cinema-gold transition-colors text-sm"
              >
                Contact
              </a>
            </nav>
          </div>

          {/* Liens utiles */}
          <div>
            <h3 className="text-lg font-light mb-6 text-cinema-gold tracking-wider">Liens utiles</h3>
            <div className="space-y-4">
              <a
                href="https://www.imdb.com/fr/name/nm8268744/"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 text-white/70 hover:text-cinema-gold transition-colors text-sm"
              >
                <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M14.31 9.588v.005c-.077-.048-.227-.07-.42-.07v4.815c.27 0 .44-.06.5-.165.062-.105.09-.39.09-.855v-2.735c0-.345-.008-.59-.022-.735-.016-.145-.07-.24-.15-.26zM22 2v20H2V2h20zM4.05 14.94V9.06h1.71v5.88H4.05zm5.2 0h-1.13l-.13-.48c-.37.37-.89.55-1.55.55-.44 0-.75-.15-.93-.45-.17-.3-.26-.73-.26-1.3v-3.2c0-.5.13-.88.38-1.15.25-.27.65-.4 1.2-.4.45 0 .84.1 1.17.3v-1.39h1.25v7.52zm1.72-7.12h2.06c.68 0 1.18.12 1.5.36.32.24.49.68.49 1.3v3.5c0 .63-.18 1.07-.54 1.32-.36.25-.93.37-1.71.37H10.97V7.82zm4.64 7.12h-1.25v-7.52h1.25v7.52zm5.03-1.68c-.14.43-.39.75-.75.96-.36.21-.82.32-1.38.32-.56 0-1.02-.11-1.38-.32-.36-.21-.63-.53-.81-.96-.18-.43-.27-.99-.27-1.68v-1.23c0-.69.09-1.25.27-1.68.18-.43.45-.75.81-.96.36-.21.82-.32 1.38-.32.56 0 1.02.11 1.38.32.36.21.61.53.75.96.14.43.21.99.21 1.68v1.23c0 .69-.07 1.25-.21 1.68z"/>
                </svg>
                <span>IMDb</span>
              </a>
              <a
                href="https://www.linkedin.com/in/fabien-trampont-43811967/"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 text-white/70 hover:text-cinema-gold transition-colors text-sm"
              >
                <Linkedin size={18} />
                <span>LinkedIn</span>
              </a>
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="pt-8 border-t border-white/10 text-center text-white/40 text-sm">
          <p>© {currentYear} Fabien Trampont — Directeur de Post-Production</p>
        </div>
      </div>
    </footer>
  )
}

export default Footer
