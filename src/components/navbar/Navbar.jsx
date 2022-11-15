import React from 'react'
import './Navbar.css'
import SearchIcon from '@mui/icons-material/Search';
import { Link, useNavigate } from 'react-router-dom';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { userLoginSuccess, userLogoutSuccess } from '../../store/auth';

function Navbar() {
  const navigate = useNavigate();
  // const history = useHistory();

  function handleClick() {
    navigate("/",{replace:true});
  }
  const dispatch = useDispatch();
  const token = useSelector((state) => state.auth.token)
  useEffect(() => {
    const token = localStorage.getItem("@token")

    if (token)
      dispatch(userLoginSuccess(token))

  }, [])
  // console.log(token);

  const LogoutHandler = ()=>{
    console.log("logged out");
    localStorage.clear()
    dispatch(userLogoutSuccess())
    handleClick()

  }

  return (
    <div>
      <nav className="navbar">
        <label className="navbar-toggle" id="js-navbar-toggle" for="chkToggle">
          <i className="fa fa-bars"></i>
        </label>
        <div onClick={() => {
          navigate("/")
        }}>
          <img src={require("../../assets/icons/logo.png")} style={{ height: 32, width: 32, objectFit: "contain", marginLeft: "20px" }} />
          <span style={{ marginLeft: "10px", color: "black" }}>Elite Wellness</span>
        </div>



        <input type="checkbox" id="chkToggle"></input>
        <ul className="main-nav" id="js-menu" >
          <form className="form-inline" style={{ justifyContent: "center" }}>
            <div className="input-group search-box" >
              <input type="text" className="form-control" placeholder="Search here...." aria-label="Search for..." />
              <span className="input-group-btn">
                <button className="btn btn-secondary" type="button"><SearchIcon /></button>
              </span>
            </div>
          </form>
          <li style={{ marginTop: "10px" }}>
            <Link to="/doctorlist" className="nav-links"   >Specialist</Link>
          </li>
          <li style={{ marginTop: "10px" }}>
            <Link to={"#"} className="nav-links">Video Consult</Link>
          </li>

          {
            token ? (
              <>
                <li style={{ marginTop: "10px" }}>
                  <Link to={"/profile"} className="nav-links">Profile
                  </Link>
                </li>
                <li style={{ marginTop: "10px" }}>
                  <div onClick={LogoutHandler} className="nav-links"> <button type="button" className="btn btn-outline-primary" style={{ paddingRight: "30px", marginRight: "20px", paddingLeft: "30px", paddingTop: "2px" }}>Logout</button></div>
                </li>
              </>
            ):(
              <>
              <li style={{ marginTop: "10px" }}>
                <Link to={"/login"} className="nav-links">Login
                </Link>
              </li>
              <li style={{ marginTop: "10px" }}>
                <Link to={"/signup"} className="nav-links"> <button type="button" className="btn btn-outline-primary" style={{ paddingRight: "30px", marginRight: "20px", paddingLeft: "30px", paddingTop: "2px" }}>Signup</button></Link>
              </li>
            </>
            )
      }

        </ul>
      </nav>



    </div>

  )
}

export default Navbar