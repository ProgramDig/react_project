import style from './Navbar.module.css'
import {Link, NavLink} from "react-router-dom";
import Friends from "./Friends/Friends";

const Navbar = (props) => {

    let friendItem = props.state.friendData.map(f => <Friends name={f.name} href={f.href}/>)
    return (
        <div>
            <nav className={style.nav}>
                <div className={style.item}>
                    <NavLink to={'/profile'} className={navData => navData.isActive? style.active : style.item}>Profile</NavLink>
                </div>
                <div className={style.item}>
                    <NavLink to={'/dialogs'}className={navData => navData.isActive? style.active : style.item}>Messages</NavLink>
                </div>
                <div className={style.item}>
                    <NavLink to={'/news'} className={navData => navData.isActive? style.active : style.item}>News</NavLink>
                </div>
                <div className={style.item}>
                    <NavLink to={'/music'} className={navData => navData.isActive? style.active : style.item}>Music</NavLink>
                </div>
                <div className={style.item}>
                    <NavLink to={'/setting'} className={navData => navData.isActive? style.active : style.item}>Settings</NavLink>
                </div>
                <div className={style.friends}>
                    {friendItem}
                </div>
            </nav>
        </div>
    );
}

export default Navbar;