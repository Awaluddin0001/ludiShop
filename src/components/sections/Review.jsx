import "../../assets/scss/Review.scss";
import CardReview from "../cardReview";
import user1 from "./../../assets/images/user1.png";
import user2 from "./../../assets/images/user2.png";
import user3 from "./../../assets/images/user3.png";
import user4 from "./../../assets/images/user4.png";

export default function Review() {
  const users = [
    {
      name: "Aisha Esteban",
      job: "Worker",
      comment:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation",
      photo: user1,
    },
    {
      name: "Crish wipe",
      job: "Tech Support",
      comment:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation",
      photo: user2,
    },
    {
      name: "Desta Ryan",
      job: "Personal Trainer",
      comment:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation",
      photo: user3,
    },
    {
      name: "Jamal Moniyan",
      job: "Student",
      comment:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation",
      photo: user4,
    },
  ];
  return (
    <section className="section-Review">
      <div className="container12">
        <h2 className="titleSection-size2">Our customer review</h2>
        <div className="section-Review_cards">
          <CardReview
            name={users[0].name}
            job={users[0].job}
            comment={users[0].comment}
            photo={users[0].photo}
          />
          <CardReview
            name={users[1].name}
            job={users[1].job}
            comment={users[1].comment}
            photo={users[1].photo}
          />
          <CardReview
            name={users[2].name}
            job={users[2].job}
            comment={users[2].comment}
            photo={users[2].photo}
          />
          <CardReview
            name={users[3].name}
            job={users[3].job}
            comment={users[3].comment}
            photo={users[3].photo}
          />
        </div>
      </div>
    </section>
  );
}
