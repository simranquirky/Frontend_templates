import React, {useState} from 'react';
import Post from '../Post/Post.jsx';
import './MainPage.css';

function MainPage(props){

    const [posts] = useState([

        {
            "username":"pizzahut",
            "userImg":"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTAOZrUVy-8Y15wDtcp_X58uAPpu6oIOFCLGkfr2pQzEkBOUMllpmp5OwFpaRpNVleG_RU&usqp=CAU",
            "image":"https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8cGl6emElMjBzbGljZXxlbnwwfHwwfHw%3D&w=1000&q=80" ,
            "likes":"235",
            "caption":"Yummy... Introducing new pizza",
            "cmntCount":"10",
            "time":"42 MINUTES"
        },
        {
            "username":"tzuyu",
            "userImg":"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSGEEEbA7w3DBCy754ZIj8bAdYiy4Ec5rOa4Q&usqp=CAU",
            "image":"https://wallpapercave.com/wp/wp4493301.jpg" ,
            "likes":"987",
            "caption":"Hi! Have a nice day",
            "cmntCount":"876",
            "time":"2 HOURS"
        },
        {
            "username":"theflash",
            "userImg":"https://images2.minutemediacdn.com/image/fetch/w_2000,h_2000,c_fit/https%3A%2F%2Fbamsmackpow.com%2Ffiles%2Fimage-exchange%2F2016%2F04%2Fie_42627.jpeg",
            "image":"https://wallpapercave.com/wp/wp9231675.jpg" ,
            "likes":"635",
            "caption":"I'm the fastest human alive",
            "cmntCount":"167",
            "time":"3 HOURS"
        }
    ])


    return(
        <div>
            {
                posts.map((item,index) =>{
                    return(
                        <Post 
                            username={item.username} 
                            userImg={item.userImg}
                            image={item.image}
                            likes={item.likes}
                            caption={item.caption}
                            cmntcount={item.cmntCount}
                            time={item.time}
                        />
                    );
                })
            }

        </div>
    );
}

export default MainPage;