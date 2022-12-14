import React from "react";
import style from "./Friend.module.css"
const desc = 'Avatar'
function Friend(props) {
    return(
        <div className={style.friend}>
            <img src={props.avatar} alt={desc}/>
            <p>{props.name}</p>
        </div>
    )
}

export default Friend;