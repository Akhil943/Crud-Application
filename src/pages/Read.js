import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { MdDelete, MdEditDocument } from "react-icons/md";
import { Link, useNavigate } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';

import 'react-toastify/dist/ReactToastify.css';



function Read() {
  let navigate = useNavigate();
  const [username, setusername] = useState([]);

  useEffect(() => {

    axios
      .get("https://6463b837127ad0b8f88fb00d.mockapi.io/crud")
      .then((response) => {
        setusername(response.data);
      })
      .catch((err) => console.log(err.message));
  })
  const [updateid, setupdateid] = useState("");
  const [updatename, setupdatename] = useState("");

  const editrecord = (id, username) => {
    // axios
    // .delete(`https://6463b837127ad0b8f88fb00d.mockapi.io/crud/${username}`)
    // .then((response) =>{

    // })
    if (username === "") {
      alert("Enter Username");
    }
    else {

      axios.put(`https://6463b837127ad0b8f88fb00d.mockapi.io/crud/${id}`, {
        id: id,
        username: username,
      })
        .then((response) => {
          alert("Data Saved Successfully");

          setusername("");
          navigate("/read");

        })
        .catch((err) => alert(err.message))
    }


  }




  const deleterecord = (id) => {
    if (window.confirm(" You want to Delete this Permanently")) {
      axios
        .delete(`https://6463b837127ad0b8f88fb00d.mockapi.io/crud/${id}`)
        .then(() => {
          // alert("deleted successfully");
          toast.success('Deleted Successfully', {
            position: "top-center",
            autoClose: 500,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: false,
            draggable: true,
            progress: undefined,
            theme: "colored",
          });
          // window.location.reload();
          navigate("/read");
        })
        .catch((err) => alert(err.message));
    }
  };


  return (
    <div className='container  my-5 col-12 col-lg-6 col-sm-8 col-md-8 p-3' style={{}}>
      <table className='table table-bordered  '>
        <tr className='bg-warning  col-lg-fs-5 justify-content-between' >
          <th style={{ padding: "10px 30px", }}>ID</th>
          <th >USER NAME</th>
          <th>EDIT</th>
          <th>DELETE</th>
        </tr>
        {username.map((data) => {
          return (
            <>
              <tr className='bg-info text-dark fs-5' >
                <td style={{ padding: "10px 30px", }}>{data.id}</td>
                <td className='ml-5' >{data.username}</td>
                <td  > <button className='fs-4 text-dark' data-bs-target="#exampleModalToggle" data-bs-toggle="modal" style={{ border: "none", }} onClick={() => { setupdateid(data.id); setupdatename(data.username) }} ><MdEditDocument /></button> </td>
                <td  > <button className='fs-4 text-danger' style={{ border: "none", }} onClick={() => deleterecord(data.id)}><MdDelete /></button> </td><ToastContainer />
              </tr>
            </>
          );

        })}

      </table>
      <Link to="/" style={{ textDecoration: "none" }}> <button className='btn btn-dark d-flex m-auto' >Home</button></Link>


      <div class="modal fade " id="exampleModalToggle" aria-labelledby="exampleModalToggleLabel" tabindex="-1" aria-hidden="true" style={{ display: " none;" }}>
        <div class="modal-dialog modal-dialog-centered">
          <div class="modal-content m-auto  w-75 h-75">
            <div class="modal-header">
              <h1 class="modal-title fs-5" >Change Username</h1>
              <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
            </div>
            <div class="modal-body ">
              <div className="container" >
                <label htmlFor="">Id</label><br />
                <input type="text" value={updateid} className="form-control mt-3" disabled onChange={(e) => setupdateid(e.target.value)} /><br />

                <label htmlFor="">Username</label><br />
                <input type="text" value={updatename} className="form-control mt-3" onChange={(e) => setupdatename(e.target.value)} />

              </div>
            </div>
            <div class="modal-footer">
              <button class="btn btn-secondary" data-bs-dismiss="modal" aria-label="Close">close</button>
              <button class="btn btn-primary" data-bs-dismiss="modal" aria-label="Close" onClick={() => editrecord(updateid, updatename)}>Save</button>

            </div>
          </div>
        </div>
      </div>



    </div>







  )
}

export default Read
