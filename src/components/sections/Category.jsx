import "../../assets/scss/Category.scss";
import categoryImg from "../../assets/images/category.png";

export default function Category() {
  return (
    <section className="section-Category">
      <div className="container12">
        <h3 className="titleSection-size3">Category</h3>
        <ul className="section-Category_list">
          <li>SHOES</li>
          <li>CLOTHES</li>
          <li>PANTS</li>
          <li>SOCKS</li>
        </ul>
        <img src={categoryImg} alt="" />
      </div>
    </section>
  );
}
