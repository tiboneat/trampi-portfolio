'use client'

import { motion } from 'framer-motion'
import { Mail } from 'lucide-react'
import { useLanguage } from '@/context/LanguageContext'

const About = () => {
  const { t } = useLanguage()

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.1,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.7,
        ease: [0.25, 0.46, 0.45, 0.94],
      },
    },
  }

  return (
    <section 
      id="about" 
      className="py-12 sm:py-16 md:py-20 px-4 sm:px-6 md:px-12 lg:px-20 bg-cinema-black dark:bg-cinema-black light:bg-light-bg relative overflow-hidden transition-colors duration-300"
      aria-labelledby="about-title"
    >
      <div className="max-w-5xl mx-auto relative z-10">
        <motion.header
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: [0.25, 0.46, 0.45, 0.94] }}
          viewport={{ once: true }}
          className="text-center mb-6 sm:mb-8"
        >
          <h2 id="about-title" className="text-3xl sm:text-4xl md:text-5xl font-light mb-4 tracking-wide">
            <span className="text-cinema-gold">{t('Qui je suis', 'About me')}</span>
          </h2>
          <div className="h-px w-24 bg-gradient-to-r from-transparent via-cinema-gold to-transparent mx-auto mt-4 sm:mt-6" aria-hidden="true" />
        </motion.header>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start">
          {/* Photo */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: [0.25, 0.46, 0.45, 0.94] }}
            viewport={{ once: true }}
            className="lg:col-span-4 flex justify-center lg:justify-start"
          >
            <div className="relative">
              <div className="w-48 h-60 sm:w-56 sm:h-72 lg:w-64 lg:h-80 overflow-hidden rounded-sm border border-cinema-gold/30">
                <img
                  src="/fabien-trampont.jpg"
                  alt="Fabien Trampont - Directeur de Post-Production"
                  className="w-full h-full object-cover object-top grayscale hover:grayscale-0 transition-all duration-500"
                />
              </div>
              {/* Cadre décoratif */}
              <div className="absolute -bottom-3 -right-3 w-full h-full border border-cinema-gold/20 rounded-sm -z-10" aria-hidden="true" />
            </div>
          </motion.div>

          {/* Texte */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="lg:col-span-8 space-y-6 sm:space-y-8 text-white/80 dark:text-white/80 light:text-light-text text-base sm:text-lg leading-relaxed font-light px-2 sm:px-0"
          >
            <motion.p variants={itemVariants}>
              {t(
                "Moi, c'est Fabien, directeur de post-production depuis 2016. Pour comprendre comment j'en suis arrivé là, il faut rembobiner un peu.",
                "I'm Fabien, post-production supervisor since 2016. To understand how I got here, we need to rewind a bit."
              )}
            </motion.p>

            <motion.div variants={itemVariants}>
              <h3 className="text-cinema-gold font-medium mb-2">{t('Genèse d\'un pirate repenti...', 'Genesis of a reformed pirate...')}</h3>
              <p>
                {t(
                  "À la maison, le cinéma n'avait pas sa place. On parlait surtout d'informatique, de peinture et de sport. Et à la télé, le programme, c'était Thalassa !",
                  "At home, cinema had no place. We mostly talked about computers, painting and sports. And on TV, the program was Thalassa!"
                )}
              </p>
              <p className="mt-3">
                {t(
                  "Alors, pour voir des films, il a fallu ruser. C'est la nuit, dans ma chambre d'ado, que je me suis construit ma propre culture. Ma chambre était recouverte d'affiches (dont une version XXL du Cinquième Élément) et mon ordinateur tournait à plein régime. J'étais un \"binge-watcher\" avant l'heure, dévorant des disques durs entiers de films. Je vous rassure, j'ai depuis largement remboursé ma dette. Mon appartement déborde de Blu-ray et DVD ; je vais au cinéma dès que possible et je collectionne les abonnements aux plateformes.",
                  "So, to watch movies, I had to be creative. It was at night, in my teenage bedroom, that I built my own culture. My room was covered with posters (including an XXL version of The Fifth Element) and my computer was running at full speed. I was a binge-watcher before its time, devouring entire hard drives of movies. Don't worry, I've since paid off my debt. My apartment is overflowing with Blu-rays and DVDs; I go to the cinema whenever I can and collect platform subscriptions."
                )}
              </p>
            </motion.div>

            <motion.div variants={itemVariants}>
              <h3 className="text-cinema-gold font-medium mb-2">{t('Le déclic...', 'The turning point...')}</h3>
              <p>
                {t(
                  "Côté pro, j'ai mis du temps à réaliser qu'il existait un monde professionnel derrière cette passion. Contre l'avis de mes parents, j'ai foncé dans l'audiovisuel : d'abord en marketing chez un distributeur, puis comme commercial dans un laboratoire de post-production.",
                  "On the professional side, it took me a while to realize that there was a professional world behind this passion. Against my parents' advice, I dove into the audiovisual industry: first in marketing at a distributor, then as a sales rep at a post-production lab."
                )}
              </p>
              <p className="mt-3">
                {t(
                  "Et un jour, tout s'est aligné. Mes expériences, mes compétences, mes envies... c'est devenu limpide : accompagner la fabrication d'un film du début à la fin, voilà ce que je voulais faire. Le poste de directeur de post-production s'est imposé comme une évidence.",
                  "And one day, everything aligned. My experiences, my skills, my desires... it became crystal clear: supporting the making of a film from start to finish, that's what I wanted to do. The position of post-production supervisor became obvious."
                )}
              </p>
            </motion.div>

            <motion.div variants={itemVariants}>
              <h3 className="text-cinema-gold font-medium mb-2">{t('Ma mission aujourd\'hui...', 'My mission today...')}</h3>
              <p>
                {t(
                  "Ce qui me passionne, ce sont les équipes. Chaque projet réunit des personnalités, des talents et des méthodes très différentes, avec leurs enjeux techniques, leurs contraintes de planning et de budget. Ma mission, c'est d'absorber cette complexité et de créer un cadre clair, rassurant et efficace où chacun peut donner le meilleur.",
                  "What I'm passionate about is teams. Each project brings together very different personalities, talents and methods, with their technical challenges, scheduling and budget constraints. My mission is to absorb this complexity and create a clear, reassuring and effective framework where everyone can give their best."
                )}
              </p>
              <p className="mt-3 italic text-cinema-gold/80">
                {t(
                  "Transformer un processus complexe en un parcours fluide : c'est là que je suis le plus utile, et c'est là que je m'épanouis.",
                  "Transforming a complex process into a smooth journey: that's where I'm most useful, and that's where I thrive."
                )}
              </p>
            </motion.div>

            <motion.div variants={itemVariants}>
              <h3 className="text-cinema-gold font-medium mb-2">{t('Le sens du timing...', 'The sense of timing...')}</h3>
              <p>
                {t(
                  "L'audiovisuel est aussi intimement lié à ma vie. J'ai rencontré ma femme lors d'une projection presse. Quelques années plus tard, en quittant le Festival de Cannes, elle m'appelait — alors que je montais à peine dans le train — pour me dire que notre fille arrivait plus tôt que prévu. Je suis arrivé pile à l'heure. Comme quoi, en post-prod comme dans la vie, tout est une question de timing.",
                  "The audiovisual world is also intimately linked to my life. I met my wife at a press screening. A few years later, leaving the Cannes Film Festival, she called me — just as I was getting on the train — to tell me our daughter was arriving earlier than expected. I arrived right on time. As they say, in post-production as in life, it's all about timing."
                )}
              </p>
            </motion.div>
          </motion.div>
        </div>

        {/* Bouton contact */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.4, ease: [0.25, 0.46, 0.45, 0.94] }}
          viewport={{ once: true }}
          className="mt-12 sm:mt-16 text-center"
        >
          <a
            href="mailto:fabien.trampont@gmail.com?subject=Discussion%20projet"
            className="inline-flex items-center gap-2 sm:gap-3 px-6 sm:px-8 py-3 sm:py-4 bg-cinema-gold text-cinema-black font-medium tracking-wider uppercase text-xs sm:text-sm hover:bg-cinema-gold-light transition-all duration-300 min-h-[44px]"
            aria-label={t('Envoyer un email pour discuter de votre projet', 'Send an email to discuss your project')}
          >
            <Mail size={16} aria-hidden="true" />
            {t('Discutons de votre projet', "Let's discuss your project")}
          </a>
        </motion.div>
      </div>
    </section>
  )
}

export default About
