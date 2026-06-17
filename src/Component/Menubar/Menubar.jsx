import './Menubar.css'
import {Link, useLocation, useNavigate} from "react-router-dom";
import { assets } from "../../assets/assets.js";
import {useContext} from "react";
import {AppContext} from "../../Context/AppContext.jsx";

const Menubar = () => {
    const navigate = useNavigate();
    const location = useLocation();
    const {setAuthData,auth} = useContext(AppContext)
    const logout = () => {
localStorage.removeItem("token");
localStorage.removeItem("role");
setAuthData(null,null);
navigate("/login");
    }
    const isActive =(path) =>{
        return location.pathname === path;
    }
    const isAdmin =auth.role === "ROLE_ADMIN";
    return (
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark px-2">

            <Link className="navbar-brand" to="/">
                <img src={assets.logo} alt="Logo" height="40"/>
            </Link>

            <button
                className="navbar-toggler"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#navbarNav"
            >
                <span className="navbar-toggler-icon"></span>
            </button>

            <div className="collapse navbar-collapse p-2" id="navbarNav">

                <ul className="navbar-nav me-auto">

                    <li className="nav-item">
                        <Link className={`nav-link ${isActive('/dashboard')?'fw-bold text-warning': ''}`} to="/dashboard">
                            DASHBOARD
                        </Link>
                    </li>

                    <li className="nav-item">
                        <Link className={`nav-link ${isActive('/explore')?'fw-bold text-warning': ''}`} to="/explore">
                            EXPLORE
                        </Link>
                    </li>

                    {
                        isAdmin && (
                            <>
                                <li className="nav-item">
                                    <Link className={`nav-link ${isActive('/item')?'fw-bold text-warning': ''}`} to="/item">
                                        MANAGE ITEM
                                    </Link>
                                </li>

                                <li className="nav-item">
                                    <Link className={`nav-link ${isActive('/category')?'fw-bold text-warning': ''}`} to="/category">
                                        MANAGE CATEGORY
                                    </Link>
                                </li>

                                <li className="nav-item">
                                    <Link className={`nav-link ${isActive('/users')?'fw-bold text-warning': ''}`} to="/users">
                                        MANAGE USERS
                                    </Link>
                                </li>
                            </>
                        )
                    }
                    <li className="nav-item">
                        <Link className={`nav-link ${isActive('/orders')?'fw-bold text-warning': ''}`} to="/orders">
                            ORDER HISTORY
                        </Link>
                    </li>

                </ul>
<ul className="navbar-nav ms-auto ms-md-0 me-3 me-lg-4">
    <li className="nav-item dropdown">
        <a href="#" className="nav-link dropdown-toggle" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
<img src={assets.profile} alt="" height={32} width={32} />
        </a>
        <ul className="dropdown-menu dropdown-menu-end" aria-labelledby="navbarDropdown">
            <li>
                <a href="#!" className="dropdown-item">
                    Settings
                </a>
                <a href="#!" className="dropdown-item">
                    Activity log
                </a>
                {/*<li>*/}
                    <hr className="dropdown-divider" />
                {/*</li>*/}
                <a href="#!" className="dropdown-item" onClick={logout}>
                    Logout
                </a>
            </li>
        </ul>
    </li>
</ul>
            </div>

        </nav>
    )
}

export default Menubar;