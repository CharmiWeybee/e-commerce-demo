import React,{useState} from 'react'
import axios from "axios";

function Login() {
    const [value, setValue] = useState({
        email: "",
        password: "",
      });
      const [error,setError]= useState("")
      const [errors,setErrors] = useState({})

      const handleSubmit = () => {
        var config = {
          method: "post",
          url: "https://kamaraapi.weybee.in/api/customer/login?token=true",
          headers: {},
          data: value,
        };
    
        axios(config)
          .then(function (response) {
            console.log(response);
            localStorage.setItem("token",response.data.token)
          })
          .catch(function (error) {
            console.log(error);
            if(Object.keys(error.response.data).includes("error")){

                setError(error.response.data.error)
            }else{
                setErrors(error.response.data.errors)

            }
          });
      };
    
  return (
    <>
{/*         
      <input type="text" value={value.email} onChange={(e) => {setValue({ ...value, email: e.target.value });}}/>
      {Object.keys(errors).includes("email") && <p>{errors.email[0]}</p>}
      
      <input type="text" value={value.password}onChange={(e) => {setValue({ ...value, password: e.target.value });}}/>
      {error && <p>{error}</p>}
        <button onClick={handleSubmit}>Submit</button> */}
        <div>
            <div className='main-card mt-5 ml-10'>
            <h2>Login Form</h2>
                <form id="login-form">
                    <div className='card-body'>
                        <div className="form-group row mt-2">
                            <label  className="col-sm-2 col-form-label">Email</label>
                            <div className="col-sm-10">
                                <input type="text"  className="form-control"  placeholder='Enter Email' value={value.email} onChange={(e) => {setValue({ ...value, email: e.target.value });}}/>
                            </div>
                            {Object.keys(errors).includes("email") && <p>{errors.email[0]}</p>}
                        </div>
                        <div className="form-group row mt-2">
                            <label className="col-sm-2 col-form-label">Password</label>
                            <div className="col-sm-10">
                                <input type="text" className="form-control"  placeholder="Enter Password" value={value.password} onChange={(e) => {setValue({ ...value, password: e.target.value });}}/>
                            </div>
                            {error && <p>{error}</p>}
                        </div>
                    </div>
                    <div className='card-footer'>
                            <button className='btn btn-dark' onClick={handleSubmit}>Login</button>
                            <p className='mt-3'>Don't have an account? Register here</p>
                    </div>
                    
                </form>
            </div>
        </div>
    </>
  )
}

export default Login



