import { Navigate, Outlet } from 'react-router-dom';

const PrivateRoute = () => {
    const loggedIn = true;

    if (!loggedIn) {
        return <Navigate to='/' />
    } else {
        return <Outlet />;
    }
};

export default PrivateRoute;