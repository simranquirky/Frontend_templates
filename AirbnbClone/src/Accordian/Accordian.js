import React, { useState } from 'react';
import {questions} from './data';
import Myaccordian from './Myaccordian';
import "./accordian.css"; 

const Accordian = () =>{
    const [data, setdata] = useState(questions);
    return(
        <>
            <section className='main-div'>
            <h1>FAQ's</h1>
            {
                data.map((curElem) =>{
                    const { id } = curElem;
                    return <Myaccordian key={id} {...curElem} />;
                })
            }
            </section>
        </>
    )
}

export default Accordian;