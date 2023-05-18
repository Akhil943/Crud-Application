import React, { useState,useEffect } from 'react';
import axios from 'axios';
import { MdDelete, MdEditDocument } from "react-icons/md";
import { useNavigate } from 'react-router-dom';

function Read() {
  let navigate = useNavigate();
  const [username, setusername] = useState([]); 
  
  useEffect(() =>{
        
    axios
      .get("https://6463b837127ad0b8f88fb00d.mockapi.io/crud")
      .then((response) => {
        setusername(response.data);
      })
      .catch((err) => console.log(err.message));
    })
      const [updateid, setupdateid] = useState("");
      const [updatename, setupdatename] = useState("");

      const editrecord =(id, username) =>{
        // axios
        // .delete(`https://6463b837127ad0b8f88fb00d.mockapi.io/crud/${username}`)
        // .then((response) =>{
          
        // })
        if(username ===""){
          alert("Enter Username");
      }
      else{

          axios.put(`https://6463b837127ad0b8f88fb00d.mockapi.io/crud/${id}`,{
              id : id,
              username: username,
          })
          .then((response) =>{
              alert("Data Saved Successfully");
            
              setusername("");
              navigate("/read");

          })
          .catch((err) =>alert(err.message))
      }
       
       
      }
      
      
  

  const deleterecord = (id) => {
    if (window.confirm("r u sure u want to delete the record")) {
      axios
        .delete(`https://6463b837127ad0b8f88fb00d.mockapi.io/crud/${id}`)
        .then(() => {
          alert("deleted successfully");
          // window.location.reload();
          navigate("/read");
        })
        .catch((err) => alert(err.message));
    }
  };


  return (
    <div className='container w-25 my-5 '>
      <table className='table table-bordered  '>
        <tr className='bg-warning fs-5 justify-content-between' style={{ padding: "50px", marginLeft: "10px", }}>
          <th style={{ padding: "10px 30px", }}>ID</th>
          <th >User Name</th>
          <th></th>
          <th></th>
        </tr>
        {username.map((data) => {
          return (
            <>
              <tr className='bg-info'>
                <td style={{ padding: "10px 30px", }}>{data.id}</td>
                <td className='ml-5' >{data.username}</td>
                <td  > <button className='fs-4' data-bs-target="#exampleModalToggle" data-bs-toggle="modal" style={{ border: "none", }} onClick={() => {setupdateid(data.id);setupdatename(data.username)}} ><MdEditDocument /></button> </td>
                <td  > <button className='fs-4' style={{ border: "none", }} onClick={() => deleterecord(data.id)}><MdDelete /></button> </td>
              </tr>
            </>
          );

        })}

      </table>

      <div class="modal fade" id="exampleModalToggle" aria-labelledby="exampleModalToggleLabel" tabindex="-1" aria-hidden="true" style={{ display: " none;" }}>
        <div class="modal-dialog modal-dialog-centered">
          <div class="modal-content m-auto  w-75 h-75">
            <div class="modal-header">
              <h1 class="modal-title fs-5" >Change Username</h1>
              <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
            </div>
            <div class="modal-body ">
              <div className="container" >
                  <label htmlFor="">Id</label><br />
                  <input  type="text" value={updateid} className="form-control mt-3" disabled onChange={(e) => setupdateid(e.target.value)}/><br/>

                  <label htmlFor="">Username</label><br />
                  <input  type="text" value={updatename} className="form-control mt-3" onChange={(e) => setupdatename(e.target.value)}/>
                 
              </div>
            </div>
            <div class="modal-footer">
              <button class="btn btn-secondary" data-bs-dismiss="modal" aria-label="Close">close</button>
              <button class="btn btn-primary" data-bs-dismiss="modal" aria-label="Close" onClick={() =>editrecord(updateid,updatename)}>Save</button>

            </div>
          </div>
        </div>
      </div>



    </div>







  )
}

export default Read
