import "../assets/scss/CardItem.scss";
import loveItem from "./../assets/svg/love.svg";

export default function CardItem(props) {
  return (
    <div className="card-Item">
      <div className="card-Images">
        <img src={props.imgSrc} alt="" />
        <svg className="loveItem">
          <use xlinkHref={`${loveItem}#love`} />
        </svg>
      </div>
      <div className="card-Description">
        <h6>Lorem ipsum dolor #1</h6>
        <p>Long Run, Light weight, Waterproff</p>
        <p>4 Colors</p>
        <p className="card-Description_price">
          <strong>$ 149</strong>
        </p>
      </div>
    </div>
  );
}
