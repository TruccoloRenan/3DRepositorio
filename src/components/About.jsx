import React from 'react'
import { Tilt } from 'react-tilt';
import { motion } from 'framer-motion';
import { styles } from '../style';
import { services } from '../constants';
import { fadeIn, textVariant } from '../utils/motion';

const ServiceCard = ({ index, title, icon }) => {
  return (
    <Tilt className="xs:w-[250px] w-full">
      <motion.div
        variants={fadeIn("right", "spring", 0.5 * index, 0.75)}
        className="w-full green-pink-gradient p-[1px] rounded=[20px] shadow-card"
      >
        <div
        options={{
          max:45,
          scale: 1,
          speed: 450
        }}
        className='bg-tertiary rounded-[20px] py-5 px-12 min-h-[280px] flex justify-evenly items-center flex-col'
        >
          <img src={icon} alt={title} className='w-16 h-16 object-contain' />
          <h3 className='text-white text-[20px] font-bold text-center' >
            {title}
          </h3>
        </div>
      </motion.div>
    </Tilt>
  )
}

const About = () => {
  return (
    <>
      <motion.div variants={textVariant()}>
        <p className={styles.sectionSubText}>Introduction</p>
        <h2 className={styles.sectionHeadText}>Overview.</h2>
      </motion.div>
      <motion.p 
      variants={fadeIn("", ", 0.1, 1")}
      className='mt-4 text-secondary text-[17px] max-w-3xl leading-[30px]'
      >
        Olá! 🌟

        Sou um entusiasta do mundo da tecnologia, um Desenvolvedor Full Stack Pleno com uma paixão vibrante por criar e inovar em back-end e front-end. Minha jornada com Node.js e React tem sido uma aventura em otimização de processos e na criação de soluções de software que não apenas funcionam bem, mas também encantam. Adoro a energia de ambientes dinâmicos onde posso trazer novas ideias à vida!

        Minha formação é uma mistura de teoria e prática: a Engenharia de Software e Análise e Desenvolvimento de Sistemas. Ah, e meu inglês fluente me abre portas para projetos globais e equipes multiculturais.

        Minha experiência profissional é uma colcha de retalhos colorida e impressionante: desde aprimorar front-ends na Fretefy até reconstruir sistemas na Tech Mahindra, cada projeto foi um novo aprendizado. No MatrixCargo, no SóCarrão.com e na ApoioEcolimp, mergulhei de cabeça no desenvolvimento de software, jogando com Angular, React, Next.js e Node.js para criar algo especial.

        Falando de habilidades técnicas, gosto de pensar em mim como um 'caixa de ferramentas' completa: CSS, HTML, TypeScript, Next.js, Bootstrap, React, JavaScript, Angular, SCSS, VueJS no front-end; e C#, Python, Node.js no back-end, sem esquecer dos bancos de dados SQL e Repository. Estou sempre aprendendo e me aprimorando, como no Pacote Full Stack Master da Dani Code.

        Estou super animado para conectar com profissionais e empresas que buscam um desenvolvedor cheio de ideias e prontidão para transformar desafios em oportunidades. Vamos juntos navegar no empolgante mundo do desenvolvimento Full Stack e fazer a diferença com soluções inovadoras em software! Vem comigo nessa jornada tecnológica? 👨‍💻✨
      </motion.p>

      <div className='mt-20 flex flex-wrap gap-10'>
      {services.map((service, index) => (
        <ServiceCard key={service.title} index={index} {...service} />
      ))}
      </div>
    </>
  )
}

export default About