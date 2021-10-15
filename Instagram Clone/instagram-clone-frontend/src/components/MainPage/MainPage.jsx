import React, {useState} from 'react';
import Post from '../Post/Post.jsx';
import './MainPage.css';

function MainPage(props){

    const [posts] = useState([

        {
            "username":"pizzahut",
            "image":"https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8cGl6emElMjBzbGljZXxlbnwwfHwwfHw%3D&w=1000&q=80" ,
            "likes":"235"
        },
        {
            "username":"pizzahut",
            "image":"https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8cGl6emElMjBzbGljZXxlbnwwfHwwfHw%3D&w=1000&q=80" ,
            "likes":"235"
        }
    ])


    return(
        <div>
            {
                posts.map((item,index) =>{
                    return(
                        <Post 
                            username={item.username} 
                            image={item.image}
                            likes={item.likes}
                        />
                    );
                })
            }

        </div>
    );
}

export default MainPage;