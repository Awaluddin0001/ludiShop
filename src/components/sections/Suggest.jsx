import "../../assets/scss/Suggest.scss";
import CardItem from "../CardItem";
import cardIm1 from "../../assets/images/shoes1.png";
import cardIm2 from "../../assets/images/clothes1.png";
import cardIm3 from "../../assets/images/pants1.png";

export default function Suggest() {
  return (
    <section className="section-Suggest">
      <div className="container12">
        <h2 className="titleSection-size2">You may be interested in</h2>
        <div className="section-Suggest_cards">
          <CardItem imgSrc={cardIm1} />
          <CardItem imgSrc={cardIm2} />
          <CardItem imgSrc={cardIm3} />
        </div>
      </div>
    </section>
  );
}
