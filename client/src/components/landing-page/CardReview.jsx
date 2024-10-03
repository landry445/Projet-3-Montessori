import PropTypes from "prop-types";
import Button from "../shared/Button";

import "./styles/CardReview.css";

function CardReview({ imgSrc, clientName, publishedDate, comment }) {
  return (
    <article className="card-review">
      <div className="card-review__flex-container">
        <img src={imgSrc} alt="Avatar du client" />
        <div className="card-review__name">{clientName}</div>
        <div className="card-review__date">{publishedDate}</div>
      </div>
      <p className="card-review__p">{comment}</p>
      <Button
        text="voir +"
        style={{
          backgroundColor: "var(--clr-light-green",
          alignSelf: "flex-end",
          marginTop: "auto",
        }}
      />
    </article>
  );
}

CardReview.propTypes = {
  imgSrc: PropTypes.string.isRequired,
  clientName: PropTypes.string.isRequired,
  publishedDate: PropTypes.string.isRequired,
  comment: PropTypes.string.isRequired,
};
export default CardReview;
