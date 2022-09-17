
import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Link } from "react-router-dom";
import Nav from './Nav';

function Home() {

    const [dropdown1, setDropdown1] = useState("");
    const [dropdown2, setDropdown2] = useState("");
    const [dropdown3, setDropdown3] = useState("");
    const number = Math.random();
    function handleClick1(event) {

        setDropdown1(event.target.name);
    }

    function handleClick2(event) {

        setDropdown2(event.target.name);
    }

    function handleClick3(event) {

        setDropdown3(event.target.name);

    }

    useEffect(() => {
        if (dropdown1 != '') {


            const data = { dropdown1, dropdown2, dropdown3, id: number };
            axios.post("http://localhost:8080/data", data);
        }

    }, [dropdown1 && dropdown2 && dropdown3])

    return (
        <div>
            <Nav />
            <div className='greyDiv'>
                <div className='titlePara'>
                    <h1>E-vignettes at vintrica</h1>
                    <p>Buy a motorway e-vignette quickly and easily at vintrica.</p>
                </div>
                <div className='inputDiv'>
                    <div class="dropdown">
                        <div class="cls cls1  dropdown-toggle" type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                            {dropdown1 ? dropdown1 : "Country"}
                        </div>
                        <div class="dropdown-menu" aria-labelledby="dropdownMenuButton">
                            <a class="dropdown-item" name="India" onClick={handleClick1} >India</a>
                            <a class="dropdown-item" name="Japan" onClick={handleClick1} >Japan</a>
                            <a class="dropdown-item" name="America" onClick={handleClick1} >America</a>
                        </div>
                    </div>
                    <div class="dropdown">
                        <div class="cls cls2  dropdown-toggle" type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                            {dropdown2 ? dropdown2 : "Vehicle"}
                        </div>
                        <div class="dropdown-menu" aria-labelledby="dropdownMenuButton">
                            <a class="dropdown-item" name="Vehicle1" onClick={handleClick2} >Vehicle1</a>
                            <a class="dropdown-item" name="Vehicle2" onClick={handleClick2} >Vehicle2</a>
                            <a class="dropdown-item" name="Vehicle3" onClick={handleClick2} >Vehicle3</a>
                        </div>
                    </div>
                    <div class="dropdown">
                        <div class="cls cls3  dropdown-toggle" type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                            {dropdown3 ? dropdown3 : "Duration"}
                        </div>
                        <div class="dropdown-menu" aria-labelledby="dropdownMenuButton">
                            <a class="dropdown-item" name="1 week" onClick={handleClick3} >1 week</a>
                            <a class="dropdown-item" name="2 week" onClick={handleClick3} >2 week</a>
                            <a class="dropdown-item" name="3 week" onClick={handleClick3} >3 week</a>
                        </div>
                    </div>
                    <Link to={(dropdown1 && dropdown2 && dropdown3) ? "/page2" : "/"} state={{ data: { dropdown1, dropdown2, dropdown3, number } }} >
                        <div class="cls cls4" type="button">Continue</div>
                    </Link>
                </div>
                <p className='para2'>Secure: Your data is transmitted SSL-encrypted.</p>
            </div>
            <div className=' row homepageBottom'>
                <div className='div1 col-lg-4'>
                    <h1 className=''>E-vignette: here’s how it works</h1>
                    <p className='para'>With vintrica it’s easy to register your number plate online for all <strong>motorways and main roads that require a vignette</strong> . You can simply buy a vignette either from home before you start your journey or on the spur of the moment during your journey on your smartphone before you get on the motorway.</p>
                </div>
                <img src="https://media.istockphoto.com/photos/family-with-dog-in-the-car-picture-id1344953247?b=1&k=20&m=1344953247&s=170667a&w=0&h=4VNlEPWuGrRNlN13S6E1L0urQPv0g6sO7hgly8n_keg="
                    className="div2 col-lg-4 h-25 w-25 img-fluid" alt="Sample image" />
            </div>
        </div>
    )
}

export default Home