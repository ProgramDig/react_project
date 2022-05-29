import style from './MyPosts.module.css'
import Post from "./Post/Post";

const MyPosts = () => {
    return (
        <div>
            <div>
                my post

                <div>
                    <textarea cols="10" rows="2"></textarea>
                    <button>Add post</button>
                </div>
                <div className={style.posts}>
                    <Post message={'Hi, how are you?'} likeCount={'39'} />
                    <Post message={'It\'s my first post'} likeCount={'0'}/>
                </div>
            </div>
        </div>
    );
}

export default MyPosts;