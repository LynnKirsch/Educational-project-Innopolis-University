import {Link} from 'react-router-dom';

const Header = () => {
    return (
        <header>

            <div className="header__block"></div>
            <div className='container'>
                <div className="header__main-menu">
                    <Link to={'/'}><img src='/images/CapCake-logo-02.png' alt={'logo'} className='header__logo'/></Link>
                    <nav>
                        <ul>
                            <li>
                                <Link to={'/'} style={{textDecoration: 'none', color: 'none'}}>Курсы</Link>
                            </li>
                            <li>
                                <Link to={'authors'} style={{textDecoration: 'none', color: 'none'}}>Авторы</Link>
                            </li>
                            <li>
                                <Link to={'blog'} style={{textDecoration: 'none', color: 'none'}}>Блог</Link>
                            </li>
                        </ul>
                        <Link to={'cart'} className={'button__link'}><button className={'button__cart'}>
                            Корзина</button></Link>
                    </nav>
                </div>
            </div>
        </header>
    );
}

export default Header;