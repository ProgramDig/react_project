import style from './Post.module.css'

const Post = (props) => {
    return (
        <div className={style.item}>
            <img src="https://bipbap.ru/wp-content/uploads/2021/07/1551512888_2-730x617.jpg" alt="none"/>
            {props.message}
            <div>
                <span>{props.likesCount} like</span>
            </div>
        </div>
    );
}

export default Post;