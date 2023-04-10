import Promo from "./sections/Promo";
import Category from "./sections/Category";
import Suggest from "./sections/Suggest";
import Review from "./sections/Review";

export default function MainContent() {
  return (
    <main>
      <Promo />
      <Category />
      <Suggest />
      <Review />
    </main>
  );
}
