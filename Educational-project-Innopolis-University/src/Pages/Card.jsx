const Card = ({courses, handleAddCoursToCart}) => {
    return (
        <div className={'card__item'}>
            <img
                src={courses.src}
                alt="card-courses"
                style={{width: '100%', borderRadius: '11px 11px 0 0'}} />
            <div className="card__title">{courses.title}</div>
            <div className="card__subtitle">{courses.subtitle}</div>
            <div className="card__descr">{courses.descr}</div>
            <div className="card__price">{courses.price} руб.</div>
            <button className="button__add" onClick={() => handleAddCoursToCart(courses)}>Добавить в корзину</button>
        </div>
    )
}

export default Card;