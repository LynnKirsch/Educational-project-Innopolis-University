import {useSelector, useDispatch} from 'react-redux';
import {removeCartItem, removeCart} from "../redux/actions";
import CartItem from '../Pages/CartItem';
import {Link} from "react-router-dom";

const Cart = () => {
    const dispatch = useDispatch();
    const {cartItems, totalCount, totalPrice} = useSelector((reducer) => reducer);
    const onRemoveItem = (id) => {
        dispatch(removeCartItem(id))
    }
    const onRemoveCart = () => {
        dispatch(removeCart())
    }
    return (
        <div className={'cart'}>
            {cartItems && cartItems.length !== 0 ? <h1 className={'cart__title'}>
                Ваш заказ
            </h1> : <h1 className={'cart__title'}>
                Корзина пустая
            </h1>}
            {cartItems && cartItems.map((item) => <CartItem key={item.id} courses={item} onRemoveItem = {onRemoveItem}/>)}
            <div style={{marginTop: 40, fontSize: 28, textAlign: 'center'}}>{totalCount !== 0 && `Всего товаров: ${totalCount} шт.`}</div>
            <div style={{marginTop: 20, fontSize: 28, textAlign: 'center'}}>{totalPrice !== 0 && `Общая сумма товаров: ${totalPrice} руб.`}</div>
            {cartItems && cartItems.length !== 0 && (<div style={{textAlign: 'center'}}><button className={'button__order'}>Оформить заказ</button></div>)}
            {cartItems && cartItems.length !== 0 && (<div style={{textAlign: 'center'}}><button className={'button__remove'} onClick={() => onRemoveCart()}>Очистить корзину</button></div>)}
            <div style={{textAlign: 'center'}}><Link to={'/'}><button className={'button__courses'}>Курсы</button></Link></div>
        </div>
    )
}

export default Cart;