import React from 'react'
import  Tilt  from 'react-parallax-tilt'
import { motion } from 'framer-motion';

import { styles } from '../styles';
import { services } from '../constants';
import { fadeIn, textVariant } from '../utils/motion';
import { SectionWrapper } from '../hoc';

const ServiceCard = ({ index, title, icon}) =>{
  return(
    <Tilt className='xs:w-[250px] w-full'>
      <motion.div
        variants={fadeIn("right", "spring", 0.5 * index, 0.75)}
        className='w-full green-pink-gradient p-[1px] rounded-[20px]  shadow-card'
      >
        <div
          options={{
            max: 45,
            scale:1,
            speed: 450
          }}
          className='bg-tertiary rounded-[20px] py-5 px-12 min-h-[280px] flex justify-evenly items-center flex-col'
        >
          <img src={icon} alt={title}
            className='w-16 h-16 object-contain'
          />
          <h3 className="text-white text-[20px] font-bold text-center">
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
        <p className={styles.sectionSubText}>
          Introduction</p>
        <h2 className={styles.sectionHeadText}>
          Overview</h2>
      </motion.div>

      <motion.p
        variants={fadeIn("", "", 0.1, 1)}
        className='mt-4 text-secondary text-[17px] max-w-3xl leading-[30px]'
      >
Greetings! I’m a software and web developer passionate about designing and building reliable, interactive, and user-friendly applications. I have hands-on experience in both front-end and back-end development, with a strong foundation in Java, C, and web technologies. My expertise includes creating desktop applications and web applications that meet the unique needs of businesses and individuals.

With a focus on clean code, efficient problem-solving, and seamless functionality, I strive to deliver solutions that provide real value. I’m also committed to continuous learning, staying updated with the latest tools and technologies to enhance my development process. If you’re looking for someone dedicated to crafting impactful digital experiences, you’re in the right place!
      </motion.p>

      <div className="mt-20 flex flex-wrap gap-10">
        {services.map((service, index) =>(
          <ServiceCard key={service.title} index={index} {...service}/>
        ))}
      </div>
    </>
  )
}

export default SectionWrapper(About, "about")