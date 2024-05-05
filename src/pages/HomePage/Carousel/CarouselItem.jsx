import PropTypes from "prop-types";
import { StarFillIcon, StarIcon } from "../../../components/icons";

import pfp from "../../../assets/pfp.png";

export const CarouselItem = ({ item }) => {
  const rating = Math.round(item.stars * 2) / 2;

  return (
    <div className="carousel-item">
      <div className="pfp">
        <img src={pfp} alt={item.name} />
      </div>
      <div className="rating">
        {[...Array(rating)].map((e, i) => (
          <span className="filled-star" key={i}>
            <StarFillIcon />
          </span>
        ))}
        {[...Array(5 - rating)].map((e, i) => (
          <span className="empty-star" key={i}>
            <StarIcon />
          </span>
        ))}
      </div>
      <p className="poppins md">&ldquo;{item.quote}&rdquo;</p>
      <span className="roboto name">{item.name}</span>
    </div>
  );
};

CarouselItem.propTypes = {
  item: PropTypes.object,
};
