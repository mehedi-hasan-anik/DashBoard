import { Outlet, useNavigate } from 'react-router-dom';
import './Sidebar.css';

const Sidebar = () => {
    const navigate = useNavigate();

    return (
        <aside>
            <div className='sidebar-wrapper'>
                <div className='sidebar-container'>
                    <h1>Dashboard</h1>
                    <ul>
                        <li
                            onClick={() => navigate('manage-users')}>
                            Manage Users
                        </li>
                        <li
                            onClick={() => navigate('add-user')}>
                            Add User
                        </li>
                    </ul>
                </div>
                <div style={{ padding: '10px' }}>
                    <Outlet />
                </div>
            </div>
        </aside>
    );
};

export default Sidebar;