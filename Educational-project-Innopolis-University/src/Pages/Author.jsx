const Author = ({authors}) => {
    const {src, title, subtitle, descr} = authors;
    return (
        <div className={'author__item'}>
            <img className={'author__image'}
                 src={src}
                 alt='authors-courses'/>
            <div className={'authors__card'}>
                <div className={'author__title'}>{title}</div>
                <div className={'author__subtitle'}>{subtitle}</div>
                <div className={'author__descr'}>{descr}</div>
            </div>

        </div>
    )
}

export default Author;