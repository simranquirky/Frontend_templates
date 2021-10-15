import React, {useState} from 'react'
import './Post.css';
import { Avatar } from '@mui/material';
import Like from '../../img/love.svg';
import Comment from '../../img/comment.svg';
import Share from '../../img/share.svg';

export default function Post(props) {

    const [commentList] = useState([

        {
            "username":"gayan",
            "cmntID":"0001",
            "timestamp":"1234",
            "desc":"This is a comment"  
        },
        {
            "username":"lakshitha",
            "cmntID":"0001",
            "timestamp":"1234",
            "desc":"This is a comment"  
        },
        {
            "username":"mahela87",
            "cmntID":"0001",
            "timestamp":"1234",
            "desc":"This is a comment"  
        }
    ]);


    return (
        <div className="post-container">
            {/* Header */}
            <div className="post-header">
                <Avatar className="post-dp" src="" />
                <dev className="post-username">{props.username}</dev>
            </div>

            {/* Image */}
            <div>
                <img  className="post-image" src={props.image} alt="A Post"/>
            </div>

            {/* Analytics */}
            <div>
                <diV style={{"marginLeft":"10px"}}>
                    <img className="post-reaction" src={Like} alt="Like" />
                    <img className="post-reaction" src={Comment} alt="Comment" />
                    <img className="post-reaction" src={Share} alt="Share" />
                </diV>
                <div style={{"fontWeight":"Bold", "marginLeft":"20px"}}>
                    {props.likes} likes
                </div>
            </div>

            {/* Comment Section  */}
            <div>
                {
                    commentList.map((item, index) => {
                        return(
                            <div className="post-comment"><b>{item.username}</b> {item.desc}</div>
                        )
                        
                    })
                }

                <input type="text" className="post-commentbox" placeholder="Add a comment..."/>
            </div>
        </div>
    )
}
