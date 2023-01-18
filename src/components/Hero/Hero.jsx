import css from './Hero.module.scss';

const Hero = () => {
  return (
    <section className={css.wrapper}>
      <div className={`innerWidth ${css.container}`}>
        {/* upper text */}
        <div className={css.upperElements}>
          <span>
            I'm <br /> Portfolio
          </span>
          <span>
            I build a beautiful websites
            <br /> And I love what I do
          </span>
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
            <img src='./certificate.png' alt='cetrificate image' />
            <span>CERTIFIED</span>
            <span>FRONT-END DEVELOPER</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
