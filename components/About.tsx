'use client'

import { motion } from 'framer-motion'
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
      className="py-8 sm:py-12 md:py-14 px-4 sm:px-6 md:px-12 lg:px-20 bg-theme-primary relative overflow-hidden transition-colors duration-300"
      aria-labelledby="about-title"
    >
      <div className="max-w-5xl mx-auto relative z-10">
        <motion.header
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: [0.25, 0.46, 0.45, 0.94] }}
          viewport={{ once: true }}
          className="text-center mb-4 sm:mb-6"
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
            className="lg:col-span-8 space-y-6 sm:space-y-8 text-theme-secondary text-base sm:text-lg leading-relaxed font-light px-2 sm:px-0"
          >
            <motion.p variants={itemVariants} className="font-medium">
              {t(
                "Moi, c'est Fabien, directeur de post-production depuis 2016.",
                "I'm Fabien, post-production supervisor since 2016."
              )}
            </motion.p>
            <motion.p variants={itemVariants}>
              {t(
                "Pour comprendre comment j'en suis arrivé là, il faut rembobiner un peu.",
                "To understand how I got here, we need to rewind a bit."
              )}
            </motion.p>

            <motion.div variants={itemVariants}>
              <p>
                <span className="text-cinema-gold">{t('Genèse d\'un pirate repenti...', 'Genesis of a reformed pirate...')}</span>{' '}
                {t(
                  "À la maison, le cinéma n'avait pas sa place. On parlait surtout d'informatique, de peinture et de sport. Et à la télé, le programme, c'était Thalassa !",
                  "At home, cinema had no place. We mostly talked about computers, painting and sports. And on TV, the program was Thalassa!"
                )}
              </p>
              <p className="mt-3">
                {t(
                  "Alors, pour voir des films, il a fallu ruser.",
                  "So, to watch movies, I had to be creative."
                )}
              </p>
              <p className="mt-3">
                {t(
                  "C'est la nuit, dans ma chambre d'ado, que je me suis construit ma propre culture. Affiches aux murs (dont une version XXL du Cinquième Élément), ordinateur à plein régime et disques durs remplis de films : J'étais un \"binge-watcher\" avant l'heure.",
                  "It was at night, in my teenage bedroom, that I built my own culture. Posters on the walls (including an XXL version of The Fifth Element), computer running at full speed and hard drives full of movies: I was a binge-watcher before its time."
                )}
              </p>
              <p className="mt-3">
                {t(
                  "Je vous rassure, j'ai depuis largement remboursé ma dette. Mon appartement déborde de Blu-ray et DVD ; j'ai mon pass cinéma et je collectionne les abonnements aux plateformes.",
                  "Don't worry, I've since paid off my debt. My apartment is overflowing with Blu-rays and DVDs; I have my cinema pass and collect platform subscriptions."
                )}
              </p>
            </motion.div>

            <motion.div variants={itemVariants}>
              <p>
                <span className="text-cinema-gold">{t('Le déclic...', 'The turning point...')}</span>{' '}
                {t(
                  "Dès que j'ai réalisé qu'il existait un monde professionnel derrière cette passion, contre l'avis de mes parents, j'ai foncé dans l'audiovisuel : d'abord en marketing chez un distributeur, puis comme commercial dans un laboratoire de post-production.",
                  "As soon as I realized there was a professional world behind this passion, against my parents' advice, I dove into the audiovisual industry: first in marketing at a distributor, then as a sales rep at a post-production lab."
                )}
              </p>
              <p className="mt-3">
                {t(
                  "Ces années ont été déterminantes. De rendez-vous en rendez-vous, de festivals en festivals, j'ai découvert les cinémas du monde et affiné ma compréhension du marché et de ses enjeux. Être au coeur d'un labo m'a aussi permis de maîtriser concrètement les étapes de la post-production : workflows, contraintes techniques, coûts, délais.",
                  "These years were decisive. From meeting to meeting, from festival to festival, I discovered world cinema and refined my understanding of the market and its challenges. Being at the heart of a lab also allowed me to master the stages of post-production: workflows, technical constraints, costs, deadlines."
                )}
              </p>
            </motion.div>

            <motion.div variants={itemVariants}>
              <p>
                <span className="text-cinema-gold">{t('Directeur de post-production...', 'Post-production supervisor...')}</span>{' '}
                {t(
                  "Et un jour, tout s'est aligné. Mes expériences, mes compétences, mes envies... c'est devenu limpide : accompagner la fabrication d'un film du début à la fin, voilà ce que je voulais faire ! Le métier de directeur de post-production s'est imposé comme une évidence.",
                  "And one day, everything aligned. My experiences, my skills, my desires... it became crystal clear: supporting the making of a film from start to finish, that's what I wanted to do! The job of post-production supervisor became obvious."
                )}
              </p>
              <p className="mt-3">
                {t(
                  "Je me suis lancé en indépendant et grâce à la confiance de plusieurs producteurs, j'ai enchainé les projets, l'aventure commençait.",
                  "I went freelance and thanks to the trust of several producers, I chained projects together, the adventure was beginning."
                )}
              </p>
              <p className="mt-3">
                {t(
                  "De projo de montage en projo de montage, de problèmes en solutions, de brainstorming en brainstorming, j'ai acquis une sérénité solide face aux projets complexes et une vraie capacité d'anticipation.",
                  "From screening to screening, from problems to solutions, from brainstorming to brainstorming, I acquired a solid serenity in the face of complex projects and a real capacity for anticipation."
                )}
              </p>
            </motion.div>

            <motion.div variants={itemVariants}>
              <p>
                <span className="text-cinema-gold">{t('Ma mission aujourd\'hui...', 'My mission today...')}</span>{' '}
                {t(
                  "Ce qui me passionne, ce sont les équipes. Chaque projet réunit des personnalités, des talents et des méthodes très différentes, avec leurs enjeux techniques, leurs contraintes de planning et de budget. Ma mission, c'est d'absorber cette complexité et de créer un cadre clair, rassurant et efficace où chacun peut donner le meilleur.",
                  "What I'm passionate about is teams. Each project brings together very different personalities, talents and methods, with their technical challenges, scheduling and budget constraints. My mission is to absorb this complexity and create a clear, reassuring and effective framework where everyone can give their best."
                )}
              </p>
              <p className="mt-3">
                {t(
                  "Transformer ce chaos apparent en un parcours fluide : c'est là que je suis le plus utile, et c'est là que je m'épanouis.",
                  "Transforming this apparent chaos into a smooth journey: that's where I'm most useful, and that's where I thrive."
                )}
              </p>
              <p className="mt-3">
                {t(
                  "On fait même appel à moi pour transmettre cette expérience et donner des cours.",
                  "I'm even called upon to pass on this experience and teach."
                )}
              </p>
              <p className="mt-3">
                {t(
                  "Ça y est, mes parents sont fiers !",
                  "That's it, my parents are proud!"
                )}
              </p>
            </motion.div>

            <motion.div variants={itemVariants}>
              <p>
                <span className="text-cinema-gold">{t('Le sens du timing...', 'The sense of timing...')}</span>{' '}
                {t(
                  "L'audiovisuel est aussi intimement lié à ma vie. J'ai rencontré ma femme lors d'une projection presse. Quelques années plus tard, dans le train qui quittait le Festival de Cannes, elle m'appelait pour me dire que notre fille arrivait plus tôt que prévu. Je suis arrivé pile à l'heure pour vivre ce moment !",
                  "The audiovisual world is also intimately linked to my life. I met my wife at a press screening. A few years later, on the train leaving the Cannes Film Festival, she called me to tell me our daughter was arriving earlier than expected. I arrived right on time to experience this moment!"
                )}
              </p>
              <p className="mt-3">
                {t(
                  "Comme quoi, en post-prod comme dans la vie, tout est une question de timing.",
                  "As they say, in post-production as in life, it's all about timing."
                )}
              </p>
            </motion.div>
        </motion.div>
      </div>
    </section>
  )
}

export default About
