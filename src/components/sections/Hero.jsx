import "../../assets/scss/Hero.scss";
import footageShop from "../../assets/footaheLudishop.mp4";
import myLogo from "../../assets/logo_datar.png";
import sprite from "../../assets/svg/heroIcon.svg";

function Hero() {
  return (
    <section className="section-hero">
      <video className="videoFootage" autoPlay muted loop>
        <source src={footageShop} type="video/mp4" />
      </video>

      <div className="container12">
        <div className="flexBox-column_justSpaceBetweenAlignStart margin-cornerlt_20">
          <img src={myLogo} alt="" className="logoHero" />

          <div className="flexBox-column_normalGap20">
            <h1 className="titleSection-size1">NEVER FELT BETTER</h1>
            <p className="wordStyle-subtitle_reguler1">
              FELL BEST CUSTOMER EXPERIENCE IN LUDISHOP
            </p>
            <div className="ludiShop-button_hero">
              <div className="ludiShop-button_shop">
                <svg className="ludiShop-button_icon1">
                  <use xlinkHref={`${sprite}#man`} />
                </svg>
              </div>
              <div className="ludiShop-button_shop">
                <svg className="ludiShop-button_icon1">
                  <use xlinkHref={`${sprite}#woman`} />
                </svg>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Hero;
