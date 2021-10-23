import React, {useState} from 'react'
import './Post.css';
import { Avatar } from '@mui/material';
import Like from '../../img/love.svg';
import Comment from '../../img/comment.svg';
import Share from '../../img/share.svg';
import Save from '../../img/save.png';
import CmntSmile from '../../img/smile.png';

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
                <Avatar className="post-dp" src={props.userImg}/>
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
                    <img className="post-reaction" src={Save} style={{"marginLeft":"465px"}} alt="Save" />
                </diV>
                <div style={{"fontWeight":"Bold", "marginLeft":"18px", "color":"#262626", "fontSize":"14px"}}>
                    {props.likes} likes
                </div>
                <div style={{"marginLeft":"18px", "marginTop":"5px", "color":"#262626","fontSize":"14px" }}>
                    <b>{props.username}</b> {props.caption}
                </div>
            </div>

            {/* Comment Section  */}
            <div>
                {/* {
                    commentList.map((item, index) => {
                        return(
                            <div style={{"marginLeft":"18px", "color":"#262626"}} className="post-comment"><b>{item.username}</b> {item.desc}</div>
                        )
                        
                    })
                } */}
            <div style={{"marginLeft":"18px","marginTop":"5px", "color":"#8e8e8e", "fontSize":"14px"}}>
                View all {props.cmntcount} comments
            </div>
            <div style={{"marginLeft":"18px", "marginTop":"10px", "marginBottom":"15px", "fontSize":"10px","color":"#8e8e8e"}}>
                {props.time} AGO
            </div  >
            <div className="post-commentbox">
                <img src={CmntSmile} width="25px" style={{"marginTop":"15px", "margin-left":"10px"}} alt="emoji" />
                <input type="text" className="post-commentbox-text" placeholder="Add a comment..."/>
            </div>
                
            </div>
        </div>
    )
}
