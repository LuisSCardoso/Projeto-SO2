import React from 'react';
import './Sidebar.css';

const Sidebar = () => {
    return (
        <div className="sidebar">
            <ul className="sidebar-menu">
                <li className="sidebar-item"><a href="#">Home</a></li>
                <li className="sidebar-item"><a href="#">Criar Reserva</a></li>

            </ul>
        </div>
    );
};

export default Sidebar;
