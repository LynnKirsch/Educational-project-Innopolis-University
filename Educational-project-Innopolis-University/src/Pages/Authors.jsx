import axios from 'axios';
import {useState, useEffect} from 'react';
import Author from "../Pages/Author";

const Authors = () => {
    const [items, setItems] = useState(null);
    const [error, setError] = useState(null);
    useEffect(() => {
        axios
            .get("http://localhost:3000/Authors.json")
            .then((data) => setItems(data.data.authorList))
            .catch((err) => setError
                `Error 404 Not Found
            ${err.response.status} ${err.response.statusText}`)
    }, [])
    return (
        <main>
            <div className={'container'}>
                <h1 className={'content__title'}>Авторы курсов и уроков</h1>
                <div className={'authors'}>
                    {items && items.map((item) => (<Author key={item.id} authors = {item}/>)
                    )}
                    {error && <div>{error}</div>}
                </div>
            </div>
        </main>
    )
}

export default Authors;