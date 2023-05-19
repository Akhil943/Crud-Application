import React, {useState} from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

export default function Home() {
    const [username, setusername] = useState("");
    let navigate = useNavigate();

    const handlesubmit=(e)=>{
        if(username ===""){
            alert("Enter Username");
        }
        else{
            e.preventDefault();
            axios.post("https://6463b837127ad0b8f88fb00d.mockapi.io/crud",{
                username: username,
            })
            .then((response) =>{
                alert("Data Saved Successfully");
                document.getElementById("username").value="";
                setusername("");
                navigate("/read");

            })
            .catch((err) =>alert("Failed"))
        }
    }

  return (
    <div className="container  bg-warning col-8 col-lg-3 col-sm-6 col-md-6 p-3" style={{marginTop:"200px",borderRadius:"10px",}}>
        <form className=" mx-auto my-auto mt-2"  onSubmit={handlesubmit}>
            {/* <label htmlFor="" ><h4>User Name</h4></label><br /> */}
            <input id="username" type="text" placeholder='Enter UserName' className="form-control mt-2 " onChange={(e) => setusername(e.target.value)}/><br />
            <p>{username}</p> 
           <button className='btn btn-primary d-flex m-auto' >Submit</button>

        </form>
    </div>
  )
}
