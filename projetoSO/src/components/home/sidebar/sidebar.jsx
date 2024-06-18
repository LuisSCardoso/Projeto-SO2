import React from 'react';
import './Sidebar.css';
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';

const Sidebar = () => {
    const navigate = useNavigate()

    const handleLogout = () => {
        localStorage.removeItem('authenticated')
        navigate('/')
    }
    return (
        <div className="sidebar">
            <ul className="sidebar-menu">
                <li className="sidebar-item"><Link to="/home">Home</Link></li>
                <li className="sidebar-item"><Link to="/newReservation">Criar Reserva</Link></li>
                <li className="sidebar-item"><button className="logout-button" onClick={handleLogout}>Logout</button></li>
            </ul>
        </div>
    );
};


export default Sidebar;
