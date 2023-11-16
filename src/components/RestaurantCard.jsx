const RestaurantCard = ({ img, resName, cuisine, rating, estd }) => {
  return (
    <div className="res-card">
      <div className="res-card-pic">
        <img src={img} />
      </div>
      <div className="res-details">
        <h3 className="res-name">{resName}</h3>
        <p className="res-cuisine">{cuisine}</p>
        <span className="res-rating">{rating}</span>
        <span className="estd">{estd}</span>
      </div>
    </div>
  );
};

export default RestaurantCard;
