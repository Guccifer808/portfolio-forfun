import css from './Hero.module.scss';
import { motion } from 'framer-motion';
import { fadeIn, staggerContainer } from './../../utils/motion';

const Hero = () => {
  return (
    <section className={`paddings ${css.wrapper}`}>
      <motion.div
        variants={staggerContainer}
        initial='hidden'
        whileInView='show'
        viewport={{ once: false, amount: 0.25 }}
        className={`innerWidth ${css.container}`}
      >
        {/* upper text */}
        <div className={css.upperElements}>
          <motion.span
            variants={fadeIn('right', 'tween', 0.2, 1)}
            className='primaryText'
          >
            I'm <br /> Portfolio
          </motion.span>
          <span>
            I build a beautiful websites
            <br /> And I love what I do
          </span>
        </div>
        {/* middle person div */}

        <div className={css.person}>
          <img src='./person.png' alt='person' />
        </div>

        {/* lower text */}
        <div className={css.lowerElements}>
          <div className={css.experience}>
            <div className='primaryText'>5</div>
            <div className='secondaryText'>
              <div>Years of</div>
              <div>Experience</div>
            </div>
          </div>
          <div className={css.certificate}>
            <img src='./certificate.png' alt='cetrificate' />
            <span>CERTIFIED</span>
            <span>FRONT-END DEVELOPER</span>
          </div>
        </div>
      </motion.div>
    </section>
  );
};

export default Hero;
