import React from "react";
import style from "./MyPosts.module.css";
import Post from "./Post/Post";

function MyPosts(props) {
    let newPostElement = React.createRef();

    let onAddPost = () => {
        props.addPost();
    }

    let onPostChange = () => {
        let text = newPostElement.current.value;
        props.newPostText(text);
    }

    let postsMessages = props.posts.map((post, index) => (<Post message={post.message} likesCount={post.likesCount} key={index}/>))

    return(
        <section className="posts">
            <div>
                My posts
                <div className={style.posts_area}>
                    <textarea onChange={onPostChange} ref={newPostElement} value={props.newText}></textarea>
                    <button onClick={onAddPost}>New post</button>
                    <button>Remove</button>
                </div>
                <div className={style.posts}>
                    { postsMessages }
                </div>
            </div>
        </section>
    )
}
export default MyPosts;