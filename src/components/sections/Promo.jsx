import "../../assets/scss/Promo.scss";
import saleImage from "../../assets/images/saleTime.png";
import voucherGift from "../../assets/images/voucherGift.png";
import voucherShipping from "../../assets/images/voucherShipping.png";

export default function Promo() {
  return (
    <section className="section-promo">
      <div className="container12">
        <h2 className="titleSection-size2">OUR PROMO</h2>
        <div className="section-promo_vouchers">
          <img src={saleImage} alt="ludishop ludi shop sales image" />
          <div className="section-promo_voucher">
            <img src={voucherGift} alt="ludishop ludi shop voucher gift" />
            <img
              src={voucherShipping}
              alt="ludishop ludi shop voucher shipping"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
