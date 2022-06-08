import { useNavigate } from 'react-router-dom';
import './Home.css';

const Home = () => {
    const navigate = useNavigate();

    const handleSubmit = event => {
        event.preventDefault();
        navigate('/dashboard');
    }

    return (
        <>
            <h1 className='home-title'>Welcome to Admin Panel</h1>
            <div className="box">
                <h2>Login</h2>
                <form id="form" onSubmit={handleSubmit}>
                    <div>
                        <input type="email" name="email" required />
                        <label>Email </label>
                    </div>
                    <div>
                        <input type="text" name="password" required />
                        <label>Password</label>
                    </div>
                    <input id="submit" type="submit" value="Submit" />
                </form>
            </div>
        </>
    );
};

export default Home;