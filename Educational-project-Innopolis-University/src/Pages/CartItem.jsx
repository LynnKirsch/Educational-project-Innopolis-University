const CartItem = ({courses, onRemoveItem}) => {
    return (
        <div className={'cours__item'}>
            <img className={'cours__image'}
                 src={courses.src}
                 alt='cours'/>
            <div className={'cours__card'}>
                <div className={'cours__title'}>{courses.title}</div>
                <div className={'cours__subtitle'}>{courses.subtitle}</div>
                <div className={'cours__descr'}>{courses.descr}</div>
                <div className={'cours__price'}>{`Цена: ${courses.price} руб.`}</div>
                <div className={'cours__close'} onClick = {() => onRemoveItem(courses.id)}>&times;</div>
            </div>
        </div>
    )
}

export default CartItem;