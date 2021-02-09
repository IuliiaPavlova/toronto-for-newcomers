import css from './Banner.module.scss'

const Banner = () => {
  return (
        <div className={css.banner}>
          <h2 className={css.bannerHeader}>
            What is the main purpose of your visit?
          </h2>
        </div>
  );
}

export default Banner;