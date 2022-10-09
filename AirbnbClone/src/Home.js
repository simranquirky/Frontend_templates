import React from 'react';
// import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import './Home.css';
import Banner from './Banner'
import Card from './Card'
import Accordian  from './Accordian/Accordian';

// ES7 snippets to do 'rfce'

function Home() {
    return (
        <div className='home'>
            <Banner />

            <h1 id="welcome_title"align="center">Welcome to Go-Airbnb</h1> 
            
            <p id='welcome'>Go-Airbnb is an online marketplace that connects people who want to rent out their homes with people who are looking for accommodations in specific locales. On one side, the platform enables people to list their available space and earn extra income in the form of rent. On the other, Airbnb enables travelers to book unique homestays from local hosts, saving them money and giving them a chance to interact with locals.<br/><br/>
            The company has come a long way since 2007, when its co-founders first came up with the idea to invite paying guests to sleep on an air mattress in their living room. According to Airbnb's latest data, it has in excess of 5.6 million listings, covering more than 100,000 cities and towns and 220-plus countries worldwide.<br/><br/></p>
            <p id='welcome_key'>KEY TAKEAWAYS:</p>
            <ul className='welcome_list'>
                <li>Airbnb offers people an easy, relatively stress-free way to earn some income from their property.</li>
                <li>Guests often find Airbnb is cheaper, has more character, and is homier than hotels.</li>
                <li>Airbnb makes the bulk of its revenue by charging a service fee for each booking.</li>
                <li>Cons of using this service include not getting what you expected, and, for hosts, renting your place to someone you haven’t had the chance to meet first.</li>
            </ul>

            <h1 id='service_header' align="center">Top services</h1>
            <div className='home__section'>

            <Card
                src="https://a0.muscache.com/im/pictures/eb9c7c6a-ee33-414a-b1ba-14e8860d59b3.jpg?im_w=720"
                title="Online Experiences"
                description="Unique activities we can do together, led by a world of hosts."
            />
            <h4><span>Online Experiences</span><br/><br/>
            Join a live Online Experience to learn about a range of hosting topics. Successful, experienced Hosts and other experts will share insights and tips, and answer your top questions in real time. 
             Plan a trip with tips from a local. Video chat with a local Host who knows your dream destination inside out. They’ll find out what you’re into and provide an insider’s perspective with personalised ideas and recommendations to help inspire your plans.</h4>
            
            <Card
                src="https://a0.muscache.com/im/pictures/15159c9c-9cf1-400e-b809-4e13f286fa38.jpg?im_w=720"
                title="Unique stays"
                description="Spaces that are more than just a place to sleep."
            />
            <h4><span>Unique stays</span><br/><br/>
            A unique opportunity to have an unforgettable experience will give you a stay in Unique stays. Take the opportunity of amazing Treehouse, Igloo in icelands, Domehouse on mountain top, Tent in forests, hills,
            Traditional Lumbung Bungalow, modern EcoPod, wooden cottages, garden house, boat house, bamboo villa in jungle, luxurious earth house, bubble dome, trulli-the stone houses, castles, yurts and much more. Do explore and experience. </h4>
            
            <Card
                src="https://a0.muscache.com/im/pictures/fdb46962-10c1-45fc-a228-d0b055411448.jpg?im_w=720"
                title="Entire homes"
                description="Comfortable private places, with room for friends or family."
            />
            <h4><span>Entire Homes</span><br/><br/>
            Comfortable private places, with room for friends or family. Enjoy the entire home on your trip with all safeties of Covid. With kitchen, free wi-fi, Free parking on premises, TV, washing machine, dryer, Air conditioning facility,
            pool, rooftop, little park, playstation, smoke alarm etc. feel your own home. You can also choose you hosue among multiple options and wide range. </h4>
            
            <Card
                src="https://images.unsplash.com/photo-1610192244261-3f33de3f55e4?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=776&q=80"
                title="Entire homes"
                description="Comfortable private places, with room for friends or family."
            />
            <h4><span>Best trip experiences</span><br/><br/>
            Have a superb experience of local things and heritages of your trip area. Visit markets, special places, enjoy street foods & drinks, sunrise and sunsets, local musics, traditional foods & dresses, art & culture, sports etc. Meet local peoples,be familiar with their lifestyles.
            Get to know specific historical and geographical as well as cultural significance of a place.</h4>
            
            </div>

            <button>Explore more ▶ </button>
            <br/>
            <Accordian/>
            <br/><br/>
            {/* <div className='home__section'>
            <Card
                src="https://media.nomadicmatt.com/2019/airbnb_breakup3.jpg"
                title="3 Bedroom Flat in Bournemouth"
                description="Superhost with a stunning view of the beachside in Sunny Bournemouth"
                price="£130/night"
            />
            <Card
                src="https://thespaces.com/wp-content/uploads/2017/08/Courtesy-of-Airbnb.jpg"
                title="Penthouse in London"
                description="Enjoy the amazing sights of London with this stunning penthouse"
                price="£350/night"
            />
            <Card
                src="https://media.nomadicmatt.com/2018/apartment.jpg"
                title="1 Bedroom apartment"
                description="Superhost with great amenities and a fabolous shopping complex nearby"
                price="£70/night"
            />
            </div> */}
        </div>
    )
}

export default Home