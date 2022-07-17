import React from 'react'
import axios from "axios";

function Logout() {
    const token = localStorage.getItem("token")
    console.log(token,"token")
    const handleSubmit = () => {
    var config = {
        method: "post",
        url: "https://kamaraapi.weybee.in/api/customer/logout?token=true",
        headers: {AUTHORIZATION:`Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpc3MiOiJodHRwczpcL1wva2FtYXJhYXBpLndleWJlZS5pblwvYXBpXC9jdXN0b21lclwvbG9naW4iLCJpYXQiOjE2NTc5OTYyNjYsImV4cCI6MTY1Nzk5OTg2NiwibmJmIjoxNjU3OTk2MjY2LCJqdGkiOiJreTdidlZMaXRYeVEzamJRIiwic3ViIjoyMCwicHJ2IjoiOGZjYTA4OGFiYWUyZjlhOGY4NGE1ZjBiZjZhNjUyNDQ5MDU1YmUwMCJ9.QG94mXMQTRq1Q5drnecdjGQ7bW44O1e7Cuu13dEpWjM`}
      };
      axios(config)
        .then(function (response) {
          console.log(response);
          localStorage.setItem("token","")
        })
        .catch(function (error) {
          console.log(error);
        });
    }
    

  return (
    <div><button onClick={handleSubmit}>Logout</button></div>
  )
  }

export default Logout
