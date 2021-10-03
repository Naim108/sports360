
import "./MenuBar.css";
import logo from "../..//images/logo/baller-logo-3.png";



const MenuBar = () => {

  return (
    <div className="MenuBar-container">
      <div className="container">
        <div className="row">
          <div className="col-md-2">
            <div className="logo-img">
              <img className="w-75" src={logo} alt="" />
            </div>
          </div>
          <div className="col-md-10">
            <div className="menu-container ">
              <ul className="d-flex align-items-end justify-content-end">
                <a to="/home" className="items">
                  <li>Home</li>
                </a>
                <a to="/sports" className="items">
                  <li>Sports</li>
                </a>
                <a to="/about" className="items">
                  <li>About us</li>
                </a>
                <a to="contact" className="items">
                  <li>Contact us</li>
                </a>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MenuBar;
