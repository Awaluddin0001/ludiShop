import "../assets/scss/CardReview.scss";

export default function CardReview(props) {
  return (
    <div className="card-Review">
      <p className="comment">{props.comment}</p>
      <div className="card-Review_profile">
        <img src={props.photo} alt="" />
        <div className="card-Review_identity">
          <p>
            <strong>{props.name}</strong>
          </p>
          <p>{props.job}</p>
        </div>
      </div>
    </div>
  );
}
