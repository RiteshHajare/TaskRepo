import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { useLocation } from 'react-router-dom'
import Nav from './Nav';

function Page2() {

    const [hidden, setHidden] = useState(true);
    const [date, setDate] = useState("");

    const location = useLocation()
    const { data } = location.state;

    useEffect(() => {

        console.log(data);

    }, []);

    function handleChange(e) {
        console.log(e.target.value);
        const data2 = { number: data.number, datee: e.target.value };
        axios.post("http://localhost:8080/date", data2);
        setDate(e.target.value);
        setHidden(false);

    }


    return (
        <div className='page2'>
            <Nav />
            <form>
                <div className='setForm'>
                    <div className=" text-center form-group">
                        <label className='pt-2 pe-3 datelabel' for="exampleInputEmail1">Start Date</label>
                        <input onChange={handleChange} type="date" className="w-25 form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />
                    </div>
                </div>
            </form>
            <div class="w-50 alert alert-info">Start date: <span id="validPeriod" class="d-block d-md-inline"> Please first select the start date.</span> </div>
            <div className={hidden ? "makeHidden" : "makeVisible"} >
                <h4>dropdown1 : {data.dropdown1} </h4>
                <h4>dropdown2 : {data.dropdown2} </h4>
                <h4>dropdown3 : {data.dropdown3} </h4>
                <h3>Date :{date} </h3>
            </div>
        </div>
    )
}

export default Page2