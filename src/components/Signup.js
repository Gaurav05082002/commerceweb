import React from 'react'
import './Signup.css'
import './idiot.php'


const Signup = () => {
    return (
        <div className="sign">

   
   






  <div>
   
    <meta charset="utf-8"></meta>
    <meta name="viewport" content="width=device-width, initial-scale=1"></meta>

   
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-1BmE4kWBq78iYhFldvKuhfTAU6auU8tT94WrHftjDbrCEXSU1oBoqyl2QvZ6jIW3" crossorigin="anonymous"></link>

   
    
  </div>
  <body class="body">
    
  <form class="row g-3" action="/final/idiot.php" method="post" >
  <div class="col-md-6">
    <label for="email" class="form-label">Email</label>
    <input type="email" class="form-control" id="email" name="email"></input>
  </div>
  <div class="col-md-6">
    <label for="password" class="form-label">Password</label>
    <input type="password" class="form-control" id="password" name="password"></input>
  </div>
  <div class="col-12">
    <label for="name" class="form-label">Name</label>
    <input type="text" class="form-control" id="name" placeholder="abc" name="name"></input>
  </div>
 
 
  <div class="col-md-4">
    <label for="state" class="form-label" >State</label>
    <select id="state" class="form-select" name="state">
      <option selected>Choose...</option>
      <option>mp</option>
      <option>up</option>
    </select>
  </div>
  
  
  <div class="col-12">
    <button type="submit" class="btn btn-primary">Sign in</button>
  </div>
</form>

  </body>


















            
        </div>
    )
}

export default Signup
