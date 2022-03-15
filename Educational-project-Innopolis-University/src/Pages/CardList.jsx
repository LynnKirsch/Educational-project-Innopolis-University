import axios from 'axios';
import {useState, useEffect} from 'react';
import Card from "../Pages/Card";
import {useDispatch} from "react-redux";
import Carousel from "../components/Carousel";

const CardList = () => {
    const dispatch = useDispatch();
    const [items, setItems] = useState(null);
    const [error, setError] = useState(null);
    useEffect(() => {
        axios
            .get("http://localhost:3000/db.json")
            .then(data => setItems(data.data.cardList))
            .catch((err) => setError
                `Error 404 Not Found
            ${err.response.status} ${err.response.statusText}`)
    }, [])
    const handleAddCoursToCart = (obj) => {
        dispatch({
            type: "ADD_COURS_CART",
            payload: obj,
        })
    }
    return (
        <main>
            <Carousel/>
            <div className={'container'}>
                <h1 className={'content__title'}>Авторские курсы по рукоделию, ремеслу и творчеству</h1>
                <div className={'cards'}>
                    {items && items.map((item) => (<Card
                        key={item.id}
                        courses = {item}
                        handleAddCoursToCart = {handleAddCoursToCart}/>)
                    )}
                    {error && <div>{error}</div>}
                </div>
                <div style={{textAlign: 'center'}}><a href={'https://cupcake-online.ru/'} target={'_blank'} rel={'nofollow noopener noreferrer'}><button className={'button__courses'}>Сайт CupCake</button></a></div>
            </div>
        </main>
    )
}

export default CardList;