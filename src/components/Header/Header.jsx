import style from './Header.module.css'

const Header = () => {
    return (
        <header className={style.header}>
            <img className={style.img} src="https://w7.pngwing.com/pngs/813/735/png-transparent-bird-of-prey-logo-beak-desktop-bird-animals-computer-logo.png" alt='none'/>
        </header>
    );
}

export default Header;