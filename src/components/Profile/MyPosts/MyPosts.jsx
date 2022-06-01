import style from './MyPosts.module.css'
import Post from "./Post/Post";
import React from "react";
import {addPostActionCreator, updateNewPostTextAction} from "../../../redux/profileReduser";



const MyPosts = (props) => {
    let postsElement = props.postsData
        .map(p => <Post id={p.id} message={p.message} likesCount={p.likesCount}/>)

    let newPostElement = React.createRef();

    let addPost = () => {
        props.dispatch(addPostActionCreator());
    };

    let onPostChange = () => {
        props.dispatch(updateNewPostTextAction(newPostElement.current.value));
    }

    return (
        <div>
            <div className={style.postsBlock}>
                <h3>My posts</h3>
                <div>
                    <div>
                        <textarea ref={newPostElement} onChange={onPostChange} value={props.newTextPost}/>
                    </div>
                    <div>
                        <button onClick={addPost} >Add post</button>
                    </div>
                </div>
                <div className={style.posts}>
                    {postsElement}
                </div>
            </div>
        </div>
    );
}

export default MyPosts;