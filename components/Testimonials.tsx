'use client'

import { motion } from 'framer-motion'
import { Quote } from 'lucide-react'
import { useLanguage } from '@/context/LanguageContext'

const Testimonials = () => {
  const { t } = useLanguage()

  const testimonials = [
    {
      quote: t(
        "Fabien a parfaitement géré la post-production de Six Jours avec un grand professionnalisme et un calme à toute épreuve. Sa gestion rigoureuse des budgets, son attention constante aux détails et sa grande bienveillance avec les équipes ont été un atout précieux. J'ai été très heureux de travailler avec Fabien, et j'ai hâte de faire un prochain film ensemble.",
        "Fabien perfectly managed the post-production of Six Days with great professionalism and unshakeable calm. His rigorous budget management, constant attention to detail and great kindness with the teams were a precious asset. I was very happy to work with Fabien, and I can't wait to make another film together."
      ),
      author: "Nicolas ROLLAND",
      role: t("Producteur SND", "Producer SND"),
    },
    {
      quote: t(
        "Nous avons travaillé sur de nombreux films avec Fabien (Brûle le Sang, Pulse, ...) et nous avons toujours pu apprécier son investissement sans faille, sa technicité et sa capacité à nous obtenir les meilleurs deals auprès des prestataires !",
        "We have worked on many films with Fabien (In the Name of Blood, Pulse, ...) and we have always appreciated his unwavering commitment, his technical skills and his ability to get us the best deals from vendors!"
      ),
      author: "Sébastien AUBERT",
      role: t("Producteur Adastra Films", "Producer Adastra Films"),
    },
    {
      quote: t(
        "Je connaissais Fabien depuis longtemps mais nous n'avions jamais travaillé ensemble. Ce fut un plaisir de travailler avec lui sur Grand Ciel. Sa rigueur, son sérieux et son calme ont été des atouts décisifs pour mener à bien une post-production compliquée impliquant de nombreux allers retours entre les VFX, le montage image et la post-production son. Ce sera donc avec plaisir que nous travaillerons à nouveau avec Fabien.",
        "I had known Fabien for a long time but we had never worked together. It was a pleasure to work with him on The Site. His rigor, seriousness and calm were decisive assets to successfully complete a complicated post-production involving many back and forths between VFX, picture editing and sound post-production. It will therefore be with pleasure that we will work with Fabien again."
      ),
      author: "Clément DUBOIN",
      role: t("Producteur Good Fortune Films", "Producer Good Fortune Films"),
    },
    {
      quote: t(
        "Nous avons travaillé avec Fabien sur de nombreux films, principalement des coproductions avec l'international où la post-production est souvent répartie dans plusieurs pays et les pratiques diffèrent. Fabien nous a accompagné du début jusqu'à la fin de ces post-productions, parfois bien en amont du tournage afin de tout coordonner, de s'assurer de la fluidité des étapes clefs et de parer au mieux à toutes sortes d'imprévus. C'est un plaisir de travailler avec lui.",
        "We have worked with Fabien on many films, mainly international co-productions where post-production is often spread across several countries and practices differ. Fabien accompanied us from the beginning to the end of these post-productions, sometimes well before shooting in order to coordinate everything, ensure the fluidity of key stages and best deal with all kinds of unforeseen events. It's a pleasure to work with him."
      ),
      author: "Claire CHARLES-GERVAIS et Louise BELLICAUD",
      role: t("Productrices In Vivo Films", "Producers In Vivo Films"),
    },
    {
      quote: t(
        "Super collaboration. Un plaisir de travailler avec Fabien",
        "Great collaboration. A pleasure to work with Fabien."
      ),
      author: "Jean-Christophe Meurisse",
      role: t("Réalisateur", "Director"),
    },
    {
      quote: t(
        "J'ai pu collaborer avec Fabien lors de la post-production de mon long-métrage Brûle le sang, et de cette collaboration est surtout née une amitié qui dure jusqu'à aujourd'hui. Brûle le sang était mon premier long-métrage et Fabien a su parfaitement me créer un environnement professionnel où je me sentais soutenu, accompagné et surtout protégé. Notre collaboration a été très fructueuse. Je le recommande vivement : un bon gars qui sait ce qu'il dit et ne lâche rien.",
        "I was able to collaborate with Fabien during the post-production of my feature film In the Name of Blood, and from this collaboration was born above all a friendship that lasts until today. In the Name of Blood was my first feature film and Fabien knew exactly how to create a professional environment where I felt supported, accompanied and above all protected. Our collaboration was very fruitful. I highly recommend him: a good guy who knows what he's talking about and never gives up."
      ),
      author: "Akaki POKHADZE",
      role: t("Réalisateur", "Director"),
    },
  ]

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
      id="testimonials" 
      className="py-12 sm:py-16 md:py-20 px-4 sm:px-6 md:px-12 lg:px-20 bg-theme-secondary relative overflow-hidden transition-colors duration-300"
      aria-labelledby="testimonials-title"
    >
      <div className="max-w-5xl mx-auto relative z-10">
        <motion.header
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: [0.25, 0.46, 0.45, 0.94] }}
          viewport={{ once: true }}
          className="text-center mb-8 sm:mb-10"
        >
          <h2 id="testimonials-title" className="text-3xl sm:text-4xl md:text-5xl font-light mb-4 tracking-wide">
            <span className="text-cinema-gold">{t('Témoignages', 'Testimonials')}</span>
          </h2>
          <div className="h-px w-24 bg-gradient-to-r from-transparent via-cinema-gold to-transparent mx-auto mt-4 sm:mt-6" aria-hidden="true" />
        </motion.header>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="space-y-6 sm:space-y-8"
        >
          {testimonials.map((testimonial, index) => (
            <motion.article
              key={index}
              variants={itemVariants}
              className="relative p-6 sm:p-8 bg-theme-card border border-theme rounded-sm"
            >
              <Quote className="absolute top-4 left-4 w-8 h-8 text-cinema-gold/20" aria-hidden="true" />
              <blockquote className="relative z-10">
                <p className="text-theme-secondary text-sm sm:text-base leading-relaxed italic pl-6 sm:pl-8">
                  « {testimonial.quote} »
                </p>
                <footer className="mt-4 pl-6 sm:pl-8">
                  <cite className="not-italic">
                    <span className="text-cinema-gold font-medium">{testimonial.author}</span>
                    <span className="text-theme-muted text-sm"> — {testimonial.role}</span>
                  </cite>
                </footer>
              </blockquote>
            </motion.article>
          ))}
        </motion.div>
      </div>
    </section>
  )
}

export default Testimonials






