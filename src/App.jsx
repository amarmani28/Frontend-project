import Menubar from './Component/Menubar/Menubar.jsx';
import {Routes, Route, useLocation, Navigate} from "react-router-dom";
import Dashboard from "./Pages/Dashboard/Dashboard.jsx";
import ManageCategory from "./Pages/ManageCategory/ManageCategory.jsx";
import ManageItems from "./Pages/ManageItems/ManageItems.jsx";
import Explore from "./Pages/Explore/Explore.jsx";
import ManageUsers from "./Pages/ManageUsers/ManageUsers.jsx";
import {Toaster} from "react-hot-toast";
import Login from "./Pages/Login/Login.jsx";
import OrderHistory from "./Pages/OrderHistory/OrderHistory.jsx";
import {AppContext} from "./Context/AppContext.jsx";
import {useContext} from "react";
import NotFound from "./Pages/NotFound/NotFound.jsx";



const App = () => {
    const location = useLocation();
    const {auth} = useContext(AppContext);

    const LoginRoute = ({element}) => {  // no usages
        if(auth.token) {
            return <Navigate to="/dashboard" replace />;
        }
        return element;
    }
    const ProtectedRoute = ({element, allowedRoles}) => {
        if (!auth.token) {
            return <Navigate to="/login" replace />;
        }

        if (allowedRoles && !allowedRoles.includes(auth.role)) {
            return <Navigate to="/dashboard" replace />;
        }

        return element;
    }
    return (
        <div>
            {location.pathname !== "/login" &&  <Menubar />}


<Toaster/>
            <Routes>

                <Route path="/dashboard" element={<Dashboard/>} />
                <Route path="/explore" element={<Explore/>} />
                <Route path="/category" element={<ProtectedRoute element={<ManageCategory/>} allowedRoles={['ROLE_ADMIN']} />} />
                <Route path="/users"  element={<ProtectedRoute element={<ManageUsers/>} allowedRoles={['ROLE_ADMIN']} />} />
                <Route path="/item" element={<ProtectedRoute element={<ManageItems/>} allowedRoles={['ROLE_ADMIN']} />} />
                <Route path="/Login" element={<LoginRoute element={<Login />}  />} />
                <Route path="/orders" element={<OrderHistory/>} />
                <Route path="/" element={<Dashboard/>} />
                <Route path="*" element={<NotFound/>} />

            </Routes>

        </div>
    );
}

export default App;