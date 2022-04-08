function ShopCard({ id, title, price, imagePath }) {
  return (
    <div id={id} className="shop-card">
      <img
        className="shop-card__image"
        src={imagePath}
        alt={`${title} picture`}
      />
      <div className="shop-card__info-wrapper">
        <div className="shop-card__info-container">
          <h3 className="shop-card__title">{title}</h3>
          <p className="shop-card__price">{price}$</p>
        </div>
        <button className="shop-card__buy-button">buy</button>
      </div>
    </div>
  );
}

export default ShopCard;
