import axios from "axios";
import React, { useState } from "react";

function Registration() {
  const [value, setValue] = useState({
    first_name: "",
    last_name: "",
    email: "",
    password: "",
    password_confirmation: "",
  });
  const [error,setError]=useState({})
  const handleSubmit = () => {
    var config = {
      method: "post",
      url: "https://kamaraapi.weybee.in/api/customer/register",
      headers: {},
      data: value,
    };

    axios(config)
      .then(function (response) {
        console.log(response);
        alert(response.data.message)
      })
      .catch(function (error) {
        console.log(error.response.data.errors);
        setError(error.response.data.errors)
      });
  };

  return (
    // <div>
    //   <input type="text" value={value.first_name} onChange={(e) => {setValue({ ...value, first_name: e.target.value });}} />
    //   {Object.keys(error).includes("first_name") && <p>{error.first_name[0]}</p>}
    //   <input type="text" value={value.last_name} onChange={(e) => { setValue({ ...value, last_name: e.target.value }); }}/>
    //   {Object.keys(error).includes("last_name") && <p>{error.last_name[0]}</p>}
    //   <input type="text" value={value.email} onChange={(e) => {setValue({ ...value, email: e.target.value });}}/>
    //   {Object.keys(error).includes("email") && <p>{error.email[0]}</p>}
    //   <input type="text" value={value.password} onChange={(e) => { setValue({ ...value, password: e.target.value });}}/>
    //   {Object.keys(error).includes("password") && <p>{error.password[0]}</p>}
    //   <input type="text" value={value.password_confirmation} onChange={(e) => {setValue({ ...value, password_confirmation: e.target.value });}}/>
    //   {Object.keys(error).includes("password_confirmation") && <p>{error.password_confirmation[0]}</p>}
    //   <button onClick={handleSubmit}>Submit</button>
    // </div>
    <>
           <div className='main-card mt-5 ml-10'>
            <h2>Registration Form</h2>
                <form id="login-form">
                    <div className='card-body'>
                        <div className="form-group row mt-2">
                            <label  className="col-sm-2 col-form-label">First Name</label>
                            <div className="col-sm-10">
                            <input type="text"  className="form-control" value={value.first_name} onChange={(e) => {setValue({ ...value, first_name: e.target.value });}} />
                            </div>
                            {/* {Object.keys(error).includes("first_name") && <p>{error.first_name[0]}</p>} */}
                        </div>
                        <div className="form-group row mt-2">
                            <label className="col-sm-2 col-form-label">Last Name</label>
                            <div className="col-sm-10">
                            <input type="text"  className="form-control" value={value.last_name} onChange={(e) => { setValue({ ...value, last_name: e.target.value }); }}/>
                            </div> 
                        </div>
                        
                        <div className="form-group row mt-2">
                            <label className="col-sm-2 col-form-label">Email</label>
                            <div className="col-sm-10">
                            <input type="text" className="form-control" value={value.email} onChange={(e) => {setValue({ ...value, email: e.target.value });}}/>
                            </div>
                            
                        </div>
                        
                        <div className="form-group row mt-2">
                            <label className="col-sm-2 col-form-label">Password</label>
                            <div className="col-sm-10">
                            <input type="text" className="form-control" value={value.password} onChange={(e) => { setValue({ ...value, password: e.target.value });}}/>
                            </div>
                            
                        </div>
                        
                        <div className="form-group row mt-2">
                            <label className="col-sm-2 col-form-label">Confirm Password</label>
                            <div className="col-sm-10">
                            <input type="text" className="form-control" value={value.password_confirmation} onChange={(e) => {setValue({ ...value, password_confirmation: e.target.value });}}/>
                            </div>
                            
                        </div>
                    </div>
                    <div className='card-footer'>
                            <button className='btn btn-dark' onClick={handleSubmit}>Register</button>
                    </div>
                    
                </form>
            </div>

    </>
  );
}

export default Registration;
