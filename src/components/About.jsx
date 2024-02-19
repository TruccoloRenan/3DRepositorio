import React from 'react'
import { Tilt } from 'react-tilt';
import { motion } from 'framer-motion';
import { styles } from '../styles';
import { services } from '../constants';
import { fadeIn, textVariant } from '../utils/motion';
import { SectionWrapper } from '../hoc';

const ServiceCard = ({ index, title, icon }) => {
  return (
    <Tilt className="xs:w-[250px] w-full">
      <motion.div
        variants={fadeIn("right", "spring", 0.5 * index, 0.75)}
        className="w-full green-pink-gradient p-[1px] rounded=[20px] shadow-card"
      >
        <div
          options={{
            max: 45,
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
        Hello! 🌟

        I am an enthusiast in the world of technology, a Full Stack Developer with a vibrant passion for creating and innovating in back-end and front-end. My journey with Node.js and React has been an adventure in process optimization and creating software solutions that not only work well, but also delight. I love the energy of dynamic environments where I can bring new ideas to life!

        My training is a mix of theory and practice: Software Engineering and Systems Analysis and Development. Oh, and my fluent English opens doors for me to global projects and multicultural teams.

        My professional experience is a colorful and impressive patchwork: from improving front-ends at Fretefy to rebuilding systems at Tech Mahindra, each project was a new learning experience. At MatrixCargo, SóCarrão.com and ApoioEcolimp, I dove headfirst into software development, playing with Angular, React, Next.js and Node.js to create something special.

        Speaking of technical skills, I like to think of myself as a complete 'toolbox': CSS, HTML, TypeScript, Next.js, Bootstrap, React, JavaScript, Angular, SCSS, VueJS on the front end; and C#, Python, Node.js on the back-end, without forgetting the SQL and Repository databases. I'm always learning and improving myself, like Dani Code's Full Stack Master Package.

        I'm super excited to connect with professionals and companies looking for a developer full of ideas and readiness to transform challenges into opportunities. Let's navigate the exciting world of Full Stack development together and make a difference with innovative software solutions! Are you coming with me on this technological journey? 👨‍💻✨
      </motion.p>

      <div className='mt-20 flex flex-wrap gap-10'>
        {services.map((service, index) => (
          <ServiceCard key={service.title} index={index} {...service} />
        ))}
      </div>
    </>
  )
}

export default SectionWrapper(About, "about")