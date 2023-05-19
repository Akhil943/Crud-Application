import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';



export default function Home() {
    const [username, setusername] = useState("");
    let navigate = useNavigate();

    const handlesubmit = (e) => {
        if (username === "") {
            alert("Enter Username");
        }
        else {
            e.preventDefault();
            axios.post("https://6463b837127ad0b8f88fb00d.mockapi.io/crud", {
                username: username,
            })
                .then((response) => {
                    alert("Data Saved Successfully");

                    document.getElementById("username").value = "";
                    setusername("");
                    navigate("/read");

                })
                .catch((err) => alert("Failed"))
        }
    }

    return (
        <div className="container  bg-warning col-8 col-lg-3 col-sm-6 col-md-6 p-3" style={{ marginTop: "200px", borderRadius: "10px", }}>
            <form className=" mx-auto my-auto mt-2" onSubmit={handlesubmit}>
                {/* <label htmlFor="" ><h4>User Name</h4></label><br /> */}
                <input id="username" type="text" placeholder='Enter UserName' className="form-control mt-2 " onChange={(e) => setusername(e.target.value)} /><br />
                <p>{username}</p>
                <button className='uiverse'>
                    <span>Continue</span>
                    <svg width="34" height="34" viewBox="0 0 74 74" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <circle cx="37" cy="37" r="35.5" stroke="black" stroke-width="3"></circle>
                        <path d="M25 35.5C24.1716 35.5 23.5 36.1716 23.5 37C23.5 37.8284 24.1716 38.5 25 38.5V35.5ZM49.0607 38.0607C49.6464 37.4749 49.6464 36.5251 49.0607 35.9393L39.5147 26.3934C38.9289 25.8076 37.9792 25.8076 37.3934 26.3934C36.8076 26.9792 36.8076 27.9289 37.3934 28.5147L45.8787 37L37.3934 45.4853C36.8076 46.0711 36.8076 47.0208 37.3934 47.6066C37.9792 48.1924 38.9289 48.1924 39.5147 47.6066L49.0607 38.0607ZM25 38.5L48 38.5V35.5L25 35.5V38.5Z" fill="black"></path>
                    </svg>
                </button>


            </form>
        </div>
    )
}
