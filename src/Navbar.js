import React from 'react'
import { useSelector } from 'react-redux'

const Navbar = () => {
  // useSelector is hook that is used to select the state which you want to use state 

// const variable_name= useSelector(state=>state.state_name) 
   const amount = useSelector(state=>state.amount)
  return (
    <div>
      <nav className="navbar navbar-expand-lg  ">
  <div className="container-fluid">
    <a className="navbar-brand" href="/">Navbar</a>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
        <li className="nav-item">
          <a className="nav-link active" aria-current="page" href="/">Home</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="/about">About</a>
        </li>
        </ul>
      </div>
      <div>
        <button disabled={'true' ? amount <100 : 'false'} className="btn btn-primary">Your Balance : {amount}</button>
        
      </div>
  </div>
</nav>
    </div>
  )
}

export default Navbar
