const RestaurantCard = ({ data }) => {
  return (
    <div className="res-card">
      <div className="res-card-pic">
        <img src={data.img} />
      </div>
      <div className="res-details">
        <h3 className="res-name">{data.resName}</h3>
        <p className="res-cuisine">{data.cuisine}</p>
        <span className="res-rating">{data.rating}</span>
        <span className="estd">{data.estd}</span>
      </div>
    </div>
  );
};

export default RestaurantCard;
