function Card({id, title, price, imagePath, slide}) {
    return (
        <div id={id} className={slide ? "card_theme_slide card" : "card"}>
            <img className="card__image" src={imagePath} alt="Heathens picture" />
            <h3 className="card__title">{title}</h3>
            <p className="card__price">{price}$</p>
        </div>
    );
  }
  
  export default Card;