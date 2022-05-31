import style from './Friends.module.css'

const Friends = (props) => {
    return (
        <div className={style.friend}>
            <div>
                <img src={props.href} alt="none"/>
            </div>
            <div>
                {props.name}
            </div>
        </div>
    );
}

export default Friends;