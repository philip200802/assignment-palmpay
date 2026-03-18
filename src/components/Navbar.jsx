import React from 'react'
// import style from "src/Components/Navbar.css"


const Navbar = () => {
  return (
    <>
    <nav class="navbar navbar-expand-lg bg-body-tertiary">
  <div class="container">
    <a class="navbar-brand fs-4 fw-bold" href="#" ><img src="src/assets/Image/image.png" alt="" width={120}/></a>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarTogglerDemo02" aria-controls="navbarTogglerDemo02" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarTogglerDemo02">
      <ul class="navbar-nav me-auto mb-2 mb-lg-0 display-flex justify-content-center align-items-center gap-4 ">
        <li class="nav-item">
          <a class="nav-link active fs-5" aria-current="page" href="#">Company</a>
        </li>
         <li class="nav-item">
          <a class="nav-link active fs-5" aria-current="page" href="#">Personal</a>
        </li>
         <li class="nav-item">
          <a class="nav-link active fs-5" aria-current="page" href="#">Bussiness</a>
        </li>
         <li class="nav-item">
          <a class="nav-link active fs-5" aria-current="page" href="#">Impact</a>
        </li>
         <li class="nav-item">
          <a class="nav-link active fs-5" aria-current="page" href="#">Newsroom</a>
        </li>
        <li>
      <button className='btn btn-md' style= {{backgroundColor: '#6d46db', color: 'white'}} > Login</button>
        </li>
      <div className="input-group" style={{ width: "200px" }}>
  
  <span className="input-group-text bg-white border-end-0 rounded-start-5">
    <img 
      src="https://flagcdn.com/w20/ng.png" 
      alt="Nigeria"
      style={{ width: "20px" }}
    />
  </span>

    <input
    type="text"
    placeholder="Nigeria"
    className="form-control border-start-0 border-end-0 fw-medium"
    style={{ textAlign: "center" }}
  />

  
  <span className="input-group-text bg-white border-start-0 rounded-end-5">
    <img src="data:image/jpeg;base64,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" alt="" width={'23px'}/>
  </span>
</div> 
   </ul>
    </div>
  </div>
</nav>
    </>
  )
}

export default Navbar
