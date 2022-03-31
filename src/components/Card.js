function Card({id, title, price, imagePath}) {
    return (
        <div id={id} className="card">
            <img className="card__image" src={imagePath} alt="Heathens picture" />
            <h3 className="card__title">{title}</h3>
            <p className="card__price">{price}$</p>
        </div>
    );
  }
  
  export default Card;