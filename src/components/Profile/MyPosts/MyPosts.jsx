import style from './MyPosts.module.css'
import Post from "./Post/Post";
import React from "react";

const MyPosts = (props) => {
    let postsElement = props.postsData
        .map(p => <Post id={p.id} message={p.message}/>)


    let newPostElement = React.createRef()

    let addPost = () => {
        let text = newPostElement.current.value;
        alert(text)
    }

    return (
        <div>
            <div className={style.postsBlock}>
                <h3>My posts</h3>
                <div>
                    <div>
                        <textarea ref={newPostElement}></textarea>
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